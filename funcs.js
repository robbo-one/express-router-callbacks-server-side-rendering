const fs = require('fs')

function readFile (path, callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
  data = JSON.parse(data)
  callback(data)
  })
}

module.exports = {
  readFile: readFile
}