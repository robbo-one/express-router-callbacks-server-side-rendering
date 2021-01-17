const fs = require('fs')

//Callback - data retrieved is parsed and saved to "data" object (L9), the Callback function is then called to provide the data
//required
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

function writeFile (path, data) {
  fs.writeFile(path, data, 'utf-8', (err) => {
    if (err) {
      return console.log(err)
    } else {
  console.log("Data saved")
  }
})
}





module.exports = {
  readFile: readFile,
  writeFile: writeFile
}