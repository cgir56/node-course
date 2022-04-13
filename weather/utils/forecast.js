const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=' + latitude + ',' + longitude
  request({ url: url, json: true }, (error, response) => {
    if(error){ 
      callback('Unable to connect to the weather service!',undefined)
    }
    else if (response.body.error) {
      callback('Unable to find location', undefined)
    }
    else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        weather: response.body.current.weather_descriptions
      })
    }  
  })
}

module.exports = forecast

