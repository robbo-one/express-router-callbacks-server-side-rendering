const express = require('express')
const data = require('./data.json')
//const fs = require('fs')
//const funcs = require('./funcs.js')

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
  const updatePuppy = data.puppies.find(val => val.id == id)
    res.render('edit', updatePuppy)
})




//Export router
module.exports = router
