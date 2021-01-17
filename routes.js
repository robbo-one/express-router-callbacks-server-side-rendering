const express = require('express')
const data = require('./data.json')
const fs = require('fs')
//const funcs = require('./funcs.js')
const { writeFile } = require('./funcs.js')


//create router
const router = express()

//Route to get a particular puppy:
router.get('/:id', (req, res) => {
  id = req.params.id
  const chosenPuppy = data.puppies.find(val => val.id == id)
    res.render('details', chosenPuppy)
})

//Route to get to form to edit puppy
router.get('/:id/edit', (req, res) => {
  id = req.params.id
  const editPuppy = data.puppies.find(val => val.id == id)
    res.render('edit', editPuppy)
})

router.post('/:id/edit', (req, res) => {
  const id = req.params.id //find pup in the puppies array with that id and save as updatePuppy
  const updatePuppy = data.puppies.find(val => val.id == id)

  updatePuppy.name = req.body.name //update pup in array with the request object eg.form data
  updatePuppy.breed = req.body.breed
  updatePuppy.owner = req.body.owner

  const newPup = JSON.stringify(data, null, 2)//newPup is js obj that is converted to JSON string

  writeFile('data.json', newPup)//stringified newPup is written to data.json

  delete updatePuppy._locals

  res.redirect(`/puppies/${id}`)
})



//Export router
module.exports = router
