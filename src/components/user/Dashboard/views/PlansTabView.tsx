import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

const PlansTabView = ({
  creatingPlan,
  editingId,
  deletePlanModalActive,
  deactivateDeletePlanModal,
  getApplicationNode,
  deletePlanName,
  handleDeletePlan,
  myPlans,
  activateDeletePlanModal
}) => (
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
      <Link
        className="create-new-entity"
        to={`/user-plan/edit/${editingId}`}
      >
        Finish Updating Plan
      </Link>
    }
    {
      deletePlanModalActive
      ? (
        <AriaModal
          dialogClass="plan-delete-modal"
          titleText="Cancel?"
          onExit={deactivateDeletePlanModal}
          focusDialog="true"
          getApplicationNode={getApplicationNode}
          focusTrapOptions={{returnFocusOnDeactivate: false}}
          underlayClickExits={false}
        >
          <p className="plan-delete-prompt">
            {'Delete Plan: '}{deletePlanName}{' ?'}
          </p>
          <button
            className="plan-delete-cancel-button"
            onClick={deactivateDeletePlanModal}
          >
            No
          </button>
          <button
            className="plan-delete-button"
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
      ? myPlans.map(plan => (
        <div className="dashboard-content-item" key={plan.plan_id}>
          <span className="dashboard-content-item-name">
            <Link to={`/user-plan/${plan.plan_id}`}>
              {plan.plan_name}
            </Link>
          </span>
          {
            (!creatingPlan && !editingId) &&
            <span className="dashboard-content-item-action">
              <Link to={`/user-plan/edit/${plan.plan_id}`}>
                Edit
              </Link>
            </span>
          }
          {
            (!creatingPlan && !editingId) &&
            <span
              className="dashboard-content-item-delete"
              onClick={() => activateDeletePlanModal(plan.plan_id, plan.plan_name)}
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

export default PlansTabView;