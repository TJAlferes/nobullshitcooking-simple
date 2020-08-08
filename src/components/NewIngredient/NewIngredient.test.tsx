import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NewIngredient } from './NewIngredient';

const staffCreateNewIngredient = jest.fn();
const staffEditIngredient = jest.fn();
const userCreateNewPrivateIngredient = jest.fn();
const userEditPrivateIngredient = jest.fn();

const initialProps = {
  dataIngredients: [
    {
      id: 24,
      brand: null,
      variety: "Baby",
      name: "Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      description: "Strengthening",
      image: "nobsc-spinach"
    }
  ],
  dataIngredientTypes: [
    {id: 11, name: "Vegetable"},
    {id: 12, name: "Fruit"}
  ],
  dataMyPrivateIngredients: [
    {
      id: 2,
      brand: null,
      variety: "Baby",
      name: "My Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      description: "Strengthening",
      image: "my-spinach"
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