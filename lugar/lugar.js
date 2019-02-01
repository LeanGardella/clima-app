const axios = require('axios');


const getPlaceCoords = async(direccion) => {

    let encondedURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encondedURL }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === 'ZERO_RESULTS')
        throw new Error(`No hay resultados para el lugar ${ direccion }.`);

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getPlaceCoords
}