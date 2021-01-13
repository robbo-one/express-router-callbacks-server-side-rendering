const express = require('express')

const fs = require('fs')

function writingFile (data, err) {
  if (err) throw err; 
  else {
    const stringData = JSON.stringify(data, null , 2);
    fs.writeFile("./data.json", stringData, 'utf-8', (err) => {
    if (err) throw err;
    });
  }
}




module.exports = {
  writingFile : writingFile,
}