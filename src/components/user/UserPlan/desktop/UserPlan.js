import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { plannerPrivateLoad } from '../../../../store/actions/index';

import UserPlanView from './UserPlanView';

export const UserPlan = ({
  match,
  twoColumnATheme,
  dataMyPlans,
  expanded,
  expandedDay,
  planName,
  recipeListsInsideDays,
  plannerPrivateLoad
}) => {
  const history = useHistory();

  useEffect(() => {
    const getPlan = () => {
      window.scrollTo(0,0);

      const [ prev ] = dataMyPlans
      .filter(plan => plan.plan_id === Number(match.params.id));
      
      plannerPrivateLoad(prev.plan_name, prev.plan_data);
    };

    if (match.params.id) getPlan();
    else history.push('/home');
  }, []);

  return (
    <UserPlanView
      twoColumnATheme={twoColumnATheme}
      planName={planName}
      recipeListsInsideDays={recipeListsInsideDays}
      expandedDay={expandedDay}
      expanded={expanded}
    />
  );
};

const mapStateToProps = state => ({
  dataMyPlans: state.data.myPlans,
  expanded: state.plannerView.expanded,
  expandedDay: state.plannerView.expandedDay,
  planName: state.plannerView.planName,
  recipeListsInsideDays: state.plannerView.recipeListsInsideDays
});

const mapDispatchToProps = dispatch => ({
  plannerPrivateLoad: (planName, planData) =>
    dispatch(plannerPrivateLoad(planName, planData))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPlan)
);