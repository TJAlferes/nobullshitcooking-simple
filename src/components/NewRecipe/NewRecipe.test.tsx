import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import { NewRecipe } from './NewRecipe';

const data = {
  recipe: {
    recipe_id: 1,
    recipe_type_id: 1,
    cuisine_id: 1,
    owner_id: 1,
    title: "Mixed Drink",
    description: "An inticing description.",
    directions: "Easy to follow directions.",
    required_methods: [],
    required_equipment: [],
    required_ingredients: [],
    required_subrecipes: [],
    recipe_image: "nobsc-mixed-drink",
    equipment_image: "nobsc-mixed-drink-equipment",
    ingredients_image: "nobsc-mixed-drink-ingredients",
    cooking_image: "nobsc-mixed-drink-cooking",
  },
};

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  staffIsAuthenticated: false,  // test for this
  authname: "Person",
  staffMessage: "",
  userMessage: "Some message.",
  dataMeasurements: [
    {measurement_id: 1, measurement_name: "teaspoon"},
    {measurement_id: 2, measurement_name: "Tablespoon"}
  ],
  dataEquipment: [
    {
      equipment_id: 1,
      equipment_name: "Cutting Board",
      equipment_type_id: 2,
      owner_id: 1,
      equipment_type_name: "Preparing",
      equipment_description: "You need one.",
      equipment_image: "nobsc-cutting-board"
    },
    {
      equipment_id: 2,
      equipment_name: "Metal Spatula",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      equipment_description: "You need one.",
      equipment_image: "nobsc-metal-spatula"
    },
  ],
  dataIngredients: [
    {
      ingredient_id: 1,
      ingredient_brand: null,
      ingredient_variety: "Granny Smith",
      ingredient_name: "Apple",
      ingredient_type_id: 12,
      owner_id: 1,
      ingredient_type_name: "Fruit",
      ingredient_description: "Energizing",
      ingredient_image: "nobsc-apple"
    },
    {
      ingredient_id: 2,
      ingredient_brand: null,
      ingredient_variety: "Baby",
      ingredient_name: "Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      ingredient_description: "Strengthening",
      ingredient_image: "nobsc-spinach"
    }
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
    {cuisine_id: 1, cuisine_name: "American", cuisine_nation: "America"},
    {cuisine_id: 2, cuisine_name: "Japanese", cuisine_nation: "Japan"},
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
  staffCreateNewRecipe: jest.fn(),
  staffEditRecipe: jest.fn(),
  userCreateNewPrivateRecipe: jest.fn(),
  userCreateNewPublicRecipe: jest.fn(),
  userEditPrivateRecipe: jest.fn(),
  userEditPublicRecipe: jest.fn()
};

window.scrollTo = jest.fn();

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockReturnValueOnce(Promise.resolve({data}));

afterEach(() => {
  jest.clearAllMocks();
});

// this needs more thorough tests
describe('NewRecipe', () => {

  describe('when creating', () => {

    describe('when ownership is private', () => {
      it('should not redirect to /dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewRecipe editing={false} ownership="private" {...beginProps} />
          </MemoryRouter>
        );
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });

    describe('when ownership is public', () => {
      it('should not redirect to /dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewRecipe editing={false} ownership="public" {...beginProps} />
          </MemoryRouter>
        );
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });

  });

  describe('when editing', () => {

    describe('when ownership is private', () => {
      it('should redirect to /dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewRecipe editing={true} ownership="private" {...beginProps} />
          </MemoryRouter>
        );
        expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
      });
    });

    describe('when ownership is public', () => {
      it('should redirect to /dashboard if given no id', async () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        const wrapper = mount(
          <MemoryRouter>
            <NewRecipe editing={true} ownership="public" {...beginProps} />
          </MemoryRouter>
        );
        await act(async () => {
          Promise.resolve(() => {
            setImmediate(() => wrapper.update());
            expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
          });
        });
      });
    });

  });

});
