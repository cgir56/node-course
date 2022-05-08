const path = require('path')
const express = require('express')

const app = express()

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

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