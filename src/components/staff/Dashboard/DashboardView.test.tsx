import { shallow } from 'enzyme';
import React from 'react';

import { DashboardView } from './DashboardView';

const initialProps = {
  oneColumnATheme: "light",
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
};

describe('DashboardView', () => {
  const wrapper = shallow(<DashboardView {...initialProps} />);

  it ('displays a h1 element with text COOK EAT WIN REPEAT', () => {

  });
});