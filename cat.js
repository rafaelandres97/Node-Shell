const fs = require('fs');


module.exports = function(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });

}