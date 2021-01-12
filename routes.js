const express = require('express')
const { route } = require('./server')
const routes = express.Router()
const puppies = require('./data.json')
module.exports = routes




routes.get('/:id',(req, res) => {
  let id = req.params.id
  let puppy = puppies.puppies.find(element => element.id == id)
  res.render('details', puppy)
})