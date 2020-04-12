import { shallow } from 'enzyme';
import React from 'react';

import EquipmentView from './EquipmentView';

const dataMyPrivateEquipment = [
  {equipment_id: 600, equipment_type_id: 3, equipment_name: "My Spatula"},
  {equipment_id: 605, equipment_type_id: 2, equipment_name: "My Cutting Board"}
];

describe('EquipmentView', () => {
  it('displays a private user equipment', () => {
    const wrapper = shallow(
      <EquipmentView
        twoColumnBTheme="light"
        equipment={{
          equipment_id: 600,
          equipment_type_id: 3,
          equipment_name: "My Spatula",
          equipment_type_name: "Cooking",
          equipment_image: "0123456789"
        }}
        dataMyPrivateEquipment={dataMyPrivateEquipment}
      />
    );
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-user-equipment/0123456789"]'
    )).toHaveLength(1);
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-images-01/equipment/0123456789"]'
    )).toHaveLength(0);
  });

  it('displays a public official equipment', () => {
    const wrapper = shallow(
      <EquipmentView
        twoColumnBTheme="light"
        equipment={{
          equipment_id: 1,
          equipment_type_id: 2,
          equipment_name: "Cutting Board",
          equipment_type_name: "Preparing",
          equipment_image: "nobsc-cutting-board"
        }}
        dataMyPrivateEquipment={dataMyPrivateEquipment}
      />
    );
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-user-equipment/nobsc-cutting-board"]'
    )).toHaveLength(0);
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-images-01/equipment/nobsc-cutting-board"]'
    )).toHaveLength(1);
  });
});