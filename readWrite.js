const fs = require('fs')


function readingFile(callback) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('There was an error', err)
        } else {
            callback(data)
            }
        })
    }


// function writingFile(callback) {
//     fs.writeFile("./data.json", JSON.stringify(puppyInfo, null, 2), "utf8", (err) => {
//         if (err) {
//             console.log("there is an error: ", err)
//         } else {
//             callback(res.redirect("../" + req.params.id))
//         }
//     })
// }

module.exports = {
    // writingFile: writingFile,
    readingFile: readingFile
}