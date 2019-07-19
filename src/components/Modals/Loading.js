import React, { Component } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Loading extends Component {
  render() {
    return (
      <>

        <div>
          <Modal
            isOpen={true}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default Loading;