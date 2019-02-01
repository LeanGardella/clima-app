const axios = require('axios');

let getWeatherByCoords = async(lat, lng) => {
    let appid = '65f64f8420b1a726cf178ceddc10f5c6';
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ appid }`);
    return resp.data.main.temp;
}

module.exports = {
    getWeatherByCoords
}