const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const puppies = require('./data.json')
const routes = require('./routes.js')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.get('/', (req, res) => {
  res.render('home', puppies)
})
server.use('/puppies', routes)
module.exports = server
