import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

class FoodDropdownMenu extends Component {
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
    const AlternateLocationAriaModal = AriaModal.renderTo(
      '#food-dropdown'
    );

    const modal = this.state.modalActive
      ? <AlternateLocationAriaModal
          titleText="demo six"
          onExit={this.deactivateModal}
          initialFocus="#demo-six-deactivate"
          getApplicationNode={this.getApplicationNode}
          underlayProps={{
            'data-foo': 'foo'
          }}
          underlayStyle={{
            zIndex: 100,
            background: 'rgba(255, 192, 203, 0.5)',
            position: 'absolute',
            paddingTop: '4em'
          }}
        >
          <div id="demo-six-modal" className="modal">
            <div className="modal-body">
              <p>
                Here is a modal
                {' '}
                <a href="#">with</a>
                {' '}
                <a href="#">some</a>
                {' '}
                <a href="#">focusable</a>
                {' '}
                parts.
              </p>
            </div>
            <footer className="modal-footer">
              <button id="demo-six-deactivate" onClick={this.deactivateModal}>
                deactivate modal
              </button>
            </footer>
          </div>
        </AlternateLocationAriaModal>
      : false;

    return (
      <div>
        <button onClick={this.activateModal}>
          activate modal Food
        </button>
        {modal}
      </div>
    );
  }
}

export default FoodDropdownMenu;