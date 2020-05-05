import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid/v4';

import NewRecipeView from './NewRecipeView';

import { NewRecipe } from './NewRecipe';

const data = {
  recipe: {
    recipeId: 1,
    recipeTypeId: 1,
    cuisineId: 1,
    title: "Mixed Drink",
    description: "An inticing description.",
    directions: "Easy to follow directions."
  },
  requiredMethods: [],
  requiredEquipment: [],
  requiredIngredients: [],
  requiredSubrecipes: []
};

const beginProps = {
  match: {params: {id: "1"}},
  oneColumnATheme: "one-column-a-light",
  authname: "Person",
  message: "Some message.",
  childProps: {submittingOwnership: "private"},
  dataMeasurements: [
    {measurement_id: 1, measurement_name: "teaspoon"},
    {measurement_id: 2, measurement_name: "Tablespoon"}
  ],
  dataEquipment: [
    {equipment_id: 1, equipment_name: "Cutting Board", equipment_type_id: 2},
    {equipment_id: 2, equipment_name: "Metal Spatula", equipment_type_id: 3},
  ],
  dataIngredients: [
    {ingredient_id: 1, ingredient_name: "Apple", ingredient_type_id: 12,},
    {ingredient_id: 2, ingredient_name: "Spinach", ingredient_type_id: 11}
  ],
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  dataRecipes: [],
  dataRecipeTypes: [
    {recipe_type_id: 1, recipe_type_name: "Drink"},
    {recipe_type_id: 2, recipe_type_name: "Appetizer"}
  ],
  dataCuisines: [
    {cuisine_id: 1, cuisine_name: "American"},
    {cuisine_id: 2, cuisine_name: "Japanese"},
  ],
  dataMethods: [
    {method_id: 1, method_name: "Steam"},
    {method_id: 2, method_name: "Freeze"}
  ],
  dataMyPublicRecipes: [],
  dataMyPrivateEquipment: [],
  dataMyPrivateIngredients: [],
  dataMyPrivateRecipes: [],
  dataMyFavoriteRecipes: [],
  dataMySavedRecipes: [],
  userCreateNewPrivateRecipe: jest.fn(),
  userCreateNewPublicRecipe: jest.fn(),
  userEditPrivateRecipe: jest.fn(),
  userEditPublicRecipe: jest.fn()
};

window.scrollTo = jest.fn();

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));

jest.mock('axios');

axios.post.mockImplementation(() => Promise.resolve({data}));

//jest.mock('uuid/v4');

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewRecipe', () => {

  describe('when creating', () => {

    describe('when ownership is private', () => {
      const wrapper = mount(
        <MemoryRouter>
          <NewRecipe {...beginProps} />
        </MemoryRouter>
      );
      
      it('needs testing', async () => {
        await act(async () => {
          Promise.resolve(() => {
            setImmediate(() => wrapper.update());
            expect(mockHistoryPush).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe('when ownership is public', () => {
      const beginPropsCopy = {...beginProps};
      beginPropsCopy.childProps.submittingOwnership = "public";
      const wrapper = mount(
        <MemoryRouter>
          <NewRecipe {...beginPropsCopy} />
        </MemoryRouter>
      );

      it('needs testing', async () => {
        await act(async () => {
          Promise.resolve(() => {
            setImmediate(() => wrapper.update());
            expect(mockHistoryPush).not.toHaveBeenCalled();
          });
        });
      });
    });

  });

  describe('when editing', () => {

    describe('when ownership is private', () => {
      const beginPropsCopy = {...beginProps};
      beginPropsCopy.childProps.editing = true;
      beginPropsCopy.childProps.editingOwnership = "private";
      const wrapper = mount(
        <MemoryRouter>
          <NewRecipe {...beginPropsCopy} />
        </MemoryRouter>
      );

      it('needs testing', async () => {
        await act(async () => {
          Promise.resolve(() => {
            setImmediate(() => wrapper.update());
            expect(mockHistoryPush).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe('when ownership is public', () => {
      const beginPropsCopy = {...beginProps};
      beginPropsCopy.childProps.editing = true;
      beginPropsCopy.childProps.editingOwnership = "public";
      const wrapper = mount(
        <MemoryRouter>
          <NewRecipe {...beginPropsCopy} />
        </MemoryRouter>
      );

      it('needs testing', async () => {
        await act(async () => Promise.resolve(() => {
          setImmediate(() => wrapper.update());
          expect(mockHistoryPush).not.toHaveBeenCalled();
        }));
      });
    });

  });

});