const express = require('express')
const fs = require('fs')
const data = require('../data.json')
const router = express.Router()



// recieving puppy id, reads json file and shows puppies

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

    // shows individual puppy deatails and edit option.

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

        // takes new details and re writes original details of that specific puppy

        router.post('/:id/edit', (req, res) => {
          const id = req.params.id
          const updatePuppy =  data.puppies.find(element => element.id == id)

          updatePuppy.name = req.body.name
          updatePuppy.breed = req.body.breed
          updatePuppy.owner = req.body.owner
          delete updatePuppy._locals
          
          
          console.log(data.puppies)

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
          
   
 
              
          
         
         
         
         
         
         
      
                
      









