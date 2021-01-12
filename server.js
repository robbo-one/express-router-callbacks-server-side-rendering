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
  
  fs.readFile('./data.json', 'utf8', (err, filecontents) => {
    const newFileConts = JSON.parse(filecontents)
  if(err){
    console.log('big error', err)
  } else {
    console.log('here are the puppies', filecontents)
    res.render('home', newFileConts)
  }
})

})





module.exports = server
