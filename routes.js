const express = require('express')
const data = require('./data.json')
const fs = require('fs')
const funcs = require('./funcs.js')
const { writeFile } = require('./funcs.js')


const router = express()

router.get('/:id', (req, res) => {
  const id = req.params.id
  const puppyInfo = data.puppies.find(val => val.id == id)
  res.render('details', puppyInfo)
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  const editPuppy = data.puppies.find(val => val.id == id)
  res.render('edit', editPuppy)
})

router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  const updatePuppy = data.puppies.find(val => val.id == id)
  
    updatePuppy.name = req.body.name
    updatePuppy.breed = req.body.breed
    updatePuppy.owner = req.body.owner
    delete updatePuppy._locals


  const newPup = JSON.stringify(data, null, 2)

  writeFile('data.json', newPup)

  // fs.writeFile('data.json', newPup, 'utf8', (err) => {
  //   if (err) {
  //     return console.log(err)
  //   } else {
  //   console.log("Data saved!")
  //   }
  // })
  res.redirect(`/puppies/${id}`)
})

module.exports = router