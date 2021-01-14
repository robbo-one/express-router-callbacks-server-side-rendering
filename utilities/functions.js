const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')

//const server = express()
//const router = require('./routes')


function getDoggieData(callback) {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    } else {
      data = JSON.parse(data)
      callback(data)
    }
  })
}



module.exports = {
  getDoggieData
}