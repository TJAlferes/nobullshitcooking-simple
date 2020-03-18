import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import DashboardView from './DashboardView';

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

window.scrollTo = jest.fn();

jest.mock(
  '../../LeftNav/LeftNav',
  () => () => <div></div>
);

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
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
    </MemoryRouter>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Dashboard', () => {
  it('should change tab to plans', () => {
    wrapper.find('button[name="plans"]').simulate('click');
    expect(wrapper.find(DashboardView).props().tab).toEqual('plans');
  });

  it('should change tab to recipes', () => {
    wrapper.find('button[name="recipes"]').simulate('click');
    expect(wrapper.find(DashboardView).props().tab).toEqual('recipes');
  });

  it('should change tab to ingredients', () => {
    wrapper.find('button[name="ingredients"]').simulate('click');
    expect(wrapper.find(DashboardView).props().tab).toEqual('ingredients');
  });

  it('should change tab to equipment', () => {
    wrapper.find('button[name="equipment"]').simulate('click');
    expect(wrapper.find(DashboardView).props().tab).toEqual('equipment');
  });
});