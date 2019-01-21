import React, { Component } from 'react';
import { createPortal } from 'react-dom';
//import AriaModal from 'react-aria-modal';

//const 
class MobileDayToggle extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {modalActive: false};
    //this.el = document.createElement('div')
  }

  /*activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById('root');
  };*/

  render() {
    // perhaps just use a plain portal instead
    //const RenderLocation = AriaModal.renderTo('#mobile_expanded_day_area');
    //const RenderLocation = createPortal(c)
    /*const modal = this.state.modalActive
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
    : false;*/
    /*<div
        className="content"
        onClick={this.activateModal}
      >
        {modal}
      </div>*/
    return (
      createPortal(
        this.props.children,
        document.getElementById('mobile_expanded_day_area')
      )
    );
  }
}

export default MobileDayToggle;