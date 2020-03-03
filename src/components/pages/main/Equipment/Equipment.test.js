import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import EquipmentView from './EquipmentView';

import { Equipment } from './Equipment';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const dataEquipmentTypes = [
  {equipment_type_id: 2, equipment_type_name: "Preparing"},
  {equipment_type_id: 3, equipment_type_name: "Cooking"}
];

const dataEquipment = [
  {equipment_id: 1, equipment_type_id: 3, equipment_name: "Metal Spatula"},
  {equipment_id: 2, equipment_type_id: 2, equipment_name: "Cutting Board"}
];

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush}),
  //useParams: () => ({id: })
}));

jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    EquipmentBreadcrumbs: ({ equipment }) => <div>{equipment.equipment_name}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Equipment', () => {
  it('should redirect to /equipment if given no equipment', async () => {
    mount(
      <MemoryRouter>
        <Equipment
          match={{params: {}}}
          twoColumnBTheme="light"
          dataEquipmentTypes={dataEquipmentTypes}
          dataEquipment={dataEquipment}
          dataMyPrivateEquipment={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/equipment");
  });

  it('should redirect to /equipment if given an invalid equipment', async () => {
    mount(
      <MemoryRouter>
        <Equipment
          match={{params: {id: "999"}}}
          twoColumnBTheme="light"
          dataEquipmentTypes={dataEquipmentTypes}
          dataEquipment={dataEquipment}
          dataMyPrivateEquipment={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalledWith("/equipment");
  });

  it('should not redirect if given a valid equipment', async () => {
    mount(
      <MemoryRouter>
        <Equipment
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataEquipmentTypes={dataEquipmentTypes}
          dataEquipment={dataEquipment}
          dataMyPrivateEquipment={[]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });

  it('should get the appropriate equipment', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Equipment
          match={{params: {id: "1"}}}
          twoColumnBTheme="light"
          dataEquipmentTypes={dataEquipmentTypes}
          dataEquipment={dataEquipment}
          dataMyPrivateEquipment={[]}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(wrapper.find('[data-test="equipment-view"]')).toHaveLength(1);
      expect(wrapper.find(EquipmentView).props().equipment.equipment_id)
      .toEqual(1);
    }));
  });
});