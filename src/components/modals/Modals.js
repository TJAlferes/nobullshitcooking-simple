import React, { Component } from 'react';

import ModalPortal from './ModalPortal';
import Modal from './Modal';

export default class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item, i) => (
      <ModalPortal key={i}>
        <Modal
          item={item}
          onClose={item => this.props.dispatch(closeModal(item))}
        />
      </ModalPortal>
    ));

    return <div className="modals">{modals}</div>;
  }
}