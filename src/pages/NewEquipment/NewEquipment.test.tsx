import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NewEquipment } from './NewEquipment';

const staffCreateNewEquipment = jest.fn();
const staffEditEquipment = jest.fn();
const userCreateNewPrivateEquipment = jest.fn();
const userEditPrivateEquipment = jest.fn();

const intialProps = {
  dataEquipment: [
    {
      id: 68,
      name: "Teapot",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      description: "From grandmother.",
      image: "nobsc-teapot"
    }
  ],
  dataEquipmentTypes: [
    {id: 2, name: "Preparing"},
    {id: 3, name: "Cooking"}
  ],
  dataMyPrivateEquipment: [
    {
      id: 1,
      name: "My Teapot",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      description: "From grandmother.",
      image: "my-teapot"
    }
  ],
  oneColumnATheme: "one-column-a-light",
  staffCreateNewEquipment,
  staffEditEquipment,
  staffIsAuthenticated: false,  // test for this
  staffMessage: "",
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment,
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

describe('NewEquipment', () => {

  describe('when creating', () => {
    it('should not redirect to /dashboard if given no id', () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({})};
      });

      mount(
        <MemoryRouter>
          <NewEquipment editing={false} {...intialProps} />
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
          <NewEquipment editing={true} {...intialProps} />
        </MemoryRouter>
      );
      
      expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});