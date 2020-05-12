import React, { useState } from 'react';
import AriaModal from 'react-aria-modal';

import Messenger from './Messenger';
import './mobileMessengerToggle.css';

export default function MobileMessengerToggle({
  twoColumnATheme
}: Props): JSX.Element {
  const [ modalActive, setModalActive ] = useState(false);

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  let modal = modalActive
  ? (
    <AriaModal
      dialogClass="messenger_modal"
      titleText="Messenger"
      onExit={deactivateModal}
      focusDialog={true}
      getApplicationNode={getApplicationNode}
      focusTrapOptions={{returnFocusOnDeactivate: false}}
    >
      <button id="close_messenger" onClick={deactivateModal}>
        Close Messenger
      </button>
      <Messenger twoColumnATheme={twoColumnATheme} messengerView="mobile" />
    </AriaModal>
  )
  : false;

  return (
    <div className="mobile_display">
      <button className="mobile_messenger_toggle" onClick={activateModal}>
        Open Messenger
      </button>
      {modal}
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};