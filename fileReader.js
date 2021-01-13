const express = require('express')

const fs = require('fs')
const data = require('./data.json')


function writingFile (data, err) {
  if (err) throw err; 
  else {
    const stringData = JSON.stringify(data, null , 2);
    fs.writeFile("./data.json", stringData, 'utf-8', (err) => {
    if (err) throw err;
    });
  }
}

function readingFile (callback) {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      data = JSON.parse(data);
      callback(data)
      return
    }
  })          

}




module.exports = {
  writingFile : writingFile,
  readingFile : readingFile,
}