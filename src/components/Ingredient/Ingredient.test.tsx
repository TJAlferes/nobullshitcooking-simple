import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Ingredient } from './Ingredient';
import { IngredientView } from './IngredientView';

//const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const dataIngredients = [
  {
    ingredient_id: 1,
    ingredient_type_id: 12,
    ingredient_name: "Apple"
  },
  {
    ingredient_id: 2,
    ingredient_type_id: 11,
    ingredient_name: "Spinach"
  }
];
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
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
  it('should redirect to /home if given no ingredient', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({})
    }));
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {}}}
          twoColumnBTheme="light"
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid ingredient', () => {

    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "999"}}}
          twoColumnBTheme="light"
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid ingredient', async () => {
    mount(
      <MemoryRouter>
        <Ingredient
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
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
          dataIngredients={dataIngredients}
          dataMyPrivateIngredients={[]}
        />
      </MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('[data-test="ingredient-view"]')).toHaveLength(1);
        expect(wrapper.find(IngredientView).props().ingredient.ingredient_id)
        .toEqual(1);
      });
    });
  });
});