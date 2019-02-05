import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import './mobileLeftNavToggle.css'
import MobileLeftNav from '../MobileLeftNav/MobileLeftNav';

class MobileLeftNavToggle extends Component {
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
        id="mobile_left_nav_modal"
        titleText="Mobile Left Nav"
        onExit={this.deactivateModal}
        focusDialog="true"
        getApplicationNode={this.getApplicationNode}
        focusTrapOptions={{returnFocusOnDeactivate: false}}
      >
        <button id="close_planner" onClick={this.deactivateModal}>
          X
        </button>
        <MobileLeftNav />
      </AriaModal>
    )
    : false;

    return (
      <div className="mobile_display">
        <div 
          id="mobile_menu_icon"
          className="mobile_left_nav_toggle"
          onClick={this.activateModal}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {modal}
      </div>
    );
  }
}

export default MobileLeftNavToggle;