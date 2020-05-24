const fs = require('fs');

const fileName = 'DT_JP_BaseAttrs_M1';
const readPath = `csv\\sample\\${fileName}.csv`;
const writePath = `json\\sample\\${fileName}_from_2011.json`;

fs.readFile(readPath, 'utf-8', (err, content) => {
  if (err) throw err;
  const list = content.split('\n');
  const headerList = list[0].split(',');
  const resultList = list.slice(1).map(item => (
    item.split(',').reduce((obj, x, idx) => (
      obj[headerList[idx]] = x, obj
    ), {})
  ));
  const result = {
    data: customizedFilter(resultList)
  };
  fs.writeFile(writePath, JSON.stringify(result), 'utf8', (err) => {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log(`${fileName} JSON saved!`);
    }
  })
});

const customizedFilter = (list) => {
  return list.filter(x => Number(x.timestamp) >= 1293807600).slice();
}

// 1293807600	Saturday, January 1, 2011 12:00:00 AM GMT+09:00
// 1299769200	Friday, March 11, 2011 12:00:00 AM GMT+09:00
// 1299822378 Friday, March 11, 2011 2:46:18 PM GMT+09:00