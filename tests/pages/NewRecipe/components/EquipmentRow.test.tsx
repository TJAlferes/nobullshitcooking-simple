import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { IEquipment } from '../../../../src/store/data/types';
import { EquipmentRow } from '../../../../src/pages/NewRecipe/components/EquipmentRow';

const rowKey = "XYZ";
const amount = 1;
const type = 2;
const equipment = "Cutting Board";
const dataEquipment = [
  {
    id: 1,
    name: "Cutting Board",
    equipment_type_id: 2,
    owner_id: 1,
    equipment_type_name: "Preparing",
    description: "You need one.",
    image: "nobsc-cutting-board"
  },
  {
    id: 2,
    name: "Metal Spatula",
    equipment_type_id: 3,
    owner_id: 1,
    equipment_type_name: "Cooking",
    description: "You need one.",
    image: "nobsc-metal-spatula"
  },
];
const dataMyPrivateEquipment: IEquipment[] = [];
const handleEquipmentRowChange = jest.fn();
const removeEquipmentRow = jest.fn();

let wrapper: ShallowWrapper;

describe('EquipmentRow', () => {
  beforeEach(() => {
    wrapper = shallow(
      <EquipmentRow
        key={rowKey}
        rowKey={rowKey}
        amount={amount}
        type={type}
        equipment={equipment}
        dataEquipment={dataEquipment}
        dataMyPrivateEquipment={dataMyPrivateEquipment}
        handleEquipmentRowChange={handleEquipmentRowChange}
        removeEquipmentRow={removeEquipmentRow}
      />
    );
  });

  it('displays an amount select element', () => {
    expect(wrapper.find('select[name="amount"]')).toHaveLength(1);
  });

  it('displays a type select element', () => {
    expect(wrapper.find('select[name="type"]')).toHaveLength(1);
  });

  it('displays an equipment select element', () => {
    expect(wrapper.find('select[name="equipment"]')).toHaveLength(1);
  });

  it('filters equipment options by current type', () => {
    // should not have Metal Spatula option
    const equipmentOptions = wrapper.find('select[name="equipment"]');
    expect(equipmentOptions.find('option[value="2"]')).toHaveLength(0);
  });

  it('displays a button element with text Remove', () => {
    expect(wrapper.find('[data-test="equipment-row-remove-row"]').text())
    .toEqual("Remove");
  });
});