import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NewEquipment } from './NewEquipment';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  staffMessage: "",
  userMessage: "Some message.",
  dataEquipment: [],
  dataEquipmentTypes: [
    {equipment_type_id: 2, equipment_type_name: "Preparing"},
    {equipment_type_id: 3, equipment_type_name: "Cooking"}
  ],
  dataMyPrivateEquipment: [
    {
      equipment_id: 1,
      equipment_name: "My Teapot",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      equipment_description: "From grandmother.",
      equipment_image: "my-teapot"
    }
  ],
  staffCreateNewEquipment: jest.fn(),
  staffEditEquipment: jest.fn(),
  userCreateNewPrivateEquipment: jest.fn(),
  userEditPrivateEquipment: jest.fn()
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
          <NewEquipment editing={false} {...beginProps} />
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
          <NewEquipment editing={true} {...beginProps} />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});