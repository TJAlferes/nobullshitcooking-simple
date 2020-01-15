import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData,
  userCreateNewPlan,
  userEditPlan
} from '../../../../store/actions/index';

import UserNewPlanView from './UserNewPlanView';

export const UserNewPlan = ({
  match,
  twoColumnATheme,
  message,

  dataMyPlans,

  dataRecipes,
  dataMyPublicRecipes,
  dataMyPrivateRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  expanded,
  expandedDay,
  editingId,
  planName,
  recipeListsInsideDays,

  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData,
  userCreateNewPlan,
  userEditPlan
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ tab, setTab ] = useState("official");
  const [ modalActive, setModalActive ] = useState(false);

  useEffect(() => {
    const getExistingPlanToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);
      setEditing(true);

      const [ prev ] = dataMyPlans
      .filter(plan => plan.plan_id === Number(match.params.id));

      plannerSetEditingId(Number(prev.plan_id));
      plannerSetPlanName(prev.plan_name);
      plannerSetPlanData(prev.plan_data);
      setLoading(false);
    };

    if (editing && editing === "true") {
      plannerClearWork();
      getExistingPlanToEdit();
    } else {
      plannerClearWork();
      plannerSetCreating();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Plan created." ||
        message === "Plan updated."
      ) {
        setTimeout(() => {
          plannerClearWork();
          history.push('/user/dashboard');
        }, 3000);
      }
    }
    return () => isSubscribed = false;
  }, [message]);

  const handlePlanNameChange = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.value.trim().length > 20) {
      window.scrollTo(0,0);
      setFeedback("Please keep your plan name under 20 characters");
      setTimeout(() => setFeedback(""), 3000);
      return;
    }

    plannerSetPlanName(e.target.value);
  };

  const handleTabClick = e => setTab(e.target.name);

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const getApplicationNode = () => document.getElementById('root');

  const discardChanges = () => {
    setModalActive(false);
    plannerClearWork();
    history.push('/user/dashboard');
  };

  const getPlanData = () => {
    // not done; clean/format? *** keys???
    console.log(JSON.stringify(recipeListsInsideDays));
    return JSON.stringify(recipeListsInsideDays);
  };

  const valid = () => {
    let validPlanName = planName.trim() !== "";
    let validPlanNameLength = planName.trim().length < 21;

    if (!validPlanName) {
      window.scrollTo(0,0);
      setFeedback("You forgot to name your plan...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validPlanNameLength) {
      window.scrollTo(0,0);
      setFeedback("Please keep your plan name under 20 characters");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return validPlanName && validPlanNameLength;
  };

  const handleSubmit = () => {
    const planInfo = {
      planName: planName,
      planData: getPlanData()
    };
    if (!valid()) return;
    if (editing === true) planInfo.planId = editingId;
    setLoading(true);
    try {
      if (editing === true) userEditPlan(planInfo);
      else userCreateNewPlan(planInfo);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  }

  return(
    <UserNewPlanView
      twoColumnATheme={twoColumnATheme}
      feedback={feedback}
      loading={loading}
      editing={editing}
    
      planName={planName}
      handlePlanNameChange={handlePlanNameChange}
    
      recipeListsInsideDays={recipeListsInsideDays}
      expandedDay={expandedDay}
      expanded={expanded}
    
      dataRecipes={dataRecipes}
      dataMyPrivateRecipes={dataMyPrivateRecipes}
      dataMyPublicRecipes={dataMyPublicRecipes}
      dataMyFavoriteRecipes={dataMyFavoriteRecipes}
      dataMySavedRecipes={dataMySavedRecipes}

      tab={tab}
      handleTabClick={handleTabClick}
    
      modalActive={modalActive}
      activateModal={activateModal}
      deactivateModal={deactivateModal}
      getApplicationNode={getApplicationNode}
      discardChanges={discardChanges}
      handleSubmit={handleSubmit}
    />
  );
}

const mapStateToProps = state => ({
  message: state.user.message,

  dataMyPlans: state.data.myPlans,

  dataRecipes: state.data.recipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,

  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  editingId: state.planner.editingId,
  planName: state.planner.planName,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPlan: (planInfo) => dispatch(userCreateNewPlan(planInfo)),
  userEditPlan: (planInfo) => dispatch(userEditPlan(planInfo)),
  plannerClearWork: () => dispatch(plannerClearWork()),
  plannerSetCreating: () => dispatch(plannerSetCreating()),
  plannerSetEditingId: (id) => dispatch(plannerSetEditingId(id)),
  plannerSetPlanName: (name) => dispatch(plannerSetPlanName(name)),
  plannerSetPlanData: (data) => dispatch(plannerSetPlanData(data))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserNewPlan)
);