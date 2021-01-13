const express = require('express')
const fs = require('fs')
const router = express.Router()
// const data = require('../data.json') 

router.get('/:id/form', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {

    if (err){
      console.log('Form Not working')
    }
    else {
      data = JSON.parse(data)
      const puppy = data.puppies.find(element => {
        return element.id == req.params.id
      })
      
      res.render('form', puppy)
      }
      })
    })

    module.exports = router