const path = require('path');
const rd = require(path.join(__dirname, '\\services\\readFiles'));
const wt = require(path.join(__dirname, '\\services\\writeFile'));
const process = require(path.join(__dirname, '\\services\\dataProcess'));

const saveName = 'DT_JP_BaseAttrs_M5';
const savePath = `csv\\${saveName}.csv`;

let result = [];
let counter = 0;

rd.readFiles('raw\\', (fileName, content) => {
  // if (fileName === 'test') {
  if (fileName !== 'test') {
    const list = content
      .split('\n')
      .filter((x, idx) => x !== '' && (counter === 0 || idx !== 0))
      .map(item => {
        const row = process.segments(item, process.defaultOptions);
        return mergeAttrs(row, mergeOptions);
      }
    );
    const usedList = filterData(list);
    result = result.concat(usedList);
    counter += 1;
    console.log(`${fileName} - ${usedList.length}`);
    wt.writeFile(savePath, result, { flag: "wx" });
  }
}, err => {
  throw err;
});

/**
 * 
 * @param {Object} obj 
 * @param {Array<{merge: Array<string>, attr: string}>} options 
 */
const mergeAttrs = (obj, options) => {
  options.forEach(x => {
    const value = x.merge.reduce((res, y) => ((
      res += obj[y]
    ), res), '');
    x.merge.forEach(y => delete obj[y]);
    obj[x.to] = value;
  })
  return obj;
}

const mergeOptions = [
  {
    merge: ['year', 'month', 'day', 'hour', 'minute', 'second'],
    to: 'time'
  },
  {
    merge: ['latitude', 'latitude_m'],
    to: 'latitude'
  },
  {
    merge: ['longitude', 'longitude_m'],
    to: 'longitude'
  }
];

/**
 * 
 * @param {Object} list 
 */
const filterData = (list) => {
  // format
  const usedList = list.map(item => {
    return Object.keys(item)
      .filter(x => usedAttrs.includes(x))
      .reduce((obj, y) => (
        obj[y] = item[y], obj
      ), {});
  })
  // range
  return usedList.filter(x => {
    const mag = Number(x.magnitude_a);
    const lon = formatLL(x.longitude);
    const lat = formatLL(x.latitude);   
    return mag >= 5
      && lon >= 120
      && lon <= 150
      && lat >= 20
      && lat <= 50
  }).slice();
}

/**
 * Hanlde the situation of `- 91234` to later compare
 * @param {string} str 
 */
const formatLL = (str) => {
  const strList = str.split("");
  strList.splice(-4, 0, ".");
  return Number(
    strList
      .map(x => x.replace(' ', '0'))
      .join('')
    );
}

const usedAttrs = [
  'time',
  'latitude',
  'longitude',
  'depth',
  'magnitude_a'
];
