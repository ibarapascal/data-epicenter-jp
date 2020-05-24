const path = require('path');
const rd = require(path.join(__dirname, '\\services\\readFiles'));
const wt = require(path.join(__dirname, '\\services\\writeFile'));
const process = require(path.join(__dirname, '\\services\\dataProcess'));

const saveName = 'DT_JP_BaseAttrs_M5';
const savePath = `csv\\sample\\${saveName}.csv`;

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
    let value = '';
    switch (x.to) {
      case 'timestamp':
        const list = x.merge.map(x => x !== 'month' ? Number(obj[x]) : Number(obj[x]) - 1);
        value = new Date(...list).getTime() / 1000;
        break;
      case 'latitude':
      case 'longitude':
        const preNum = obj[x.to]
          .split('')
          .map(x => x.replace(' ', '0'))
          .join('');
        const sufNum = (obj[`${x.to}_m`] / 60)
          .toFixed(4);
        value = Number(`${preNum}${sufNum.slice(1)}`);
        break;
      default:
        break;
    }
    x.merge.forEach(y => delete obj[y]);
    obj[x.to] = value;
  })
  return obj;
}

const mergeOptions = [
  {
    merge: ['year', 'month', 'day', 'hour', 'minute', 'second'],
    to: 'timestamp'
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
    const lon = Number(x.longitude);
    const lat = Number(x.latitude);   
    return mag >= 5
      && lon >= 120
      && lon <= 150
      && lat >= 20
      && lat <= 50
  }).slice();
}

const usedAttrs = [
  'timestamp',
  'latitude',
  'longitude',
  'depth',
  'magnitude_a'
];
