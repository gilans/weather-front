import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
const { getCountryTemperature } = require('./../api/getCountryTemperature')
const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      textinput: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddTodo(this.state.textinput)
  }
  async onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    await getCountryTemperature(lat, lng)
    console.log('onClick', lat, lng);
  }
  render() {
    const center = { lat: -33.4724727, lng: -70.9100297 };
    return (
      <Map

        google={this.props.google}
        zoom={5}
        zoomControl={false}
        scrollwheel={false}
        disableDoubleClickZoom={true}
        style={mapStyles}
        initialCenter={center}
        onClick={this.onClick}
      />
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0sXJRtja7wsPZxVlujp8B6LiYloMnQns'
})(MapContainer);