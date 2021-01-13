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
    // console.log(foundPuppy)
    // console.log('here are the puppies', filecontents)
    res.render('details', foundPuppy)
  }
    }
)
})


// gets the page before a change
router.get('/:id/edit', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    const puppiesList = JSON.parse(filecontents)
    const puppyId = req.params.id
    
    if(err){
      console.log('big error', err)
      
    } else {
    const foundPuppy = puppiesList.puppies.find(puppy => puppy.id == puppyId)
    // console.log(foundPuppy)
    // console.log('here are the puppies', filecontents)
    res.render('edit', foundPuppy)
  }
    }
)
})

//updates the page
router.post('/:id/edit', (req, res) => {
  let updatedPuppy = req.body
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    const puppiesList = JSON.parse(filecontents)
    const puppyId = req.params.id
    if(err){
      console.log('big error', err)
    } else {
      const foundPuppy = puppiesList.puppies.find(puppy => puppy.id == puppyId)
       Object.assign(foundPuppy, updatedPuppy)
      const puppyList = JSON.stringify(puppiesList, null, 2)
      fs.writeFile('./data.json', puppyList, 'utf8', (err, puppyData) =>{
        if(err){
          console.log(err)
        }else{ 
        res.redirect('/puppies/' + puppyId)
        }
      })
  }
})
})


//updates the page
router.post('/:id/edit', (req, res) => {
  let updatedPuppy = req.body
  getPuppies((puppiesList) => {
    const puppyId = req.params.id
      updatePuppy()
      const puppyList = JSON.stringify(puppiesList, null, 2)
      fs.writeFile('./data.json', puppyList, 'utf8', (err, puppyData) =>{
        if(err){
          console.log(err)
        }else{ 
        res.redirect('/puppies/' + puppyId)
        }
      })
})
})

function  updatePuppy(){
  Object.assign(foundPuppy, updatedPuppy)
}

function getPuppies(callback) {
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    if(err){
      console.log('big error', err)
    } else {
      const puppiesList = JSON.parse(filecontents)
      callback(puppiesList)
    }
  })
}

function getPuppy(puppiesList, puppyId) {
  return puppiesList.puppies.find(puppy => puppy.id == puppyId)
}



module.exports = router