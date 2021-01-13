const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const server = express()
const router = require('./routes')
const func = require('./utilities/functions')

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.get('/', (req,res) => {
  func.importDetailsAsObject (data => res.render('home', data))
})

server.use ('/puppies', router)
 server.use ('/puppies/:id/edit', router)
server.use (func, router)

module.exports = server
