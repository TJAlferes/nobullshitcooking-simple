import React, { Component, Fragment } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

class Modal extends Component {
  state = {isOpen: false};

  onOpen = () => {
    this.this.setState(
      {isOpen: true},
      () => {
        this.closeButtonNode.focus();
      }
    );
    this.toggleScrollLock();
  }

  onClose = () => {
    this.setState({isOpen: false});
    this.openButtonNode.focus();
    this.toggleScrollLock();
  }

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) {
      return;
    }
    this.onClose();
  }

  toggleScrollLock = () =>
    document.querySelector('html')
    .classList
    .toggle('u-lock-scroll');
  
  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText, role } = this.props;
    return (
      <Fragment>
        <ModalTrigger />
        {
          isOpen &&
            <ModalContent />
        }
      </Fragment>
    )
  }
}

export default Modal;