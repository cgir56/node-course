const express = require('express')

const app = express()


// root route
app.get('', (req, res) => {
    res.send('<h1> Hello Express! </h1>')
})
// /help route
app.get ('/help', (req, res) => {
    res.send('<h2>Help page! </h2>')
})

// /about route
app.get ('/about', (req, res) =>{
    res.send('<h2>About page! </h2>')
})
// weather route
app.get ('/weather', (req, res) =>{
    res.send('Weather page!')
})
app.listen(3000, () => {
    console.log('Express server is up!')
})