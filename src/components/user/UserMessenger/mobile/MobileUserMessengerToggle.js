import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import './mobileUserMessengerToggle.css'
import MobileUserMessenger from './MobileUserMessenger';

class MobileUserMessengerToggle extends Component {
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
        <MobileUserMessenger />
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

export default MobileUserMessengerToggle;