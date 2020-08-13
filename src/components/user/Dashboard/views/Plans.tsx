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
      <h2 className="dashboard-content__heading">Plans</h2>
      {
        (!creatingPlan && !editingId) &&
        <Link className="new-entity" to="/user-plan/submit">
          Create New Plan
        </Link>
      }
      {
        (creatingPlan && !editingId) &&
        <Link className="new-entity" to="/user-plan/submit">
          Finish Creating Plan
        </Link>
      }
      {
        (!creatingPlan && editingId) &&
        <Link className="new-entity" to={`/user-plan/edit/${editingId}`}>
          Finish Updating Plan
        </Link>
      }
      {
        modalActive
        ? (
          <AriaModal
            dialogClass="dashboard-content__modal"
            focusDialog={true}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            getApplicationNode={getApplicationNode}
            onExit={deactivateModal}
            titleText="Cancel?"
            underlayClickExits={false}
          >
            <p className="dashboard-content__prompt">
              {'Delete Plan: '}{deleteName}{' ?'}
            </p>

            <button
              className="dashboard-content__modal-cancel-button"
              onClick={deactivateModal}
            >
              No
            </button>

            <button
              className="dashboard-content__modal-action-button"
              onClick={handleDeletePlan}
            >
              Yes, Delete Plan
            </button>
          </AriaModal>
        )
        : false
      }
      {
        myPlans.length
        ? myPlans.map(p => (
          <div className="dashboard-content__item" key={p.id}>
            <span className="dashboard-content__item-name">
              <Link to={`/user-plan/${p.id}`}>{p.name}</Link>
            </span>
            {
              (!creatingPlan && !editingId) &&
              <span className="dashboard-content__item-action">
                <Link to={`/user-plan/edit/${p.id}`}>Edit</Link>
              </span>
            }
            {
              (!creatingPlan && !editingId) &&
              <span
                className="dashboard-content__item-delete"
                onClick={() => activateModal(p.id, p.name)}
              >
                Delete
              </span>
            }
          </div>
        ))
        : (
          <div className="dashboard-content__none">
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