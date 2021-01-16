const fs = require('fs')

function readFile (path, callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.log("Error", err)
    } else {
  data = JSON.parse(data)
  callback(data)
  }
})
}

module.exports = {
  readFile: readFile
}