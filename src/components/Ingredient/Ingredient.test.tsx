import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { IIngredient } from '../../store/data/types';
import { Ingredient } from './Ingredient';
import { IngredientView } from './IngredientView';

//const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const dataIngredients = [
  {
    ingredient_id: 1,
    owner_id: 1,
    ingredient_type_id: 12,
    ingredient_name: "Apple",
    ingredient_type_name: "Fruit",
    ingredient_description: "Some note.",
    ingredient_image: "nobsc-apple"
  },
  {
    ingredient_id: 2,
    owner_id: 1,
    ingredient_type_id: 11,
    ingredient_name: "Spinach",
    ingredient_type_name: "Vegetable",
    ingredient_description: "Some note.",
    ingredient_image: "nobsc-spinach"
  }
];
const dataMyPrivateIngredients: IIngredient[] = [];
const beforeProps: any = {
  breadCrumbsTheme: "light",
  twoColumnBTheme: "light",
  dataIngredients,
  dataMyPrivateIngredients
};

const mockHistoryPush = jest.fn();
const mockIngredientBreadcrumbs = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));

jest.mock(
  '../../routing/breadcrumbs/Breadcrumbs',
  () => ({IngredientBreadcrumbs: mockIngredientBreadcrumbs})
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
    mount(<MemoryRouter><Ingredient {...beforeProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid ingredient', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "999"})
    }));
    mount(<MemoryRouter><Ingredient {...beforeProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid ingredient', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    const wrapper = mount(
      <MemoryRouter><Ingredient {...beforeProps} /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });

  it('should get the appropriate ingredient', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    const wrapper = mount(
      <MemoryRouter><Ingredient {...beforeProps} /></MemoryRouter>
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