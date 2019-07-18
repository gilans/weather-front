import React, { Component } from 'react'

import { Map, GoogleApiWrapper } from 'google-maps-react';
import { getCountryTemperature } from './../api/getCountryTemperature';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class CustomMap extends Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this);
  }

  async showModal(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    let resp = await getCountryTemperature(lat, lng)
    this.props.onShowModal(resp)

  }

  render() {
    const center = { lat: -33.4724727, lng: -70.9100297 };
    return (
      <div>

        <Map

          google={this.props.google}
          zoom={5}
          zoomControl={false}
          scrollwheel={false}
          disableDoubleClickZoom={true}
          style={mapStyles}
          initialCenter={center}
          onClick={this.showModal}

        >

        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0sXJRtja7wsPZxVlujp8B6LiYloMnQns'
})(CustomMap);