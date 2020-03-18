import React from 'react';
import AriaModal from 'react-aria-modal';
const uuidv4 = require('uuid/v4');

import LoaderButton from '../../../LoaderButton/LoaderButton';

import Day from './Day/Day';
import ExpandedDay from './ExpandedDay/ExpandedDay';
import RecipesList from './RecipesList/RecipesList';

import './mobileNewPlan.css';  // use BEM

const MobileNewPlanView = ({
  twoColumnATheme,
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
}) => (
  <div className="mobile-new-plan">
    mobile
  </div>
);

export default MobileNewPlanView;