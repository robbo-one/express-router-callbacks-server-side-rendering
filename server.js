const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const server = express()
const router = require('./routes')


// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.get('/', (req,res) => {
  fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      data = JSON.parse(data)
      res.render('home', data)
    }
  })
})

server.use ('/puppies', router)

module.exports = server
