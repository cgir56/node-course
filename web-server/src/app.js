const express = require('express')

const app = express()


// root route
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})
// /help route
app.get ('/help', (req, res) => {
    res.send([
        {
            name: 'Christian',
            age: 65
        },
        {
            name: 'Brigit',
            age: 63
        }]
        
        
    )

})
// /about route
app.get ('/about', (req, res) =>{
    res.send('<title>About page! </title>')
})
// weather route
app.get ('/weather', (req, res) =>{
    res.send({
        location: 'Carignan',
        temperature: 19
    })
})
app.listen(3000, () => {
    console.log('Express server is up!')
})