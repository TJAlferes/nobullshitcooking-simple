import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { IPlan } from '../../../store/data/types';
import { plannerViewLoad } from '../../../store/plannerView/actions';
import { IPlannerViewData } from '../../../store/plannerView/types';
//import MobilePlanView from './views/MobilePlanView';
import { PlanView } from './views/PlanView';

export function Plan({
  twoColumnATheme,
  planView,
  dataMyPlans,
  expanded,
  expandedDay,
  planName,
  recipeListsInsideDays,
  plannerViewLoad
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getPlan = () => {
      window.scrollTo(0,0);

      const [ prev ] = dataMyPlans
      .filter(plan => plan.plan_id === Number(id));
      
      plannerViewLoad(prev.plan_name, prev.plan_data);
    };

    if (id) getPlan();
    else history.push('/home');
  }, []);

  //if (planView === "mobile") MobilePlanView;
  //if (planView === "desktop") PlanView;

  return (
    <PlanView
      twoColumnATheme={twoColumnATheme}
      planName={planName}
      recipeListsInsideDays={recipeListsInsideDays}
      expandedDay={expandedDay}
      expanded={expanded}
    />
  );
};

interface RootState {
  data: {
    myPlans: IPlan[];
  };
  plannerView: {
    expanded: boolean;
    expandedDay: number | null;
    planName: string;
    recipeListsInsideDays: IPlannerViewData
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnATheme: string;
  planView: string;
}

const mapStateToProps = (state: RootState) => ({
  dataMyPlans: state.data.myPlans,
  expanded: state.plannerView.expanded,
  expandedDay: state.plannerView.expandedDay,
  planName: state.plannerView.planName,
  recipeListsInsideDays: state.plannerView.recipeListsInsideDays
});

const mapDispatchToProps = {
  plannerViewLoad: (planName: string, planData: IPlannerViewData) =>
    plannerViewLoad(planName, planData)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Plan);