
const yargs = require("yargs");
const axios = require("axios");
const argv = yargs
    .options({
        a: {
            demand:true,
            alias: 'address',
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDbqws_VF_WKIsNNcDxDYrW8uFmFsEop34`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === "ZERO_RESULTS"){
        throw new Error("Unable to find that address");
    }
    var latitude =  response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/be0f96d1d708530abbcfc2a5a9c4dc48/${latitude},${longitude}`
    
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = Math.round((response.data.currently.temperature-32)/1.8);
    var apparentTemperature = Math.round((response.data.currently.apparentTemperature-32)/1.8)

    console.log(`A temperatura está ${temperature} graus, com sensação térmica de ${apparentTemperature} graus`)

})
.catch((e)=>{
    if(e.code === "ENOTFOUND"){
        console.log("Unable to connect to API Servers");
    }else{
        console.log(e.message);
    }
})
