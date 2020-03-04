import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import IngredientView from './IngredientView';

import { Ingredient } from './Ingredient';

//const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const dataIngredientTypes = [
  {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
  {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
];

const dataIngredients = [
  {ingredient_id: 1, ingredient_type_id: 12, ingredient_name: "Apple"},
  {ingredient_id: 2, ingredient_type_id: 11, ingredient_name: "Spinach"}
];

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
  it('should redirect to /ingredients if given no ingredient', () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {}}}
          twoColumnBTheme="light"
          dataIngredientTypes={dataIngredientTypes}
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/ingredients");
  });

  it('should redirect to /ingredients if given an invalid ingredient', () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "999"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={dataIngredientTypes}
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/ingredients");
  });

  it('should not redirect if given a valid ingredient', async () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={dataIngredientTypes}
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(mockHistoryPush).not.toHaveBeenCalled();
    }));
  });

  it('should get the appropriate ingredient', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataIngredientTypes={dataIngredientTypes}
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(wrapper.find('[data-test="ingredient-view"]')).toHaveLength(1);
      expect(wrapper.find(IngredientView).props().ingredient.ingredient_id)
      .toEqual(1);
    }));
  });
});