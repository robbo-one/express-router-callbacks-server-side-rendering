const express = require('express')
const expressReact = require('express-react-views')

const routes = require('./routes')

const server = express()

// Middleware
server.engine('jsx', expressReact.createEngine())
server.set('view engine', 'jsx')
server.set('views', __dirname + '/views')

server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Routes
server.use('/', routes)

module.exports = server
