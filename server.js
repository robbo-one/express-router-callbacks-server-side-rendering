const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const routes = require('./routes/puppy')
// const homeRoutes = require('./routes/home')
const readWrite = require("./readWrite")


const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.use("/puppies", routes)
// server.use('/', homeRoutes)

server.get('/', (req, res) => {
    //let imagePath = ""
    readWrite.readingFile(data => {
        let data2 = {
            ...JSON.parse(data)
        }
        res.render('home', data2)
    })
})
    // fs.readFile('./data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log('There was an error', err)
    //         }
    //         else {
               
    //         }
    // })

// })

module.exports = server
