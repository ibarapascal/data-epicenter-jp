const fs = require('fs');

module.exports = {
  readFiles: (dirName, onFileContent, onError) => {
    fs.readdir(dirName, (err, fileNames) => {
      if (err) {
        onError(err);
        return;
      }
      fileNames.forEach(fileName => {
        fs.readFile(dirName + fileName, 'utf-8', (err, content) => {
          if (err) {
            onError(err);
            return;
          }
          onFileContent(fileName, content);
        });
      });
    });
  }  
};

