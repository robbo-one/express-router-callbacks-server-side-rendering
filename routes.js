//const { Router } = require('express')
const express = require('express')
const fs = require('fs')
const router = express.Router()
const func = require('./utilities/functions')

// Pull data from data file and rendering to details
router.get('/:id', (req, res) => {

  const id = req.params.id
  
  func.getDoggieData(data => {
    const dogDetails = data.puppies.find(puppies => puppies.id == id)
    res.render('details', dogDetails)
  })
  // fs.readFile ("./data.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.log("ERROR", err)
  //   }
  //   else {
  //     data = JSON.parse(data)
  //     const id = req.params.id
  //     const dogDetails = data.puppies.find(puppies => puppies.id == id)
  //     res.render('details',dogDetails)
  //   }
  // })
})

//Routing to dog editing page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  
  func.getDoggieData(data => {
    const dogDetails = data.puppies.find(puppies => puppies.id == id)
    res.render('edit', dogDetails)

  // fs.readFile("./data.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.log("ERROR", err)
  //   } else {
  //     data = JSON.parse(data)
  //     const id = req.params.id
  //     const dogDetails = data.puppies.find(puppies => puppies.id == id)
  //     res.render('edit', dogDetails)
  //   }
  })
})

//Add edits to data.json and redirect to new updated dog page
router.post('/:id/edit', (req, res) => {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    } else {
      data = JSON.parse(data)
      const id = req.params.id
      const dogDetails = data.puppies.find(element => element.id == id)
      dogDetails.name = req.body.name
      dogDetails.breed = req.body.breed
      dogDetails.owner = req.body.owner
      fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
          throw err
        } else {
          console.log("Your changes have been made!")
          res.redirect(`/puppies/${id}`)
        }
      })
    }
  })
})




module.exports = router