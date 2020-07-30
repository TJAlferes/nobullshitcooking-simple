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
  authname,
  creatingContent,
  content,
  editingId,
  equipment,
  ingredients,
  message,
  oneColumnATheme,
  recipes,
  staffDeleteContent,
  staffDeleteEquipment,
  staffDeleteIngredient,
  staffDeleteRecipe
}: Props): JSX.Element {
  const [ deleteId, setDeleteId ] = useState<number | undefined>();
  const [ deleteName, setDeleteName ] = useState("");
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ modalActive, setModalActive ] = useState(false);
  const [ tab, setTab ] = useState("content");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0, 0);
      deactivateModal();
      setFeedback(message);
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const activateModal = (id: number, name: string) => {
    setDeleteId(id);
    setDeleteName(name);
    setModalActive(true);
  };

  const deactivateModal = () => {
    setDeleteId(undefined);
    setDeleteName("");
    setModalActive(false);
  };

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  const handleDeleteContent = () => {
    if (!deleteId) return;
    setLoading(true);
    staffDeleteContent(deleteId);
  };

  const handleDeleteEquipment = (id: number) => {
    setLoading(true);
    staffDeleteEquipment(id);
  };

  const handleDeleteIngredient = (id: number) => {
    setLoading(true);
    staffDeleteIngredient(id);
  };

  const handleDeleteRecipe = () => {
    if (!deleteId) return;
    setLoading(true);
    staffDeleteRecipe(deleteId);
  };

  const handleTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setTab((e.target as HTMLInputElement).name);
  };

  return (
    <DashboardView
      activateModal={activateModal}
      authname={authname}
      content={content}
      creatingContent={creatingContent}
      deactivateModal={deactivateModal}
      deleteName={deleteName}
      editingId={editingId}
      equipment={equipment}
      feedback={feedback}
      getApplicationNode={getApplicationNode}
      handleDeleteContent={handleDeleteContent}
      handleDeleteEquipment={handleDeleteEquipment}
      handleDeleteIngredient={handleDeleteIngredient}
      handleDeleteRecipe={handleDeleteRecipe}
      handleTabClick={handleTabClick}
      ingredients={ingredients}
      loading={loading}
      modalActive={modalActive}
      oneColumnATheme={oneColumnATheme}
      recipes={recipes}
      tab={tab}
    />
  );
}

interface RootState {
  auth: {
    authname: string;
  };
  data: {
    officialContent: IWorkContent[];
    officialEquipment: IEquipment[];
    officialIngredients: IIngredient[];
    officialRecipes: IWorkRecipe[];
  };
  editor: {
    creating: boolean;
    editingId: number|null;
  };
  staff: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  content: state.data.officialContent,
  equipment: state.data.officialEquipment,
  ingredients: state.data.officialIngredients,
  recipes: state.data.officialRecipes,
  creatingContent: state.editor.creating,
  editingId: state.editor.editingId,
  message: state.staff.message
});

const mapDispatchToProps = {
  staffDeleteContent: (id: number) => staffDeleteContent(id),
  staffDeleteEquipment: (id: number) => staffDeleteEquipment(id),
  staffDeleteIngredient: (id: number) => staffDeleteIngredient(id),
  staffDeleteRecipe: (id: number) => staffDeleteRecipe(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(StaffDashboard);