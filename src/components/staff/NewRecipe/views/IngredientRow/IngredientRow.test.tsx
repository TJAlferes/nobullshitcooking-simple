import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { IngredientRow } from './IngredientRow';

const rowKey = "XYZ";
const amount = 1;
const unit = 1;
const type = 11;
const ingredient = "Spinach";
const dataMeasurements = [
  {measurement_id: 1, measurement_name: "teaspoon"},
  {measurement_id: 2, measurement_name: "Tablespoon"}
];
const dataIngredientTypes = [
  {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
  {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
];
const dataIngredients = [
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
];
const handleIngredientRowChange = jest.fn();
const removeIngredientRow = jest.fn();

let wrapper: ShallowWrapper;

describe('IngredientRow', () => {
  beforeEach(() => {
    wrapper = shallow(
      <IngredientRow
        key={rowKey}
        rowKey={rowKey}
        amount={amount}
        unit={unit}
        type={type}
        ingredient={ingredient}
        dataMeasurements={dataMeasurements}
        dataIngredientTypes={dataIngredientTypes}
        dataIngredients={dataIngredients}
        handleIngredientRowChange={handleIngredientRowChange}
        removeIngredientRow={removeIngredientRow}
      />
    );
  });

  it('displays an amount input element', () => {
    expect(wrapper.find('input[name="amount"]')).toHaveLength(1);
  });

  it('displays a unit select element', () => {
    expect(wrapper.find('select[name="unit"]')).toHaveLength(1);
  });

  it('displays a type select element', () => {
    expect(wrapper.find('select[name="type"]')).toHaveLength(1);
  });

  it('displays an ingredient select element', () => {
    expect(wrapper.find('select[name="ingredient"]')).toHaveLength(1);
  });

  it('filters ingredient options by current type', () => {
    // should not have Apple option
    const ingredientOptions = wrapper.find('select[name="ingredient"]');
    expect(ingredientOptions.find('option[value="12"]')).toHaveLength(0);
  });

  it('displays a button element with text Remove', () => {
    expect(wrapper.find('[data-test="ingredient-row-remove-row"]').text())
    .toEqual("Remove");
  });
});