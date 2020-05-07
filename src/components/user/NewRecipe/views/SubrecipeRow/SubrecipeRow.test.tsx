import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { IWorkRecipe } from '../../../../../store/data/types';
import { SubrecipeRow } from './SubrecipeRow';

const rowKey = "XYZ";
const amount = 1;
const unit = 1;
const type = 2;
const cuisine = 2;
const subrecipe = 2;
const dataMeasurements = [
  {measurement_id: 1, measurement_name: "teaspoon"},
  {measurement_id: 2, measurement_name: "Tablespoon"}
];
const dataRecipeTypes = [
  {recipe_type_id: 1, recipe_type_name: "Drink"},
  {recipe_type_id: 2, recipe_type_name: "Appetizer"},
  {recipe_type_id: 3, recipe_type_name: "Main"},
  {recipe_type_id: 4, recipe_type_name: "Side"}
];
const dataCuisines = [
  {cuisine_id: 1, cuisine_name: "American", cuisine_nation: "America"},
  {cuisine_id: 2, cuisine_name: "Japanese", cuisine_nation: "Japan"},
  {cuisine_id: 3, cuisine_name: "Mexican", cuisine_nation: "Mexico"},
  {cuisine_id: 4, cuisine_name: "Italian", cuisine_nation: "Italy"}
];
const dataRecipes = [
  {
    recipe_id: 1,
    title: "Mixed Drink",
    recipe_type_id: 1,
    cuisine_id: 1,
    owner_id: 1,
    recipe_image: "nobsc-mixed-drink"
  },
  {
    recipe_id: 2,
    title: "Zucchini Tempura",
    recipe_type_id: 2,
    cuisine_id: 2,
    owner_id: 1,
    recipe_image: "nobsc-zucchini-tempura"
  },
  {
    recipe_id: 3,
    title: "Steak Tacos",
    recipe_type_id: 3,
    cuisine_id: 3,
    owner_id: 1,
    recipe_image: "nobsc-steak-tacos"
  },
  {
    recipe_id: 4,
    title: "Green Beans",
    recipe_type_id: 4,
    cuisine_id: 4,
    owner_id: 1,
    recipe_image: "nobsc-green-beans"
  }
];
const dataMyPrivateRecipes: IWorkRecipe[] = [];
const dataMyPublicRecipes: IWorkRecipe[] = [];
const dataMyFavoriteRecipes: IWorkRecipe[] = [];
const dataMySavedRecipes: IWorkRecipe[] = [];
const editing = true;
const selfId = 1;
const handleSubrecipeRowChange = jest.fn();
const removeSubrecipeRow = jest.fn();

let wrapper: ShallowWrapper;

describe('SubrecipeRow', () => {
  beforeEach(() => {
    wrapper = shallow(
      <SubrecipeRow
        rowKey={rowKey}
        amount={amount}
        unit={unit}
        type={type}
        cuisine={cuisine}
        subrecipe={subrecipe}
        dataMeasurements={dataMeasurements}
        dataRecipeTypes={dataRecipeTypes}
        dataCuisines={dataCuisines}
        dataRecipes={dataRecipes}
        dataMyPrivateRecipes={dataMyPrivateRecipes}
        dataMyPublicRecipes={dataMyPublicRecipes}
        dataMyFavoriteRecipes={dataMyFavoriteRecipes}
        dataMySavedRecipes={dataMySavedRecipes}
        editing={editing}
        selfId={selfId}
        handleSubrecipeRowChange={handleSubrecipeRowChange}
        removeSubrecipeRow={removeSubrecipeRow}
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

  it('displays a cuisine select element', () => {
    expect(wrapper.find('select[name="cuisine"]')).toHaveLength(1);
  });

  it('displays a subrecipe select element', () => {
    expect(wrapper.find('select[name="subrecipe"]')).toHaveLength(1);
  });

  it('filters subrecipe options by current type', () => {
    const subrecipeOptions = wrapper.find('select[name="subrecipe"]');
    expect(subrecipeOptions.find('option[value="1"]')).toHaveLength(0);
    expect(subrecipeOptions.find('option[value="3"]')).toHaveLength(0);
    expect(subrecipeOptions.find('option[value="4"]')).toHaveLength(0);
  });

  it('filters subrecipe options by current cuisine', () => {
    const subrecipeOptions = wrapper.find('select[name="subrecipe"]');
    expect(subrecipeOptions.find('option[value="1"]')).toHaveLength(0);
    expect(subrecipeOptions.find('option[value="3"]')).toHaveLength(0);
    expect(subrecipeOptions.find('option[value="4"]')).toHaveLength(0);
  });

  it('filters subrecipe options by current recipe when editing', () => {
    const subrecipeOptions = wrapper.find('select[name="subrecipe"]');
    expect(subrecipeOptions.find('option[value="1"]')).toHaveLength(0);
  });

  it('displays a button element with text Remove', () => {
    expect(wrapper.find('[data-test="subrecipe-row-remove-row"]').text())
    .toEqual("Remove");
  });
});