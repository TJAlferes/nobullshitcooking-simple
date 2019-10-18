import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import './mobileUserPlanToggle.css'
import MobilePlan from './MobilePlan';

class MobileUserPlanToggle extends Component {
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
        dialogClass="planner_modal"
        titleText="Planner"
        onExit={this.deactivateModal}
        focusDialog="true"
        getApplicationNode={this.getApplicationNode}
        focusTrapOptions={{returnFocusOnDeactivate: false}}
      >
        <button id="close_planner" onClick={this.deactivateModal}>
          Close Planner
        </button>
        <MobilePlan />
      </AriaModal>
    )
    : false;

    return (
      <div className="mobile_display">
        <button className="mobile_planner_toggle" onClick={this.activateModal}>
          Open Planner
        </button>
        {modal}
      </div>
    );
  }
}

export default MobileUserPlanToggle;