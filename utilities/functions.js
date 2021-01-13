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

function paramsId (callback){
  fs.readFile ("./data.json", "utf8", (err, data) => {
      if (err) {
        console.log("ERROR", err)
      }
      else {
       data = JSON.parse(data)
       callback(dogDetails)
  }   
})}





module.exports = {
  importDetailsAsObject,
  paramsId
}