import { shallow } from 'enzyme';
import React from 'react';

import { EquipmentView } from './EquipmentView';

const initialProps = {
  dataMyPrivateEquipment: [
    {
      id: 600,
      owner_id: 88,
      equipment_type_id: 3,
      name: "My Spatula",
      equipment_type_name: "Cooking",
      description: "Some note.",
      image: "0123456789"
    },
    {
      id: 605,
      owner_id: 88,
      equipment_type_id: 2,
      name: "My Cutting Board",
      equipment_type_name: "Preparing",
      description: "Some note.",
      image: "0123456790"
    }
  ],
  twoColumnBTheme: "light",
};
const equipment = {
  id: 1,
  owner_id: 1,
  equipment_type_id: 2,
  name: "Cutting Board",
  equipment_type_name: "Preparing",
  description: "Some note.",
  image: "nobsc-cutting-board"
};

describe('EquipmentView', () => {
  describe('when the equipment is a private user equipment', () => {
    const wrapper = shallow(
      <EquipmentView
        equipment={initialProps.dataMyPrivateEquipment[0]}
        {...initialProps}
      />
    );

    it('displays a h1 element with text My Spatula', () => {
      expect(wrapper.find('.equipment__name').text()).toEqual("My Spatula");
    });

    it('displays the correct equipment image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-user-equipment/0123456789"]'
      )).toHaveLength(1);
    });

    it('displays a span element with text Cooking', () => {
      expect(wrapper.find('.equipment__type').text()).toEqual("Cooking");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.equipment__description').text())
      .toEqual("Some note.");
    });
  });

  describe('when the equipment is an official equipment', () => {
    const wrapper = shallow(
      <EquipmentView equipment={equipment} {...initialProps} />
    );

    it('displays a h1 element with text Cutting Board', () => {
      expect(wrapper.find('.equipment__name').text()).toEqual("Cutting Board");
    });

    it('displays the correct equipment image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-images-01/equipment/nobsc-cutting-board.jpg"]'
      )).toHaveLength(1);
    });

    it('displays a span element with text Preparing', () => {
      expect(wrapper.find('.equipment__type').text()).toEqual("Preparing");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.equipment__description').text())
      .toEqual("Some note.");
    });
  });
});