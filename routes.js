const express = require('express')
const fs = require('fs')
const readWrite = require("./readWrite")

const router = express.Router()




router.get("/:id", (req, res) => {
    let viewData = {
        id: 0,
        name: "",
        owner: "",
        image: "",
        breed: ""

    }
    // fs.readFile('./data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log('There was an error', err)
    //         } else {
    readWrite.readingFile(data => {
        let puppyInfo = {
            ...JSON.parse(data)
        }
        viewData = puppyInfo.puppies.find(image => image.id == req.params.id)
        res.render("details", viewData)
        return
    })

    // }
    // })

})

router.get('/:id/edit', (req, res) => {
    let viewData = {
        id: 0,
        name: "",
        owner: "",
        image: "",
        breed: ""

    }
    // fs.readFile('./data.json', 'utf8', (err, data) => {
    //     if (err) {
        readWrite.readingFile(data => {
            let puppyInfo = {
                ...JSON.parse(data)
            }
            viewData = puppyInfo.puppies.find(image => image.id == req.params.id)
            res.render("edit", viewData)
            return
        })
        //     console.log('There was an error', err)
        // } else {
            
    //     }
    // })
})


router.post('/:id/edit', (req, res) => {
    let viewData = {
        id: 0,
        name: "",
        owner: "",
        image: "",
        breed: ""
    }

    // fs.readFile('./data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log('There was an error', err)
    //     } else {
        readWrite.readingFile(data => {
            let puppyInfo = {
                ...JSON.parse(data)
            }
            viewData = puppyInfo.puppies.find(puppy => puppy.id == req.params.id)

            viewData.name = req.body.name
            viewData.owner = req.body.owner
            viewData.breed = req.body.breed

            fs.writeFile("./data.json", JSON.stringify(puppyInfo, null, 2), "utf8", (err) => {
                if (err) {
                    console.log("there is an error: ", err)
                } else {
                    res.redirect("../" + req.params.id)
                }
            })
        })
         
    //     }

    // })

})


module.exports = router