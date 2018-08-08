import React from 'react';

const ModalTrigger = ({ onOpen, buttonRef, text }) => (
  <button className="" onClick={onOpen} ref={buttonRef}>{text}</button>
);

export default ModalTrigger;