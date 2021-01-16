const express = require('express')
const fs = require('fs')
const hbs = require('express-handlebars')
const { readFile } = require('./funcs.js')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
//server.use('/puppies', routes)


server.get('/', (req, res) => {
  console.log("Pupparazzi")
  readFile('./data.json', data => {
    console.log(data)
    res.render('home', data)
  }) 
})


module.exports = server


