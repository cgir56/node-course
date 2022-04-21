    const http = require ('http')
const url = 'http://api.weatherstack.com/current?access_key=ed9ed73cf1637626337acd7e2877588a&query=45,-73'
const request = http.request(url, (response) =>{
    let data = ''
    response.on( 'data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log (body)
    })
    response.on ('error', () =>{
        console.log('An error:', error)
    })
})

request.end()

