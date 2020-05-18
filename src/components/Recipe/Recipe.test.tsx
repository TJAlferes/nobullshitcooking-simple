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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));
const mockHistoryPush = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: recipe}));

jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    RecipeBreadcrumbs: (recipe: IRecipe) => <div>{recipe.title}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Recipe', () => {
  it('should redirect to /home if given no recipe', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({})
    }));
    mount(
      <MemoryRouter>
        <Recipe
          twoColumnBTheme="light"
          isAuthenticated={false}
          message="Some message."
          dataMyPublicRecipes={[]}
          dataMyPrivateRecipes={[]}
          dataMyFavoriteRecipes={[]}
          dataMySavedRecipes={[]}
          userFavoriteRecipe={userFavoriteRecipe}
          userSaveRecipe={userSaveRecipe}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid recipe', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "!@#"})
    }));
    mount(
      <MemoryRouter>
        <Recipe
          twoColumnBTheme="light"
          isAuthenticated={false}
          message="Some message."
          dataMyPublicRecipes={[]}
          dataMyPrivateRecipes={[]}
          dataMyFavoriteRecipes={[]}
          dataMySavedRecipes={[]}
          userFavoriteRecipe={userFavoriteRecipe}
          userSaveRecipe={userSaveRecipe}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid recipe', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    mount(
      <MemoryRouter>
        <Recipe
          twoColumnBTheme="light"
          isAuthenticated={false}
          message="Some message."
          dataMyPublicRecipes={[]}
          dataMyPrivateRecipes={[]}
          dataMyFavoriteRecipes={[]}
          dataMySavedRecipes={[]}
          userFavoriteRecipe={userFavoriteRecipe}
          userSaveRecipe={userSaveRecipe}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });

  it('should load the appropriate recipe', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    const wrapper = mount(
      <MemoryRouter>
        <Recipe
          twoColumnBTheme="light"
          isAuthenticated={false}
          message="Some message."
          dataMyPublicRecipes={[]}
          dataMyPrivateRecipes={[]}
          dataMyFavoriteRecipes={[]}
          dataMySavedRecipes={[]}
          userFavoriteRecipe={userFavoriteRecipe}
          userSaveRecipe={userSaveRecipe}
        />
      </MemoryRouter>
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