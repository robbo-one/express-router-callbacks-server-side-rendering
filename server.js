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

// const viewData = {
//     data: data
// }

server.get('/', (req, res) => {
    //let imagePath = ""
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('There was an error', err)
            }
            else {
                //JSON.parse(data)
                let data2 = {
                    ...JSON.parse(data)
                }
                res.render('home', data2)
                // console.log(data2.puppies.length)
                // for(let i = 0; i < data2.puppies.length; i++) {
                //     console.log(data2.puppies[i].image)
                //     res.render(data2.puppies[i].image)
                //     return 
                // }
                
                

                // Object.keys(data)
                // console.log(Object.values(data))
                // for (let i = 0; i < data.length; i++){
                //     imagePath = data.puppies
                //     // console.log(imagePath)
                // }
            }
    })

    // res.render("home", viewData)
})

module.exports = server
