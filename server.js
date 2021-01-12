const express = require('express')
const hbs = require('express-handlebars')
const dogs = require('./data.json')
const fs = require('fs')
const server = express()


// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.get('/', (req,res) => {
  const dogdata = fs.readFile ("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err)
    }
    else {
      return dogdata
    }
  })

  res.render('home', dogdata)
})

module.exports = server
