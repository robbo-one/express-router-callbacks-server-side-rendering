
const express = require('express')
const fs = require('fs')
const router = express.Router()
const data = require('../data.json')

router.get('/', (req,res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {

    if (err){
      console.log('puppies Not working')
    }
    else {
     
      data =JSON.parse(data)
      res.render('home', data)
    }
    })
  })

  module.exports = router