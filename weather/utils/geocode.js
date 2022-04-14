const request = require('request')

const geocode = (address, callback) => {
  const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?types=address&access_token=pk.eyJ1IjoiY2dpcjU2IiwiYSI6ImNsMWpxOTYzYjIxaDIzanFpNmtvN24wOHoifQ.ALunGaboNNDkP3yBifilWw&limit=1'
  request({ url: mapBoxUrl, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to the location service!', undefined)
    }
    else if (response.body.features.length === 0) {
      callback ('Unable to find location', undefined)
    }
    else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
