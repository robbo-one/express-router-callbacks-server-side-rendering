const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) => {
  
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    const newFileConts = JSON.parse(filecontents)
  if(err){
    console.log('big error', err)
  } else {
    console.log('here are the puppies', filecontents)
    res.render('home', newFileConts)
  }
})
})

router.get('/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    const puppiesList = JSON.parse(filecontents)
    const puppyId = req.params.id
    
    if(err){
      console.log('big error', err)
      
    } else {
    const foundPuppy = puppiesList.puppies.find(puppy => puppy.id == puppyId)
    console.log(foundPuppy)
    console.log('here are the puppies', filecontents)
    res.render('details', foundPuppy)
  }
    }
)
})

module.exports = router