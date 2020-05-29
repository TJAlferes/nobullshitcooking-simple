import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { StaffNewIngredient } from './NewIngredient';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  message: "Some message.",
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  dataIngredients: [
    {
      ingredient_id: 1,
      ingredient_name: "Apple",
      ingredient_type_id: 12,
      owner_id: 1,
      ingredient_type_name: "Fruit",
      ingredient_description: "Energizing",
      ingredient_image: "nobsc-apple"
    },
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
  staffEditIngredient: jest.fn()
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

describe('StaffNewIngredient', () => {

  describe('when creating', () => {
    it('should not redirect to /staff-dashboard if given no id', () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({})};
      });
      mount(
        <MemoryRouter>
          <StaffNewIngredient editing={false} {...beginProps} />
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
          <StaffNewIngredient editing={true} {...beginProps} />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/staff-dashboard");
    });
  });
});