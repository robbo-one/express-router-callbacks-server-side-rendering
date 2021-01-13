const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/:id', (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      data = JSON.parse(data);

      const puppy = data.puppies.find((element) => {
        return element.id == req.params.id;
      });

      res.render('details', puppy);
    }
  });
});

router.get('/:id/edit', (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      data = JSON.parse(data);

      const puppy = data.puppies.find((element) => {
        return element.id == req.params.id;
      });
      res.render('edit', puppy);
    }
  });
})

router.post("/:id/edit", (req, res) => {
  const editedData = req.body;
  fs.readFile("./data.json", (err, data) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      data = JSON.parse(data)

      for (let i = 0; i < data.puppies.length; i++) {
        if (data.puppies[i].id == req.params.id) {
          data.puppies[i].name = editedData.name
          data.puppies[i].owner = editedData.owner
          data.puppies[i].breed = editedData.breed
        }
      }
      const stringData = JSON.stringify(data, null , 2);
      fs.writeFile("./data.json", stringData, 'utf-8', (err) => {
        if (err) throw err;
      });
      res.redirect('/puppies/' + req.params.id);
    }
  });
});




module.exports= router