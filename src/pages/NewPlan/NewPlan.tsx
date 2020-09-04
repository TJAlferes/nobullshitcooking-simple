import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IPlan, IWorkRecipe } from '../../store/data/types';
import { IPlannerData } from '../../store/planner/types';
import {
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData
} from '../../store/planner/actions';
import { userCreateNewPlan, userEditPlan } from '../../store/user/plan/actions';
import {
  ICreatingPlanInfo,
  IEditingPlanInfo
} from '../../store/user/plan/types';
//import { MobileNewPlanView } from './views/MobileNewPlanView';
import { NewPlanView } from './NewPlanView';

export function NewPlan({
  dataMyFavoriteRecipes,
  dataMyPlans,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  dataRecipes,
  editing,
  editingId,
  expanded,
  expandedDay,
  message,
  planName,
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanData,
  plannerSetPlanName,
  //planView,
  recipeListsInsideDays,
  twoColumnATheme,
  userCreateNewPlan,
  userEditPlan
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ modalActive, setModalActive ] = useState(false);
  const [ tab, setTab ] = useState("official");

  useEffect(() => {
    const getExistingPlanToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);

      const [ prev ] = dataMyPlans.filter(p => p.id === Number(id));

      plannerSetEditingId(Number(prev.id));
      plannerSetPlanName(prev.name);
      plannerSetPlanData(prev.data);
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

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const discardChanges = () => {
    setModalActive(false);
    plannerClearWork();
    history.push('/dashboard');
  };

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  // clean/format? *** keys???
  const getPlanData = () => JSON.stringify(recipeListsInsideDays);

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
      const planInfo = {id: editingId, name: planName, data: getPlanData()};
      userEditPlan(planInfo);
    } else {
      const planInfo = {name: planName, data: getPlanData()};
      userCreateNewPlan(planInfo);
    }
  }

  /*return (planView === "mobile")
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
  :*/
  return (
    <NewPlanView
      activateModal={activateModal}
      deactivateModal={deactivateModal}
      discardChanges={discardChanges}
      dataMyFavoriteRecipes={dataMyFavoriteRecipes}
      dataMyPrivateRecipes={dataMyPrivateRecipes}
      dataMyPublicRecipes={dataMyPublicRecipes}
      dataMySavedRecipes={dataMySavedRecipes}
      dataRecipes={dataRecipes}
      editing={editing}
      expanded={expanded}
      expandedDay={expandedDay}
      feedback={feedback}
      getApplicationNode={getApplicationNode}
      handlePlanNameChange={handlePlanNameChange}
      handleSubmit={handleSubmit}
      handleTabClick={handleTabClick}
      loading={loading}
      modalActive={modalActive}
      planName={planName}
      recipeListsInsideDays={recipeListsInsideDays}
      tab={tab}
      twoColumnATheme={twoColumnATheme}
    />
  );
}

interface RootState {
  data: {
    myFavoriteRecipes: IWorkRecipe[];
    myPlans: IPlan[];
    myPrivateRecipes: IWorkRecipe[];
    myPublicRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
    officialRecipes: IWorkRecipe[];
  };
  planner: {
    editingId: number;
    expanded: boolean;
    expandedDay: number | null;
    planName: string;
    recipeListsInsideDays: IPlannerData;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  editing: boolean;
  planView: string;
  twoColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMyPlans: state.data.myPlans,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  dataRecipes: state.data.officialRecipes,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  editingId: state.planner.editingId,
  message: state.user.message,
  planName: state.planner.planName,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

const mapDispatchToProps = {
  plannerClearWork: () => plannerClearWork(),
  plannerSetCreating: () => plannerSetCreating(),
  plannerSetEditingId: (id: number) => plannerSetEditingId(id),
  plannerSetPlanData: (data: IPlannerData) => plannerSetPlanData(data),
  plannerSetPlanName: (name: string) => plannerSetPlanName(name),
  userCreateNewPlan: (planInfo: ICreatingPlanInfo) =>
    userCreateNewPlan(planInfo),
  userEditPlan: (planInfo: IEditingPlanInfo) => userEditPlan(planInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewPlan);