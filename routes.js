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
          data.puppies[i] = editedData;
          data.puppies[i].id = req.params.id;
        }
      }
      const stringData = JSON.stringify(data);
      fs.writeFile("./data.json", stringData, (err) => {
        if (err) throw err;
        console.log("this works baby!!");
      });
      res.render('details', data.puppies);
    }
  });
});




module.exports= router