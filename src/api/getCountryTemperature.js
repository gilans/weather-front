module.exports.getCountryTemperature = (lat, lng) => {
  var misCabeceras = new Headers();

  var miInit = {
    method: 'GET',
    headers: misCabeceras,
    mode: 'cors',
    cache: 'default'
  };
  console.log('PORT:', miInit, process.env.PORT);
  return process.env.PORT
  /* fetch(
    `http:///countries/weather/temperature?lat=${lat}&lng=${lng}`,
    miInit
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
 */
  /* var marker = new google.maps.Marker({
    position: latlng,
    map: map
  }); */
  //infowindow.setContent(results[0].formatted_address);
  //infowindow.open(map, marker);
}