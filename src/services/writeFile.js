const fs = require('fs');

module.exports = {
  writeFile: (path, list) => fs.writeFile(path, extractAsCSV(list), 'utf8', (err) => {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log(`${path} saved!`);
    }
  })
};

const extractAsCSV = (jsonArray) => {
  const header = Object.keys(jsonArray[0]).join(',');
  const rows = jsonArray.map(x => Object.values(x).join(','));
  return [header].concat(rows).join('\n');
}