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
import { staffDeleteRecipe } from '../../../store/staff/recipe/actions';
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

  const activateDeleteContentModal = (id: number, name: string) => {
    setDeleteContentId(id);
    setDeleteContentName(name);
    setDeleteContentModalActive(true);
  };

  const deactivateDeleteContentModal = () => {
    setDeleteContentId(undefined);
    setDeleteContentName("");
    setDeleteContentModalActive(false);
  };

  const activateDeleteRecipeModal = (id: number, name: string) => {
    setDeleteRecipeId(id);
    setDeleteRecipeName(name);
    setDeleteRecipeModalActive(true);
  };

  const deactivateDeleteRecipeModal = () => {
    setDeleteRecipeId(undefined);
    setDeleteRecipeName("");
    setDeleteRecipeModalActive(false);
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

  const handleDeleteEquipment = (id: number) => {
    setLoading(true);
    staffDeleteEquipment(id);
  };

  const handleDeleteIngredient = (id: number) => {
    setLoading(true);
    staffDeleteIngredient(id);
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
      content={content}
      deleteContentModalActive={deleteContentModalActive}
      activateDeleteContentModal={activateDeleteContentModal}
      deactivateDeleteContentModal={deactivateDeleteContentModal}
      deleteContentName={deleteContentName}
      handleDeleteContent={handleDeleteContent}
      recipes={recipes}
      deleteRecipeModalActive={deleteRecipeModalActive}
      activateDeleteRecipeModal={activateDeleteRecipeModal}
      deactivateDeleteRecipeModal={deactivateDeleteRecipeModal}
      deleteRecipeName={deleteRecipeName}
      handleDeleteRecipe={handleDeleteRecipe}
      ingredients={ingredients}
      handleDeleteIngredient={handleDeleteIngredient}
      equipment={equipment}
      handleDeleteEquipment={handleDeleteEquipment}
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
  message: state.staff.message,
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