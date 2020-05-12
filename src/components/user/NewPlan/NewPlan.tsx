import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { IPlan, IWorkRecipe } from '../../../store/data/types';
import { IPlannerData } from '../../../store/planner/types';
import {
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData
} from '../../../store/planner/actions';
import {
  ICreatingPlanInfo,
  IEditingPlanInfo
} from '../../../store/user/plan/types';
import {
  userCreateNewPlan,
  userEditPlan
} from '../../../store/user/plan/actions';
import { MobileNewPlanView } from './views/MobileNewPlanView';
import { NewPlanView } from './views/NewPlanView';

export function NewPlan({
  editing,
  twoColumnATheme,
  planView,
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
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("official");
  const [ modalActive, setModalActive ] = useState(false);

  useEffect(() => {
    const getExistingPlanToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);

      const [ prev ] = dataMyPlans
      .filter(plan => plan.plan_id === Number(id));

      plannerSetEditingId(Number(prev.plan_id));
      plannerSetPlanName(prev.plan_name);
      plannerSetPlanData(prev.plan_data);
      setLoading(false);
    };

    if (editing) {
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

      if (message === "Plan created." || message === "Plan updated.") {
        setTimeout(() => {
          plannerClearWork();
          history.push('/dashboard');
        }, 3000);
      }

      setLoading(false);
    }

    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handlePlanNameChange = (e: React.SyntheticEvent<EventTarget>) => {
    const nextName = (e.target as HTMLInputElement).value.trim();
    if (nextName.length > 20) {
      window.scrollTo(0,0);
      setFeedback("Please keep your plan name under 20 characters");
      setTimeout(() => setFeedback(""), 3000);
      return;
    }
    plannerSetPlanName(nextName);
  };

  const handleTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setTab((e.target as HTMLButtonElement).name);
  };

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  const discardChanges = () => {
    setModalActive(false);
    plannerClearWork();
    history.push('/dashboard');
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
    if (!valid()) return;
    setLoading(true);
    if (editing) {
      const planInfo: IEditingPlanInfo = {
        planId: editingId,
        planName: planName,
        planData: getPlanData()
      };
      userEditPlan(planInfo);
    } else {
      const planInfo: ICreatingPlanInfo = {
        planName: planName,
        planData: getPlanData()
      };
      userCreateNewPlan(planInfo);
    }
  }

  return (planView === "mobile")
  ? (
    <MobileNewPlanView
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
  )
  : (
    <NewPlanView
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

interface RootState {
  user: {
    message: string;
  };
  data: {
    myPlans: IPlan[];
    recipes: IWorkRecipe[];
    myPublicRecipes: IWorkRecipe[];
    myPrivateRecipes: IWorkRecipe[];
    myFavoriteRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
  };
  planner: {
    expanded: boolean;
    expandedDay: number;
    editingId: number;
    planName: string;
    recipeListsInsideDays: IPlannerData;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnATheme: string;
  planView: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
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

const mapDispatchToProps = {
  userCreateNewPlan: (planInfo: ICreatingPlanInfo) =>
    userCreateNewPlan(planInfo),
  userEditPlan: (planInfo: IEditingPlanInfo) => userEditPlan(planInfo),
  plannerClearWork: () => plannerClearWork(),
  plannerSetCreating: () => plannerSetCreating(),
  plannerSetEditingId: (id: number) => plannerSetEditingId(id),
  plannerSetPlanName: (name: string) => plannerSetPlanName(name),
  plannerSetPlanData: (data: IPlannerData) => plannerSetPlanData(data)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewPlan);