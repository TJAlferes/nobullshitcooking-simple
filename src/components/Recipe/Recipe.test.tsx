import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import { Recipe } from './Recipe';
import { RecipeView } from './RecipeView';

const recipe = {
  recipe: [{title: "Some Recipe",}],
};
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const userFavoriteRecipe = jest.fn();
const userSaveRecipe = jest.fn();
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush}),
  //useParams: () => ({id: })
}));

jest.mock('axios');

axios.get.mockImplementation(() => Promise.resolve({data: recipe}));

jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    RecipeBreadcrumbs: ({ recipe }) => <div>{recipe.recipe[0].title}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Recipe', () => {
  it('should redirect to /home if given no recipe', async () => {
    mount(
      <MemoryRouter>
        <Recipe
          match={{params: {}}}
          twoColumnBTheme="light"
          isAuthenticated="false"
          message="Some message."
          //dataRecipes,
          //dataPublicRecipes,
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
    mount(
      <MemoryRouter>
        <Recipe
          match={{params: {id: "!@#"}}}
          twoColumnBTheme="light"
          isAuthenticated="false"
          message="Some message."
          //dataRecipes,
          //dataPublicRecipes,
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
    mount(
      <MemoryRouter>
        <Recipe
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          isAuthenticated="false"
          message="Some message."
          //dataRecipes,
          //dataPublicRecipes,
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
    const wrapper = mount(
      <MemoryRouter>
        <Recipe
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          isAuthenticated="false"
          message="Some message."
          //dataRecipes,
          //dataPublicRecipes,
          dataMyPublicRecipes={[]}
          dataMyPrivateRecipes={[]}
          dataMyFavoriteRecipes={[]}
          dataMySavedRecipes={[]}
          userFavoriteRecipe={userFavoriteRecipe}
          userSaveRecipe={userSaveRecipe}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(wrapper.find('.cuisine-view')).toHaveLength(1);
      expect(wrapper.find(RecipeView).props().recipe.recipe.recipe_id)
      .toEqual(1);
    }));
  });

  // TO DO:
  // test the isAuthenticated
  // test the message
});