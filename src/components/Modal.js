import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import closeIcon from '../img/close-icon.svg';

class Modal extends React.Component {
  state = {
    showModal: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showModal: true,
      });
    }, 10);
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });

    setTimeout(() => {
      console.log('cose');
      this.props.toggleModal();
    }, 250);
  }

  render() {
    return (
      <div className={"modal fixed absolute--fill z-9999 flex items-center content-center justify-center"  + (this.state.showModal ? ' is-active' : '')}>
        <button
          onClick={this.closeModal}
          className="close-modal fixed ma3 pointer top-0 right-0 white z-9999 bg-transparent bn">
          <img src={closeIcon} alt="Close" />
        </button>
        <div className="modal-content z-9999">
          {this.props.children}
        </div>
        <div className="modal-bg absolute absolute--fill bg-black-60 z-999"></div>
      </div>
    );
  }
}

export default Modal;

