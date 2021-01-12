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
      const dogPic = data.puppies.find(puppies => puppies.id == id)
      res.render('details',dogPic)
    }
  })
}) 

module.exports = router