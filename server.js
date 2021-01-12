const express = require('express')
const hbs = require('express-handlebars')

const fs = require('fs')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.get('/', (req, res) => {
  
  fs.readFile('./data.json', (err, puppies) => {
    if (err) {
      console.log('Something went wrong: ', err)
  } else { 
    const parse = JSON.parse(puppies)
    res.render('home', parse)
    } 
  })
  
    
})

module.exports = server
