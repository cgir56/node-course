const fs = require('fs')
const { json } = require('stream/consumers')


// const book = {
//     title: 'Uprooted',
//     auhtor: 'Naomi Novik'
// }

// // convert book to JSON

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON)
// console.log (parsedData.auhtor)

// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Christian'
data.age = 65
const personJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', personJSON)

