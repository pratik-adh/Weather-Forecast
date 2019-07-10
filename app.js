const argv = require('argv')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address){
    console.log('Please provide an address!')
}
else{
    geocode(address, (error, data) => {
        if(error){
            return console.log('Error')
            // We use return keyboard because after error is printed 
            //then return keyboard automatically exits from the function 
            // we can use else condition insted of return for 'data':i.e below code 
        }
        forecast(data.latitude, data.longitude, (error , forecastData) => {
            if(error){
                return console.log('Error')
            }
            console.log(data.location)
            console.log(forecastData)
            
        })
    })
}


