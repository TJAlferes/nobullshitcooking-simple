import React, { useState } from 'react';
import AriaModal from 'react-aria-modal';

import NewPlan from './NewPlan';
import './mobileNewPlanToggle.css';

export default function MobileNewPlanToggle({
  twoColumnATheme,
  editing
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
      dialogClass="planner_modal"
      titleText="Planner"
      onExit={deactivateModal}
      focusDialog={true}
      getApplicationNode={getApplicationNode}
      focusTrapOptions={{returnFocusOnDeactivate: false}}
    >
      <button id="close_planner" onClick={deactivateModal}>
        Close Planner
      </button>
      <NewPlan
        twoColumnATheme={twoColumnATheme}
        editing={editing}
        planView="mobile"
      />
    </AriaModal>
  )
  : false;

  return (
    <div className="mobile_display">
      <button className="mobile_planner_toggle" onClick={activateModal}>
        Open Planner
      </button>
      {modal}
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
  editing: boolean;
};