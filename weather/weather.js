const request = require("request");


var getWeather = (latitude, longitude, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/be0f96d1d708530abbcfc2a5a9c4dc48/${latitude},${longitude}`,
        json: true
    }, (error, response, body) =>{
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: Math.round((body.currently.temperature-32)/1.8),
                apparentTemperature : Math.round((body.currently.apparentTemperature-32)/1.8)
            });                
        }else{
            callback("Unable to fetch weather");
        }
    })
}


module.exports.getWeather = getWeather;
