const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/:id', (req, res) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      console.log('Something went wrong: ', err)
    } else { 
      data = JSON.parse(data)
      
      const puppy = data.puppies.find(element => {
        return element.id == req.params.id
      })



      res.render('details', puppy)
    } 
  })
  
})





module.exports= router