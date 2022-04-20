const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=' + latitude + ',' + longitude
  request({ url, json: true }, (error, {body}) => {
    if(error){ 
      callback('Unable to connect to the weather service!',undefined)
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        weather: body.current.weather_descriptions
      })
    }  
  })
}

module.exports = forecast

