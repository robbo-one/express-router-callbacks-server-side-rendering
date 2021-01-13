const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')

//const server = express()
//const router = require('./routes')


function importDetailsAsObject (callback){
  fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      data = JSON.parse(data)
      callback(data)
    }
  })
  
}

// function doggieData (callback){
//   fs.readFile ("./data.json", "utf8", (err, data) => {
//     if (err) {
//       console.log("ERROR", err)
//     }
//     else {
//       data = JSON.parse(data)
//       const id = req.params.id
//       const dogDetails = data.puppies.find(puppies => puppies.id == id)
//       callback(dogDetails)
//   }   
// })}





module.exports = {
  importDetailsAsObject,
}