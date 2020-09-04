import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IPlan } from '../../store/data/types';
import { plannerViewLoad } from '../../store/plannerView/actions';
import { IPlannerViewData } from '../../store/plannerView/types';
//import MobilePlanView from './views/MobilePlanView';
import { PlanView } from './PlanView';

export function Plan({
  dataMyPlans,
  expanded,
  expandedDay,
  planName,
  plannerViewLoad,
  planView,
  recipeListsInsideDays,
  twoColumnATheme
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getPlan = () => {
      window.scrollTo(0, 0);
      const [ prev ] = dataMyPlans.filter(p => p.id === Number(id));
      plannerViewLoad(prev.name, prev.data);
    };

    if (id) getPlan();
    else history.push('/home');
  }, []);

  //if (planView === "mobile") MobilePlanView;
  //if (planView === "desktop") PlanView;

  return (
    <PlanView
      expanded={expanded}
      expandedDay={expandedDay}
      planName={planName}
      recipeListsInsideDays={recipeListsInsideDays}
      twoColumnATheme={twoColumnATheme}
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
  planView: string;
  twoColumnATheme: string;
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