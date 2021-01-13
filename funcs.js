const fs = require('fs')

function writeFile (path, data) {
   fs.writeFile(path, data, 'utf8', (err) => {
    if (err) {
      return console.log(err)
    } else {
    console.log("Data saved!")
    }
  })
}

function readFile (path, callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
    data = JSON.parse(data)
    callback(data)
  }) 
}

module.exports = {
  writeFile: writeFile,
  readFile: readFile
}