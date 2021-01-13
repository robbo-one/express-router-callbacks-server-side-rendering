//const { Router } = require('express')
const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/:id', (req,res) => {
  fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      data = JSON.parse(data)
      const id = req.params.id
      // console.log(data)
      const dogDetails = data.puppies.find(puppies => puppies.id == id)
      res.render('details',dogDetails)
    }
  })
}) 

router.get('/:id/edit', (req,res) => {
  fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      data = JSON.parse(data)
      const id = req.params.id
      const dogDetails = data.puppies.find(puppies => puppies.id == id)

      res.render('edit', dogDetails)
    }
  })
}) 

router.post('/:id/edit', (req,res) => {
  fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      data = JSON.parse(data)
      const id = req.params.id
      const dogDetails = data.puppies.find(element => element.id == id)
      dogDetails.name = req.body.name
      dogDetails.breed = req.body.breed
      dogDetails.owner = req.body.owner
      //const updatedDog = const updatedDog = JSON.stringify(dogDetails,null,2)
      
      fs.writeFile("./data.json", JSON.stringify(data,null,2), (err) => {
        if (err) {
          throw err
        } else {
        console.log(typeof dogDetails)
        console.log(JSON.stringify(dogDetails))
        console.log("Your changes have been made!")
        res.redirect(`/puppies/${id}`)
        }
      })
    }
  })
}) 




      module.exports = router