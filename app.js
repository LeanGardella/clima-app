const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Lugar de donde se quiere saber el clima',
        demand: true
    }
}).argv;

//const GOOGLE_URL = 'https://developers.google.com/maps/documentation/geocoding/start'

// GOOGLE API KEYS
// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

const PLACES = require('./lugar/lugar');

//PLACES.getPlaceCoords(argv.direccion).then((res) => console.log(res)).catch((e) => console.log(e));

// Open weather: api.openweathermap.org/data/2.5/weather?lat=35&lon=139
// API KEY: 65f64f8420b1a726cf178ceddc10f5c6

const WEATHER = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coords = await PLACES.getPlaceCoords(direccion);
        let temp = await WEATHER.getWeatherByCoords(coords.lat, coords.lng);

        return `La temperatura en ${ coords.direccion } es de ${ temp }ºC.`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }.`;
    }

}

getInfo(argv.direccion)
    .then(m => console.log(m))
    .catch(e => console.log(e));