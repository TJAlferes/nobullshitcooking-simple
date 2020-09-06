import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { IIngredient } from '../../../../src/store/data/types';
import { IngredientRow } from '../../../../src/pages/NewRecipe/components/IngredientRow';

const rowKey = "XYZ";
const amount = 1;
const unit = 1;
const type = 11;
const ingredient = "Spinach";
const dataMeasurements = [
  {id: 1, name: "teaspoon"},
  {id: 2, name: "Tablespoon"}
];
const dataIngredientTypes = [
  {id: 11, name: "Vegetable"},
  {id: 12, name: "Fruit"}
];
const dataIngredients = [
  {
    id: 1,
    brand: null,
    variety: "Granny Smith",
    name: "Apple",
    ingredient_type_id: 12,
    owner_id: 1,
    ingredient_type_name: "Fruit",
    description: "Energizing",
    image: "nobsc-apple"
  },
  {
    id: 2,
    brand: null,
    variety: "Baby",
    name: "Spinach",
    ingredient_type_id: 11,
    owner_id: 1,
    ingredient_type_name: "Vegetable",
    description: "Strengthening",
    image: "nobsc-spinach"
  }
];
const dataMyPrivateIngredients: IIngredient[] = [];
const handleIngredientRowChange = jest.fn();
const removeIngredientRow = jest.fn();

let wrapper: ShallowWrapper;

describe('IngredientRow', () => {
  beforeEach(() => {
    wrapper = shallow(
      <IngredientRow
        rowKey={rowKey}
        amount={amount}
        unit={unit}
        type={type}
        ingredient={ingredient}
        dataMeasurements={dataMeasurements}
        dataIngredientTypes={dataIngredientTypes}
        dataIngredients={dataIngredients}
        dataMyPrivateIngredients={dataMyPrivateIngredients}
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