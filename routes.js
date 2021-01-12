const express = require('express')
const fs = require('fs')
const router = express.Router()



router.get('/:id', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {

    if (err){
      console.log('puppies Not working')
    }
    else {
      data = JSON.parse(data)
      const puppy = data.puppies.find(element => {
        return element.id == req.params.id
      })
      
      res.render('details', puppy)
      }
      })
    })
  
    module.exports = router