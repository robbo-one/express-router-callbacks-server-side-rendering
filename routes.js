const express = require('express')
const fs = require('fs')
const data = require('./data.json')
// const { defaultMaxListeners } = require('stream')
const router = express.Router()




router.get('/:id', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {

    if (err){
      console.log('puppies Not working')
    }
    else {
      data = JSON.parse(data)
      const puppy = data.puppies.find(element => {
        return element.id == req.params.id
      })
      
      res.render('details', puppy)
      }
      })
    })
    router.get('/:id/edit', (req, res) => {
      fs.readFile('./data.json', 'utf-8', (err, data) => {
    
        if (err){
          console.log('puppies Not working')
        }
        else {
          data = JSON.parse(data)
          const puppy = data.puppies.find(element => {
            return element.id == req.params.id
          })
          
          res.render('edit', puppy)
          }
          })
        })


        router.post('/:id/edit', (req, res) => {
          const id = req.params.id
          const updatePuppy =  data.puppies.find(element => element.id == id)

          updatePuppy.name = req.body.name
          updatePuppy.breed = req.body.breed
          updatePuppy.owner = req.body.owner
          delete updatePuppy._locals
          
          
          conata = require('./dat
          const newPup = JSON.stringify(data, null, 2)
        
          fs.writeFile('data.json', newPup, 'utf8', (err) => {
            if (err) {
              return console.log(err)
            } else {
            console.log("Data saved!")
            }
          })
       
          
           res.redirect(`/puppies/${id}`)
         
             })
         
             module.exports = router
          
   
 
              
          
         
         
         
         
         
         
      
                
      









