const express = require('express')
const hbs = require('express-handlebars')
const server = express()

const puppyRoutes = require('./routes/puppies')
const indexRoutes = require('./routes/index.js')

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/puppies', puppyRoutes)
server.use('/', indexRoutes)

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here


module.exports = server
