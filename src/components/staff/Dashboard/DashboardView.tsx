import React from 'react';

import {
  IEquipment,
  IIngredient,
  IWorkContent,
  IWorkRecipe
} from '../../../store/data/types';
import LeftNav from '../../LeftNav/LeftNav';
import { TabsView } from './views/TabsView';
import { ContentTabView } from './views/ContentTabView';
import { RecipesTabView } from './views/RecipesTabView';
import { IngredientsTabView } from './views/IngredientsTabView';
import { EquipmentTabView } from './views/EquipmentTabView';
import './dashboard.css';

export function DashboardView({
  oneColumnATheme,
  authname,
  feedback,
  loading,
  creatingContent,
  editingId,
  tab,
  handleTabClick,
  getApplicationNode,
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
}: Props): JSX.Element {
  return (
    <div className={`staff-dashboard one-column-a ${oneColumnATheme}`}>
      <h1>{authname}</h1>

      <p className="staff-dashboard-feedback">{feedback}</p>

      <TabsView tab={tab} handleTabClick={handleTabClick} />

      {tab === "content" && (
        <ContentTabView
          creatingContent={creatingContent}
          editingId={editingId}
          deleteContentModalActive={deleteContentModalActive}
          deactivateDeleteContentModal={deactivateDeleteContentModal}
          getApplicationNode={getApplicationNode}
          deleteContentName={deleteContentName}
          handleDeleteContent={handleDeleteContent}
          content={content}
          activateDeleteContentModal={activateDeleteContentModal}
        />
      )}

      {tab === "recipes" && (
        <RecipesTabView
          deleteRecipeModalActive={deleteRecipeModalActive}
          deactivateDeleteRecipeModal={deactivateDeleteRecipeModal}
          getApplicationNode={getApplicationNode}
          deleteRecipeName={deleteRecipeName}
          handleDeleteRecipe={handleDeleteRecipe}
          recipes={recipes}
          activateDeleteRecipeModal={activateDeleteRecipeModal}
        />
      )}

      {tab === "ingredients" && (
        <IngredientsTabView
          ingredients={ingredients}
          handleDeleteIngredient={handleDeleteIngredient}
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
  oneColumnATheme: string;
  authname: string;
  feedback: string;
  loading: boolean;
  creatingContent: boolean;
  editingId: number|null;
  tab: string;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  getApplicationNode(): Element | Node;
  content: IWorkContent[];
  deleteContentModalActive: boolean;
  activateDeleteContentModal(id: number, name: string): void;
  deactivateDeleteContentModal(): void;
  deleteContentName: string;
  handleDeleteContent(): void;
  recipes: IWorkRecipe[];
  deleteRecipeModalActive: boolean;
  activateDeleteRecipeModal(id: number, name: string): void;
  deactivateDeleteRecipeModal(): void;
  deleteRecipeName: string;
  handleDeleteRecipe(): void;
  ingredients: IIngredient[];
  handleDeleteIngredient(id: number): void;
  equipment: IEquipment[];
  handleDeleteEquipment(id: number): void;
};