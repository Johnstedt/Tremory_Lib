//import Geocoder from 'react-native-geocoding'
import Geocoder from './GeocoderTemp'
import { addLocationToPoint } from '../../node_modules/tremorylibrary/lib/PointFetch'
import continentDoesContain from '../tree/ContinentCountryMapping'

export async function getLocation(lat, lng, point_id) {
    Geocoder.setApiKey('AIzaSyCArIlwT7KWfKsW5kV4TjHFx8NJ8pUTSak')
    Geocoder.setLanguage("en")
    Geocoder.getFromLatLng(lat, lng)
        .then((json) => {
            var address_component = json.results[0].address_components[0]

            addLocationToPointWrapper(createLocation(json.results), point_id)
            return 'success'
        })
        .catch(error => {  
            console.log('Geocoder error: ', error) 
            return 'error'
        })
}

function createLocation(results) {

   // var place = {};
    var localityNum = 0;

    for (var i = 0; i < results[0].address_components.length; i++) {

        if (results[0].address_components[i].types[0] == 'locality') {
           //place.locality = results[0].address_components[i].long_name;
        }
        else if (results[0].address_components[i].types[0] == 'country') {
            //place.country = results[0].address_components[i].long_name;
        }
    }

    for (var i = 0; i < results.length; i++) {
        if (results[i].address_components[0].types[0] == 'locality') {
            //place.locality = results[i].address_components[0].long_name;
            localityNum = i;
        }
        else if (results[i].address_components[0].types[0] == 'country') {
            //place.country = results[i].address_components[0].long_name;
        }
    }

    //var loc = new Location(results[localityNum]);

    console.log('====================================');
    console.log(results[localityNum]);
    console.log('====================================');

    return results[localityNum];
}

function addLocationToPointWrapper(place, point_id) {
    let place_id = place.place_id
    let west = place.geometry.viewport.southwest.lng
    let east = place.geometry.viewport.northeast.lng
    let north = place.geometry.viewport.northeast.lat
    let south = place.geometry.viewport.southwest.lat
    let locality = null
    let route = null
    let political = null
    let sublocality = null
    let lan = null
    let country = null
    let continent = null

    for (var i = 0; i < place.address_components.length; i++) {
        if (place.address_components[i].types[0] == 'route') {
            route = place.address_components[i].long_name
        }
        else if (place.address_components[i].types[0] == 'political') {
            political = place.address_components[i].long_name
        }
        else if (place.address_components[i].types[0] == 'sublocality') {
            sublocality = place.address_components[i].long_name
        }
        else if (place.address_components[i].types[0] == 'locality') {
            locality = place.address_components[i].long_name
        }
        else if (place.address_components[i].types[0] == "administrative_area_level_1") {
            lan = place.address_components[i].long_name
        }
        else if (place.address_components[i].types[0] == 'country') {
            country = place.address_components[i].long_name
            continent = getContinentByCountry(country)
        }
    }

    if (!locality) {
        locality = lan
    }
    if (!locality) {
        locality = country
    }

    // only implement if no native implementation is available
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    };

    if(!Array.isArray(point_id)){
        addLocationToPoint(point_id, place_id, locality, lan, country, continent)
    } else {
        for(let i = 0; i < point_id.length; i++){
            addLocationToPoint(point_id[i], place_id, locality, lan, country, continent)
        }
    }

    console.log('====================================');
    console.log("point id", point_id);
    console.log("locality",locality);
    console.log("län", lan);
    console.log("country",country);
    console.log("continent",continent);
    console.log('====================================');
}

export function getContinentByCountry(country) {
    let continent = null

    if (continentDoesContain("africa", country)) {
        continent = "africa"
    }
    else if (continentDoesContain("asia", country)) {
        continent = "asia"
    }
    else if (continentDoesContain("europe", country)) {
        continent = "europe"
    }
    else if (continentDoesContain("north_america", country)) {
        continent = "north_america"
    }
    else if (continentDoesContain("south_america", country)) {
        continent = "south_america"
    }
    else if (continentDoesContain("oceania", country)) {
        continent = "oceania"
    }

    return continent
}