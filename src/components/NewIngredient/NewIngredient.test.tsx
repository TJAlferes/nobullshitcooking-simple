import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NewIngredient } from './NewIngredient';

const staffCreateNewIngredient = jest.fn();
const staffEditIngredient = jest.fn();
const userCreateNewPrivateIngredient = jest.fn();
const userEditPrivateIngredient = jest.fn();

const initialProps = {
  dataIngredients: [],
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  dataMyPrivateIngredients: [
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
  oneColumnATheme: "one-column-a-light",
  staffCreateNewIngredient,
  staffEditIngredient,
  staffIsAuthenticated: false,  // test for this
  staffMessage: "",
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient,
  userMessage: "Some message."
};

window.scrollTo = jest.fn();

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewIngredient', () => {

  describe('when creating', () => {
    it('should not redirect to /dashboard if given no id', () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({})};
      });

      mount(
        <MemoryRouter>
          <NewIngredient editing={false} {...initialProps} />
        </MemoryRouter>
      );

      expect(mockHistoryPush).not.toHaveBeenCalled();
    });
  });

  describe('when editing', () => {
    it('should redirect to /dashboard if given no id', () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({})};
      });

      mount(
        <MemoryRouter>
          <NewIngredient editing={true} {...initialProps} />
        </MemoryRouter>
      );
      
      expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});