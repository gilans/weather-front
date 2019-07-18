//import _isoFetch from 'isomorphic-fetch'

const TEST_URL = "http://localhost:8000"

const isBrowser = () => typeof window !== 'undefined'
const getBrowserUrl = url => `${location.protocol}//${location.host}${url}` // eslint-disable-line no-restricted-globals
const pathToURL = url => isBrowser() ? getBrowserUrl(url) : `${TEST_URL}${url}`;

module.exports.getCountryTemperature = (lat, lng) => {
  var misCabeceras = new Headers();
  const url = pathToURL('/countries/weather/temperature')


  console.log('pathtoUrl', url)
  var miInit = {
    method: 'GET',
    headers: misCabeceras,
    mode: 'cors',
    cache: 'default'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}?lat=${lat}&lng=${lng}`,
      miInit
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        resolve(myJson);
      });
  })

}