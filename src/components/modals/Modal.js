import React, { Component } from 'react';


/*
  - When the Modal is not open, it is not rendered into the DOM.
  - When rendered, the Modal is appended to the end of document.body.
  - The Modal has relevant WAI-ARIA attributes in accordance with
    accessibility guidelines.
  - Pressing the escape key will close the Modal.
  - Clicking outside the Modal will close it.
  - When open, scrolling is frozen on the main document beneath the Modal.
  - When open, focus is drawn immediately to the Modal's close button.
  - When the Modal closes, focus returns to the Modal's trigger button.
  - Focus is trapped within the Modal when open.
*/
export default class Modal extends Component {
  onClose = () => {
    if (this.props.item.onClose) {
      this.props.item.onClose();
      this.props.onClose(this.props.item);
    } else {
      this.props.onClose(this.props.item);
    }
  }

  onConfirm = () => {
    if (this.props.item.onConfirm) {
      this.props.item.onConfirm();
      this.props.onClose(this.props.item);
    }
  }

  render() {
    /*const { type } = this.props.item;

    if (type === 'confirmation') {
      const { text } = this.props.item;

      return (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="text">{text}</div>
            <div className="buttons">
              <button className="modal-button" onClick={onConfirm}>Confirm</button>
              <button className="modal-button" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'custom') {
      const { content } = this.props.item;
      
      return (
        <div className="modal-wrapper">
          <div className="modal">
            <button className="close" onClick={onClose}>&times;</button>
            {content}
          </div>
        </div>
      );
    }*/

    return <div />;
  }
}