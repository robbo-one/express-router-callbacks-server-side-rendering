const express = require('express')
const fs = require('fs')

const router = express.Router()




router.get("/:id", (req, res) => {
    let viewData = {
        id: 0,
        name: "",
        owner: "",
        image : "",
        breed: ""

    }
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('There was an error', err)
            } else {
              let puppyInfo = {
            ...JSON.parse(data)
              }
            viewData = puppyInfo.puppies.find(image => image.id == req.params.id)
              res.render("details", viewData)
              return
            }
        })

})

module.exports = router