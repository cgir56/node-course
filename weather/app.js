const request = require('request')

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

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/1872%20rue%20des%20tulipes%20carignan%20quebec%20canada.json?types=address&access_token=pk.eyJ1IjoiY2dpcjU2IiwiYSI6ImNsMWpxOTYzYjIxaDIzanFpNmtvN24wOHoifQ.ALunGaboNNDkP3yBifilWw&limit=1'
request({ url: mapBoxUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the geocoding service!')
  } else if (response.body.features.length < 1) {
    console.log('Unable to find location!')
  } else {
    const longitude = response.body.features[0].center[1]
    const latitude = response.body.features[0].center[0]
    console.log('longitude: ' + longitude)
    console.log('latitude: ' + latitude)
  }
})
