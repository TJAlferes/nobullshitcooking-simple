import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { plannerViewLoad } from '../../../store/plannerView/actions';

import MobilePlanView from './views/MobilePlanView';
import PlanView from './views/PlanView';

export const Plan = ({
  match,
  twoColumnATheme,
  planView,
  dataMyPlans,
  expanded,
  expandedDay,
  planName,
  recipeListsInsideDays,
  plannerViewLoad
}) => {
  const history = useHistory();

  useEffect(() => {
    const getPlan = () => {
      window.scrollTo(0,0);

      const [ prev ] = dataMyPlans
      .filter(plan => plan.plan_id === Number(match.params.id));
      
      plannerViewLoad(prev.plan_name, prev.plan_data);
    };

    if (match.params.id) getPlan();
    else history.push('/home');
  }, []);

  let ViewComponent;
  if (planView === "mobile") ViewComponent = MobilePlanView;
  if (planView === "desktop") ViewComponent = PlanView;

  return (
    <ViewComponent
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
  plannerViewLoad: (planName, planData) =>
    dispatch(plannerViewLoad(planName, planData))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Plan));