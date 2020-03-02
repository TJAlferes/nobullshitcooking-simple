import { shallow } from 'enzyme';
import React from 'react';

import { Dashboard } from './Dashboard';

const authUpdateLocalAvatar = jest.fn();
const userSubmitAvatar = jest.fn();
const userDeletePlan = jest.fn();
const userDeletePrivateRecipe = jest.fn();
const userDisownPublicRecipe = jest.fn();
const userUnfavoriteRecipe = jest.fn();
const userUnsaveRecipe = jest.fn();
const userDeletePrivateEquipment = jest.fn();
const userDeletePrivateIngredient = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Dashboard
      twoColumnATheme="light"
      message="Some message."
      authname="Person"
      currentAvatar="Person"
      myPlans={[]}
      myPublicRecipes={[]}
      myPrivateEquipment={[]}
      myPrivateIngredients={[]}
      myPrivateRecipes={[]}
      myFavoriteRecipes={[]}
      mySavedRecipes={[]}
      creatingPlan={false}
      editingId=""
      authUpdateLocalAvatar={authUpdateLocalAvatar}
      userSubmitAvatar={userSubmitAvatar}
      userDeletePlan={userDeletePlan}
      userDeletePrivateRecipe={userDeletePrivateRecipe}
      userDisownPublicRecipe={userDisownPublicRecipe}
      userUnfavoriteRecipe={userUnfavoriteRecipe}
      userUnsaveRecipe={userUnsaveRecipe}
      userDeletePrivateEquipment={userDeletePrivateEquipment}
      userDeletePrivateIngredient={userDeletePrivateIngredient}
    />
  );
});

describe('Dashboard', () => {
  it('should change tab', () => {
    wrapper.find('button[name="plans]').simulate('click');
    expect(wrapper.state().tab).toEqual('plans');
  });
});