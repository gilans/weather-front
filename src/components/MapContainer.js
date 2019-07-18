import React, { Component } from 'react'
import ModalRoot from './../ModalRoot';

import CustomMap from './CustomMap';
import { showModal, hideModal } from './../actions/modal'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})
class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataStatus: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this)
  }

  closeModal(event) {
    this.props.hideModal();
  }

  handleShowModal(resp) {
    console.log('show modal', resp)
    if (resp.error) {
      this.props.showModal({
        open: true,
        title: `Direccion no existe!`,
        message: `En esta localidad no existe una ciudad, pais`,
        closeModal: this.closeModal
      }, 'alert')
    } else {

      this.props.showModal({
        open: true,
        title: `${resp.addressCountry}`,
        message: `Temperatura= ${resp.temperature} °,  Estación= ${resp.weatherSeason}`,
        closeModal: this.closeModal
      }, 'alert')
    }
  }

  render() {
    return (
      <div>
        <div>
          <CustomMap onShowModal={this.handleShowModal} />

        </div>
        <ModalRoot />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(MapContainer);