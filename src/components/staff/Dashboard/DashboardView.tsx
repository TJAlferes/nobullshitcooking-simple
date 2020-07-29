import React from 'react';

import {
  IEquipment,
  IIngredient,
  IWorkContent,
  IWorkRecipe
} from '../../../store/data/types';
import { ContentTabView } from './views/ContentTabView';
import { EquipmentTabView } from './views/EquipmentTabView';
import { IngredientsTabView } from './views/IngredientsTabView';
import { RecipesTabView } from './views/RecipesTabView';
import { TabsView } from './views/TabsView';
import './dashboard.css';

export function DashboardView({
  activateModal,
  authname,
  content,
  creatingContent,
  deactivateModal,
  deleteName,
  editingId,
  equipment,
  feedback,
  getApplicationNode,
  handleDeleteContent,
  handleDeleteEquipment,
  handleDeleteIngredient,
  handleDeleteRecipe,
  handleTabClick,
  ingredients,
  loading,
  modalActive,
  oneColumnATheme,
  recipes,
  tab
}: Props): JSX.Element {
  return (
    <div className={`staff-dashboard one-column-a ${oneColumnATheme}`}>
      <h1 className="staff-dashboard-heading-one">COOK EAT WIN REPEAT</h1>

      <p className="staff-dashboard-feedback">{feedback}</p>

      <TabsView tab={tab} handleTabClick={handleTabClick} />

      {tab === "content" && (
        <ContentTabView
          activateModal={activateModal}
          content={content}
          creatingContent={creatingContent}
          deactivateModal={deactivateModal}
          deleteName={deleteName}
          editingId={editingId}
          getApplicationNode={getApplicationNode}
          handleDeleteContent={handleDeleteContent}
          modalActive={modalActive}
        />
      )}

      {tab === "recipes" && (
        <RecipesTabView
          activateModal={activateModal}
          deactivateModal={deactivateModal}
          deleteName={deleteName}
          getApplicationNode={getApplicationNode}
          handleDeleteRecipe={handleDeleteRecipe}
          modalActive={modalActive}
          recipes={recipes}
        />
      )}

      {tab === "ingredients" && (
        <IngredientsTabView
          handleDeleteIngredient={handleDeleteIngredient}
          ingredients={ingredients}
        />
      )}

      {tab === "equipment" && (
        <EquipmentTabView
          equipment={equipment}
          handleDeleteEquipment={handleDeleteEquipment}
        />
      )}
    </div>
  );
}

type Props = {
  activateModal(id: number, name: string): void;
  authname: string;
  content: IWorkContent[];
  creatingContent: boolean;
  deactivateModal(): void;
  deleteName: string;
  editingId: number | null;
  equipment: IEquipment[];
  feedback: string;
  getApplicationNode(): Element | Node;
  handleDeleteContent(): void;
  handleDeleteEquipment(id: number): void;
  handleDeleteIngredient(id: number): void;
  handleDeleteRecipe(): void;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  ingredients: IIngredient[];
  loading: boolean;
  modalActive: boolean;
  oneColumnATheme: string;
  recipes: IWorkRecipe[];
  tab: string;
};