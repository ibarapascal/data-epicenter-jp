const path = require('path');
const rd = require(path.join(__dirname, '\\services\\readFiles'));
const wt = require(path.join(__dirname, '\\services\\writeFile'));
const process = require(path.join(__dirname, '\\services\\dataProcess'));

rd.readFiles('raw\\', (fileName, content) => {
  // if (fileName === 'test') {
  if (true) {
    const list = content.split('\n').filter(x => x !== '').map(item => (
      process.segments(item, process.defaultOptions)
    ));
    wt.writeFile(`csv\\base\\${fileName}.csv`, list);
  }
}, err => {
  throw err;
});

