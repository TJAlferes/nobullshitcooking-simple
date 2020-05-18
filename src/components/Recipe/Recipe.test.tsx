import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import { Recipe } from './Recipe';
import { RecipeView } from './RecipeView';
import { IRecipe } from './types';

// don't use, if possible, this is a big anti-pattern, find something better
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const recipe = {
  recipe: [{title: "Some Recipe",}],
};  // fix
const userFavoriteRecipe = jest.fn();
const userSaveRecipe = jest.fn();
const initialProps = {
  twoColumnBTheme: "light",
  breadCrumbsTheme: "light",
  isAuthenticated: false,
  message: "Some message.",
  dataMyPublicRecipes: [],
  dataMyPrivateRecipes: [],
  dataMyFavoriteRecipes: [],
  dataMySavedRecipes: [],
  userFavoriteRecipe,
  userSaveRecipe
};

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});
const mockHistoryPush = jest.fn();
const mockRecipeBreadcrumbs = jest.fn();
window.scrollTo = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: recipe}));

jest.mock(
  '../../routing/breadcrumbs/Breadcrumbs',
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
    mount(<MemoryRouter><Recipe {...initialProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid recipe', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "!@#"})};
    });
    mount(<MemoryRouter><Recipe {...initialProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid recipe', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Recipe {...initialProps} /></MemoryRouter>
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
      <MemoryRouter><Recipe {...initialProps} /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('.cuisine-view')).toHaveLength(1);
        expect(wrapper.find(RecipeView).props().recipe.recipe_id)
        .toEqual(1);
      });
    });
  });

  // TO DO:
  // test the isAuthenticated
  // test the message
});