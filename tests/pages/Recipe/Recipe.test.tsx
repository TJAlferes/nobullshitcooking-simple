import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Recipe } from '../../../src/pages/Recipe/Recipe';
import { RecipeView } from '../../../src/pages/Recipe/RecipeView';

// don't use, this is an anti-pattern
//const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const recipe = {
  id: 1,
  recipe_type_id: 1,
  cuisine_id: 1,
  author_id: 1,
  owner_id: 1,
  title: "Some Title",
  recipe_type_name: "Appetizer",
  cuisine_name: "Afghan",
  author: "NOBSC",
  author_avatar: "NOBSC",
  description: "A descriptive description.",
  active_time: "0:10:00",
  total_time: "0:10:00",
  directions: "Do this, then that.",
  recipe_image: "nobsc-recipe-default",
  equipment_image: "nobsc-recipe-equipment-default",
  ingredients_image: "nobsc-recipe-ingredients-default",
  cooking_image: "nobsc-recipe-cooking-default",
  required_methods: [
    {method_name: "Simmer"}
  ],
  required_equipment: [
    {amount: 1, equipment_name: "Wooden Spoon"}
  ],
  required_ingredients: [
    {amount: 1, measurement_name: "teaspoon", ingredient_name: "Salt"}
  ],
  required_subrecipes: [
    {amount: 1, measurement_name: "cup", subrecipe_title: "Beef Stock"}
  ]
};

const userFavoriteRecipe = jest.fn();
const userSaveRecipe = jest.fn();

const initialProps = {
  dataMyFavoriteRecipes: [],
  dataMyPrivateRecipes: [],
  dataMyPublicRecipes: [],
  dataMySavedRecipes: [],
  message: "Some message.",
  twoColumnBTheme: "light",
  userFavoriteRecipe,
  //userIsAuthenticated: false,
  userSaveRecipe
};

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});
const mockHistoryPush = jest.fn();

window.scrollTo = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: recipe}));

const mockRecipeBreadcrumbs = jest.fn();
jest.mock(
  '../../../src/components/Breadcrumbs/Breadcrumbs',
  () => ({RecipeBreadcrumbs: mockRecipeBreadcrumbs})
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Recipe', () => {
  it('should redirect to /home if given no recipe', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });

    mount(
      <MemoryRouter>
        <Recipe userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );

    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid recipe', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "!@#"})};
    });

    mount(
      <MemoryRouter>
        <Recipe userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );

    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid recipe', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });

    const wrapper = mount(
      <MemoryRouter>
        <Recipe userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });

  it('should load the appropriate recipe', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });

    const wrapper = mount(
      <MemoryRouter>
        <Recipe userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('.cuisine-view')).toHaveLength(1);
        expect(wrapper.find(RecipeView).props().recipe.id)
        .toEqual(1);
      });
    });
  });

  describe ('when user is authenticated', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });

    const wrapper = mount(
      <MemoryRouter>
        <Recipe userIsAuthenticated={true} {...initialProps} />
      </MemoryRouter>
    );
    
    it ('will let user favorite recipe', async () => {
      await act(async () => {
        Promise.resolve(() => {
          setImmediate(() => wrapper.update());
          wrapper.find('button[name="favorite-button"]').simulate('click');
          expect(userFavoriteRecipe).toBeCalledTimes(1);
        });
      });
    });

    it ('will let user save reciped', async () => {
      await act(async () => {
        Promise.resolve(() => {
          setImmediate(() => wrapper.update());
          wrapper.find('button[name="save-button"]').simulate('click');
          expect(userSaveRecipe).toBeCalledTimes(1);
        });
      });
    });
  });

  // TO DO:
  // test the isAuthenticated
  // test the message
});