import React, { Component } from 'react';
//import { createPortal } from 'react-dom';
import AriaModal from 'react-aria-modal';

class MobileDayToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalActive: false};
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById('application');
  };

  render() {
    // perhaps just use a plain portal instead
    const RenderLocation = AriaModal.renderTo('#mobile_expanded_day_area');
    //const RenderLocation = createPortal(c)
    const modal = this.state.modalActive
    ? (
      <RenderLocation
        id="the_expanded_day"
        titleText="Expanded Day"
        onExit={this.deactivateModal}
        focusDialog="true"
        getApplicationNode={this.getApplicationNode}
        focusTrapOptions={{returnFocusOnDeactivate: false}}
      >
        {this.props.children}
      </RenderLocation>
    )
    : false;
    return (
      <div
        className="content"
        onClick={this.activateModal}
      >
        {modal}
      </div>
    );
  }
}

export default MobileDayToggle;