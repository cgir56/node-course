const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=45.479,-73.282'
request({ url: url, json: true }, (_error, response) => {
  console.log ('Temperature: ' + response.body.current.temperature)
  console.log('Weather: ' + response.body.current.weather_descriptions)
})


// new challenge of video 6_6
const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/1872%20rue%20des%20tulipes%20carigna%20quebec%20canada.json?types=address&access_token=pk.eyJ1IjoiY2dpcjU2IiwiYSI6ImNsMWpxOTYzYjIxaDIzanFpNmtvN24wOHoifQ.ALunGaboNNDkP3yBifilWw&limit=1'
request({ url: mapBoxUrl, json: true }, (_error, response) => {
  const longitude = response.body.features[0].center[1]
  const latitude = response.body.features[0].center[0]
  console.log('longitude: ' + longitude)
  console.log('latitude: ' + latitude)
})
