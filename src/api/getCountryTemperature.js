//import _isoFetch from 'isomorphic-fetch'

const TEST_URL = "http://localhost:80"

const isBrowser = () => typeof window !== 'undefined'
const getBrowserUrl = url => `${location.protocol}//${location.host}${url}` // eslint-disable-line no-restricted-globals
const pathToURL = url => isBrowser() ? getBrowserUrl(url) : `${TEST_URL}${url}`;

//export const isoFetch = (path, options) => _isoFetch(pathToURL(path), options)

module.exports.getCountryTemperature = (lat, lng) => {
  var misCabeceras = new Headers();
  const url = pathToURL('/countries/weather/temperature')
  console.log('pathtoUrl')
  var miInit = {
    method: 'GET',
    headers: misCabeceras,
    mode: 'cors',
    cache: 'default'
  };

  fetch(`${url}?lat=${lat}&lng=${lng}`,
    miInit
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });

  /* var marker = new google.maps.Marker({
    position: latlng,
    map: map
  }); */
  //infowindow.setContent(results[0].formatted_address);
  //infowindow.open(map, marker);
}