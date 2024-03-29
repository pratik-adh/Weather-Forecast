const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhdGlrYWRoIiwiYSI6ImNqeHUweTVrcDB3cmYzbW8xZzJydmJsbGcifQ.dzsO5xLQYraXOrVTuGcfzA&limit=1'
    request({url:url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services.', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Please provide a valid location.', undefined)
        }
        else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1], 
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode