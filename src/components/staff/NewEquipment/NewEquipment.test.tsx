import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { StaffNewEquipment } from './NewEquipment';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  message: "Some message.",
  dataEquipmentTypes: [
    {equipment_type_id: 2, equipment_type_name: "Preparing"},
    {equipment_type_id: 3, equipment_type_name: "Cooking"}
  ],
  dataEquipment: [
    {
      equipment_id: 1,
      equipment_name: "Cutting Board",
      equipment_type_id: 2,
      owner_id: 1,
      equipment_type_name: "Preparing",
      equipment_description: "You need one.",
      equipment_image: "nobsc-cutting-board"
    },
    {
      equipment_id: 2,
      equipment_name: "Metal Spatula",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      equipment_description: "You need one.",
      equipment_image: "nobsc-metal-spatula"
    },
  ],
  staffCreateNewEquipment: jest.fn(),
  staffEditEquipment: jest.fn()
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

describe('StaffNewEquipment', () => {

  describe('when creating', () => {
    it('should not redirect to /staff-dashboard if given no id', () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({})};
      });
      mount(
        <MemoryRouter>
          <StaffNewEquipment editing={false} {...beginProps} />
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
          <StaffNewEquipment editing={true} {...beginProps} />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/staff-dashboard");
    });
  });
});