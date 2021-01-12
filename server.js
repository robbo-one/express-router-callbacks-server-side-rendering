const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const fs = require('fs')

const server = express()

server.use('/puppies', routes)



// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.get('/', (req, res) => {
  
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      console.log('Something went wrong: ', err)
    } else { 
      data = JSON.parse(data)
      res.render('home', data)
    } 
  })
  
    
})

module.exports = server
