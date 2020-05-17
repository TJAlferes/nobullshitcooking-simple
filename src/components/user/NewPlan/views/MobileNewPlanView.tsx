import React from 'react';
import AriaModal from 'react-aria-modal';
import { v4 as uuidv4 } from 'uuid';

import { IWorkRecipe } from '../../../../store/data/types';
import { IPlannerData } from '../../../../store/planner/types';
import { LoaderButton } from '../../../LoaderButton/LoaderButton';
import Day from './Day/Day';
import ExpandedDay from './ExpandedDay/ExpandedDay';
import RecipesList from './RecipesList/RecipesList';
import './mobileNewPlan.css';  // use BEM

export function MobileNewPlanView({
  feedback,
  loading,
  editing,
  planName,
  handlePlanNameChange,
  recipeListsInsideDays,
  expandedDay,
  expanded,
  dataRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  tab,
  handleTabClick,
  modalActive,
  activateModal,
  deactivateModal,
  getApplicationNode,
  discardChanges,
  handleSubmit
}: Props): JSX.Element {
  return (
    <div className="mobile-new-plan">
      mobile
    </div>
  );
}

type Props = {
  feedback: string;
  loading: boolean;
  editing: boolean;
  planName: string;
  handlePlanNameChange(e: React.SyntheticEvent<EventTarget>): void;
  recipeListsInsideDays: IPlannerData;
  expandedDay: number | null;
  expanded: boolean;
  dataRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  tab: string;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;  // touch
  modalActive: boolean;
  activateModal(): void;
  deactivateModal(): void;
  getApplicationNode(): Element | Node;
  discardChanges(): void;
  handleSubmit(): void;
};