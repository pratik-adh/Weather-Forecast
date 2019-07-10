const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fdb5515beba4389927164d8d644a9406/'+latitude+','+longitude+'?units=si'

    request({url: url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }
        else if(response.body.error){
            callback('Unable to fetch the location from the given location', undefined)
        }
        else{
            callback(error,response.body.daily.data[0].summary+' The current time is ' +response.body.currently.time+', with temperature '+response.body.currently.temperature+'. Chances of raining today is '+response.body.currently.precipProbability)
        }
    })
}
module.exports = forecast

