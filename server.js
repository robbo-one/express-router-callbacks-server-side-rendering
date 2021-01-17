const express = require('express')
//const fs = require('fs')
const hbs = require('express-handlebars')
const routes = require('./routes.js')
const { readFile } = require('./funcs.js')


const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))



// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

//Use and define path router will see
server.use('/puppies', routes)

//Get server running with default route
server.get('/', (req, res) => {
  //console.log("Pupparazzi")
  readFile('./data.json', data => {
    //console.log(data)
    res.render('home', data)
  }) 
})





module.exports = server

//Initial code to read file - now moved into readFile function:
// fs.readFile('./data.json', 'utf-8', (err, data) => {
// data = JSON.parse(data)
// res.render('home', data)