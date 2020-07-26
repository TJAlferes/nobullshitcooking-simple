import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NewIngredient } from './NewIngredient';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  staffIsAuthenticated: false,  // test for this
  staffMessage: "",
  userMessage: "Some message.",
  dataIngredients: [],
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  dataMyPrivateIngredients: [
    {
      ingredient_id: 2,
      ingredient_name: "Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      ingredient_description: "Strengthening",
      ingredient_image: "nobsc-spinach"
    }
  ],
  staffCreateNewIngredient: jest.fn(),
  staffEditIngredient: jest.fn(),
  userCreateNewPrivateIngredient: jest.fn(),
  userEditPrivateIngredient: jest.fn()
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
          <NewIngredient editing={false} {...beginProps} />
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
          <NewIngredient editing={true} {...beginProps} />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});