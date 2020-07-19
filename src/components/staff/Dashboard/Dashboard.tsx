import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import {
  IEquipment,
  IIngredient,
  IWorkContent,
  IWorkRecipe
} from '../../../store/data/types';
import { staffDeleteContent } from '../../../store/staff/content/actions';
import { staffDeleteEquipment } from '../../../store/staff/equipment/actions';
import { staffDeleteIngredient } from '../../../store/staff/ingredient/actions';
import { DashboardView } from './DashboardView';
import './dashboard.css';

export function StaffDashboard({
  oneColumnATheme,
  message,
  authname,
  content,
  recipes,
  equipment,
  ingredients,
  creatingContent,
  editingId,
  staffDeleteContent,
  staffDeleteEquipment,
  staffDeleteIngredient,
  staffDeleteRecipe,
}: Props): JSX.Element {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ tab, setTab ] = useState("content");

  const [ deleteContentId, setDeleteContentId ] = useState<number | undefined>();
  const [ deleteContentName, setDeleteContentName ] = useState("");
  const [ deleteContentModalActive, setDeleteContentModalActive ] = useState(false);

  const [ deleteRecipeId, setDeleteRecipeId ] = useState<number | undefined>();
  const [ deleteRecipeName, setDeleteRecipeName ] = useState("");
  const [ deleteRecipeModalActive, setDeleteRecipeModalActive ] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      deactivateDeleteContentModal();
      deactivateDeleteRecipeModal();
      setFeedback(message);
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setTab((e.target as HTMLInputElement).name);
  };

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  const handleDeleteContent = () => {
    if (!deleteContentId) return;
    setLoading(true);
    staffDeleteContent(deleteContentId);
  };

  const handleDeleteRecipe = () => {
    if (!deleteRecipeId) return;
    setLoading(true);
    staffDeleteRecipe(deleteRecipeId);
  };

  return (
    <DashboardView
      oneColumnATheme={oneColumnATheme}
      authname={authname}
      feedback={feedback}
      loading={loading}
      creatingContent={creatingContent}
      editingId={editingId}
      tab={tab}
      handleTabClick={handleTabClick}
      getApplicationNode={getApplicationNode}
      content,
      deleteContentModalActive,
      activateDeleteContentModal,
      deactivateDeleteContentModal,
      deleteContentName,
      handleDeleteContent,
      recipes,
      deleteRecipeModalActive,
      activateDeleteRecipeModal,
      deactivateDeleteRecipeModal,
      deleteRecipeName,
      handleDeleteRecipe,
      ingredients,
      handleDeleteIngredient,
      equipment,
      handleDeleteEquipment
    />
  );
}

interface RootState {
  auth: {
    authname: string;
  };
  staff: {
    message: string;
  };
  data: {
    content: IWorkContent[];
    recipes: IWorkRecipe[];
    equipment: IEquipment[];
    ingredients: IIngredient[];
  };
  editor: {
    creating: boolean;
    editingId: number|null;
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;

};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  staff: state.staff.message,
  content: state.data.content,
  recipes: state.data.recipes,
  equipment: state.data.equipment,
  ingredients: state.data.ingredients,
  creatingContent: state.editor.creating,
  editingId: state.editor.editingId
});

const mapDispatchToProps = {
  staffDeleteContent: (id: number) => staffDeleteContent(id),
  staffDeleteEquipment: (id: number) => staffDeleteEquipment(id),
  staffDeleteIngredient: (id: number) => staffDeleteIngredient(id),
  staffDeleteRecipe: (id: number) => staffDeleteRecipe(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(StaffDashboard);