import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { IEquipment } from '../../store/data/types';
import { Equipment } from './Equipment';
import { EquipmentView } from './EquipmentView';

const dataEquipment = [
  {
    equipment_id: 1,
    owner_id: 1,
    equipment_type_id: 3,
    equipment_name: "Metal Spatula",
    equipment_type_name: "Cooking",
    equipment_description: "Some note.",
    equipment_image: "nobsc-metal-spatula"
  },
  {
    equipment_id: 1,
    owner_id: 1,
    equipment_type_id: 2,
    equipment_name: "Cutting Board",
    equipment_type_name: "Preparing",
    equipment_description: "Some note.",
    equipment_image: "nobsc-cutting-board"
  }
];
const dataMyPrivateEquipment: IEquipment[] = [];
const beforeProps: any = {
  breadCrumbsTheme: "light",
  twoColumnBTheme: "light",
  dataEquipment,
  dataMyPrivateEquipment
};

const mockHistoryPush = jest.fn();
const mockEquipmentBreadcrumbs = jest.fn();

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

jest.mock(
  '../../routing/breadcrumbs/Breadcrumbs',
  () => ({EquipmentBreadcrumbs: mockEquipmentBreadcrumbs})
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Equipment', () => {
  it('should redirect to /home if given no equipment', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });
    mount(<MemoryRouter><Equipment {...beforeProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should redirect to /home if given an invalid equipment', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "999"})};
    });
    mount(<MemoryRouter><Equipment {...beforeProps} /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid equipment', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Equipment {...beforeProps} /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });

  it('should get the appropriate equipment', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Equipment {...beforeProps} /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('[data-test="equipment-view"]')).toHaveLength(1);
        expect(wrapper.find(EquipmentView).props().equipment.equipment_id)
        .toEqual(1);
      });
    });
  });
});