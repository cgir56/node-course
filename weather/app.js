const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=45.479,-73.282'
// request({ url: url, json: true }, (error, response) => {
//   if(error){
//     console.log('Unable to connect to the weather service!')
//   }
//   else if (response.body.error) {
//     console.log ('Unable to find location')
//   }
//   else {
//     console.log ('Temperature: ' + response.body.current.temperature)
//     console.log ('Weather: ' + response.body.current.weather_descriptions)
//   }
// })

// find the long/lat

//
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-543, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})


geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
