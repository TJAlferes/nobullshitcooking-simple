import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import Messenger from './Messenger';

import './mobileMessengerToggle.css';

class MobileMessengerToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {modalActive: false};
  }

  activateModal = () => {
    this.setState({modalActive: true});
  };

  deactivateModal = () => {
    this.setState({modalActive: false});
  };

  getApplicationNode = () => {
    return document.getElementById('root');
  };

  render() {
    let modal = this.state.modalActive
    ? (
      <AriaModal
        dialogClass="messenger_modal"
        titleText="Messenger"
        onExit={this.deactivateModal}
        focusDialog="true"
        getApplicationNode={this.getApplicationNode}
        focusTrapOptions={{returnFocusOnDeactivate: false}}
      >
        <button id="close_messenger" onClick={this.deactivateModal}>
          Close Messenger
        </button>
        <Messenger messengerView="mobile" />
      </AriaModal>
    )
    : false;

    return (
      <div className="mobile_display">
        <button className="mobile_messenger_toggle" onClick={this.activateModal}>
          Open Messenger
        </button>
        {modal}
      </div>
    );
  }
}

export default MobileMessengerToggle;