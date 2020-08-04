import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

import { IPlan } from '../../../../store/data/types';

export function Plans({
  activateModal,
  creatingPlan,
  deactivateModal,
  deleteName,
  editingId,
  getApplicationNode,
  handleDeletePlan,
  modalActive,
  myPlans
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Plans</h2>
      {
        (!creatingPlan && !editingId) &&
        <Link className="create-new-entity" to="/user-plan/submit">
          Create New Plan
        </Link>
      }
      {
        (creatingPlan && !editingId) &&
        <Link className="create-new-entity" to="/user-plan/submit">
          Finish Creating Plan
        </Link>
      }
      {
        (!creatingPlan && editingId) &&
        <Link className="create-new-entity" to={`/user-plan/edit/${editingId}`}>
          Finish Updating Plan
        </Link>
      }
      {
        modalActive
        ? (
          <AriaModal
            dialogClass="plan-delete-modal"
            focusDialog={true}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            getApplicationNode={getApplicationNode}
            onExit={deactivateModal}
            titleText="Cancel?"
            underlayClickExits={false}
          >
            <p className="plan-delete-prompt">
              {'Delete Plan: '}{deleteName}{' ?'}
            </p>
            <button
              className="plan-delete-cancel-button"
              onClick={deactivateModal}
            >
              No
            </button>
            <button className="plan-delete-button" onClick={handleDeletePlan}>
              Yes, Delete Plan
            </button>
          </AriaModal>
        )
        : false
      }
      {
        myPlans.length
        ? myPlans.map(p => (
          <div className="dashboard-content-item" key={p.plan_id}>
            <span className="dashboard-content-item-name">
              <Link to={`/user-plan/${p.plan_id}`}>{p.plan_name}</Link>
            </span>
            {
              (!creatingPlan && !editingId) &&
              <span className="dashboard-content-item-action">
                <Link to={`/user-plan/edit/${p.plan_id}`}>Edit</Link>
              </span>
            }
            {
              (!creatingPlan && !editingId) &&
              <span
                className="dashboard-content-item-delete"
                onClick={() => activateModal(p.plan_id, p.plan_name)}
              >
                Delete
              </span>
            }
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't created any plans yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  activateModal(id: number, name: string): void;
  creatingPlan: boolean;
  deactivateModal(): void;
  deleteName: string;
  editingId: number | null;
  getApplicationNode(): Element | Node;
  handleDeletePlan(): void;
  modalActive: boolean;
  myPlans: IPlan[];
};