const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=45.479,-73.282'
request({url:url, json:true}, (error, response) => {
    console.log ('Temperature: ' + response.body.current.temperature)
    console.log ('Weather: ' + response.body.current.weather_descriptions)
})