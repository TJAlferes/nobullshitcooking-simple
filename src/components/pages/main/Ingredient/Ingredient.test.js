import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import IngredientView from './IngredientView';

import { Ingredient } from './Ingredient';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush}),
  //useParams: () => ({id: })
}));

jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    IngredientBreadcrumbs: ({ ingredient }) => <div>{ingredient.ingredient_name}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Ingredient', () => {
  it('should redirect to /ingredients if given no ingredient', async () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {}}}
          twoColumnBTheme="light"
          dataIngredientTypes={[
            {ingredient_type_id: 1, ingredient_type_name: "Fruit"},
            {ingredient_type_id: 2, ingredient_type_name: "Vegetable"}
          ]}
          dataIngredients={[
            {ingredient_id: 1, ingredient_type_id: 2, ingredient_name: "Ingredient One"},
            {ingredient_id: 2, ingredient_type_id: 1, ingredient_name: "Ingredient Two"}
          ]}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/ingredients");
  });

  it('should redirect to /ingredients if given an invalid ingredient', async () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "999"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={[
            {ingredient_type_id: 1, ingredient_type_name: "Fruit"},
            {ingredient_type_id: 2, ingredient_type_name: "Vegetable"}
          ]}
          dataIngredients={[
            {ingredient_id: 1, ingredient_type_id: 2, ingredient_name: "Ingredient One"},
            {ingredient_id: 2, ingredient_type_id: 1, ingredient_name: "Ingredient Two"}
          ]}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/ingredients");
  });

  it('should not redirect if given a valid ingredient', async () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={[
            {ingredient_type_id: 1, ingredient_type_name: "Fruit"},
            {ingredient_type_id: 2, ingredient_type_name: "Vegetable"}
          ]}
          dataIngredients={[
            {ingredient_id: 1, ingredient_type_id: 2, ingredient_name: "Ingredient One"},
            {ingredient_id: 2, ingredient_type_id: 1, ingredient_name: "Ingredient Two"}
          ]}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });

  it('should get the appropriate ingredient', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={[
            {ingredient_type_id: 1, ingredient_type_name: "Fruit"},
            {ingredient_type_id: 2, ingredient_type_name: "Vegetable"}
          ]}
          dataIngredients={[
            {ingredient_id: 1, ingredient_type_id: 2, ingredient_name: "Ingredient One"},
            {ingredient_id: 2, ingredient_type_id: 1, ingredient_name: "Ingredient Two"}
          ]}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(wrapper.find('.ingredient-view')).toHaveLength(1);
      expect(wrapper.find(IngredientView).props().ingredient.ingredient_id)
      .toEqual(1);
    }));
  });
});