const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// check the location argument
const address = process.argv[2]
if (!address){
  console.log ('Enter a valid location')
}
else{
  // chaining geocode and forecast
  geocode( address, (error, data) => {
    if(error){
      return console.log(error)
    }
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecastData)
    })
  })
}



