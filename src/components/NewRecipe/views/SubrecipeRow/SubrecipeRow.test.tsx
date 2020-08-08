import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { IWorkRecipe } from '../../../../store/data/types';
import { SubrecipeRow } from './SubrecipeRow';

const rowKey = "XYZ";
const amount = 1;
const unit = 1;
const type = 2;
const cuisine = 2;
const subrecipe = 2;
const dataMeasurements = [
  {id: 1, name: "teaspoon"},
  {id: 2, name: "Tablespoon"}
];
const dataRecipeTypes = [
  {id: 1, name: "Drink"},
  {id: 2, name: "Appetizer"},
  {id: 3, name: "Main"},
  {id: 4, name: "Side"}
];
const dataCuisines = [
  {id: 1, name: "American", nation: "America"},
  {id: 2, name: "Japanese", nation: "Japan"},
  {id: 3, name: "Mexican", nation: "Mexico"},
  {id: 4, name: "Italian", nation: "Italy"}
];
const dataRecipes = [
  {
    id: 1,
    title: "Mixed Drink",
    recipe_type_id: 1,
    cuisine_id: 1,
    owner_id: 1,
    recipe_image: "nobsc-mixed-drink"
  },
  {
    id: 2,
    title: "Zucchini Tempura",
    recipe_type_id: 2,
    cuisine_id: 2,
    owner_id: 1,
    recipe_image: "nobsc-zucchini-tempura"
  },
  {
    id: 3,
    title: "Steak Tacos",
    recipe_type_id: 3,
    cuisine_id: 3,
    owner_id: 1,
    recipe_image: "nobsc-steak-tacos"
  },
  {
    id: 4,
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