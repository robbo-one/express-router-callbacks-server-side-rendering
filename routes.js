const express = require('express')
const router = express.Router()
const fileFunc = require('./fileReader')
const fs = require('fs')

router.get('/:id', (req, res) => {
  fileFunc.readingFile(function(data) {
    const puppy = data.puppies.find((element) => {
      return element.id == req.params.id;
    });
  
    res.render('details', puppy);
  })

})


router.get('/:id/edit', (req, res) => {
  fileFunc.readingFile(function(data) {
    const puppy = data.puppies.find((element) => {
      return element.id == req.params.id;
    });
      res.render('edit', puppy);
    
  });
})

router.post("/:id/edit", (req, res) => {
  const editedData = req.body;
  fileFunc.readingFile(function(data) {
    for (let i = 0; i < data.puppies.length; i++) {
      if (data.puppies[i].id == req.params.id) {
        data.puppies[i].name = editedData.name
        data.puppies[i].owner = editedData.owner
        data.puppies[i].breed = editedData.breed
      }
    }
    fileFunc.writingFile(data)
    res.redirect('/puppies/' + req.params.id);
  })
    });






module.exports = router