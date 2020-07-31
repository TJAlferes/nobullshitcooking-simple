import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Ingredient } from './Ingredient';
import { IngredientView } from './IngredientView';

const initialProps = {
  dataIngredients: [
    {
      ingredient_id: 1,
      owner_id: 1,
      ingredient_type_id: 12,
      ingredient_brand: null,
      ingredient_variety: "Granny Smith",
      ingredient_name: "Apple",
      ingredient_type_name: "Fruit",
      ingredient_description: "Some note.",
      ingredient_image: "nobsc-apple"
    },
    {
      ingredient_id: 2,
      owner_id: 1,
      ingredient_type_id: 11,
      ingredient_brand: null,
      ingredient_variety: "Baby",
      ingredient_name: "Spinach",
      ingredient_type_name: "Vegetable",
      ingredient_description: "Some note.",
      ingredient_image: "nobsc-spinach"
    }
  ],
  dataMyPrivateIngredients: [],
  twoColumnBTheme: "light"
};

const mockHistoryPush = jest.fn();
const mockIngredientBreadcrumbs = jest.fn();

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

jest.mock(
  '../../routing/breadcrumbs/Breadcrumbs',
  () => ({IngredientBreadcrumbs: mockIngredientBreadcrumbs})
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Ingredient', () => {
  it('should redirect to /home if given no ingredient', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });
    mount(<MemoryRouter><Ingredient {...initialProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid ingredient', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "999"})};
    });
    mount(<MemoryRouter><Ingredient {...initialProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid ingredient', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Ingredient {...initialProps} /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });

  it('should get the appropriate ingredient', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Ingredient {...initialProps} /></MemoryRouter>
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