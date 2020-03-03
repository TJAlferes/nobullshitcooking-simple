import { shallow } from 'enzyme';
import React from 'react';

import EquipmentView from './EquipmentView';

describe('EquipmentView', () => {
  it('displays a private user equipment', () => {
    const wrapper = shallow(
      <EquipmentView
        twoColumnBTheme="light"
        equipment={{
          equipment_id: 600,
          equipment_type_id: 3,
          equipment_name: "My Equipment One",
          equipment_type_name: "Cooking",
          equipment_image: "0123456789"
        }}
        dataMyPrivateEquipment={[
          {equipment_id: 600, equipment_type_id: 3, equipment_name: "My Equipment One"},
          {equipment_id: 605, equipment_type_id: 2, equipment_name: "My Equipment Two"}
        ]}
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
          equipment_name: "Equipment One",
          equipment_type_name: "Cooking",
          equipment_image: "0123456790"
        }}
        dataMyPrivateEquipment={[
          {equipment_id: 600, equipment_type_id: 3, equipment_name: "My Equipment One"},
          {equipment_id: 605, equipment_type_id: 2, equipment_name: "My Equipment Two"}
        ]}
      />
    );
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-user-equipment/equipment/0123456790"]'
    )).toHaveLength(0);
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-images-01/equipment/0123456790"]'
    )).toHaveLength(1);
  });
});