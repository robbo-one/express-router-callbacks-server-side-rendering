const express = require('express')
const router = express.Router()
const readWrite = require("../readWrite")

router.get('', (req, res) => {
    readWrite.readingFile(data => {
        let data2 = {
            ...JSON.parse(data)
        }
        res.render('home', data2)
    })
    //let imagePath = ""
    // fs.readFile('./data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log('There was an error', err)
    //         }
    //         else {
                
    //         }
    // })

})