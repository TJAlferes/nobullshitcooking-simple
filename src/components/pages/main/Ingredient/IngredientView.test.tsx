import { shallow } from 'enzyme';
import React from 'react';

import IngredientView from './IngredientView';

const dataMyPrivateIngredients = [
  {ingredient_id: 600, ingredient_type_id: 12, ingredient_name: "My Special Apple"},
  {ingredient_id: 605, ingredient_type_id: 11, ingredient_name: "My Special Spinach"}
];

describe('IngredientView', () => {
  it('displays a private user ingredient', () => {
    const wrapper = shallow(
      <IngredientView
        twoColumnBTheme="light"
        ingredient={{
          ingredient_id: 600,
          ingredient_type_id: 12,
          ingredient_name: "My Special Apple",
          ingredient_type_name: "Cooking",
          ingredient_image: "0123456789"
        }}
        dataMyPrivateIngredients={dataMyPrivateIngredients}
      />
    );
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-user-ingredients/0123456789"]'
    )).toHaveLength(1);
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-images-01/ingredients/0123456789"]'
    )).toHaveLength(0);
  });

  it('displays a public official ingredient', () => {
    const wrapper = shallow(
      <IngredientView
        twoColumnBTheme="light"
        ingredient={{
          ingredient_id: 1,
          ingredient_type_id: 1,
          ingredient_name: "Salmon",
          ingredient_type_name: "Fish",
          ingredient_image: "nobsc-salmon"
        }}
        dataMyPrivateIngredients={dataMyPrivateIngredients}
      />
    );
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-user-ingredients/nobsc-salmon"]'
    )).toHaveLength(0);
    expect(wrapper.find(
      'img[src="https://s3.amazonaws.com/nobsc-images-01/ingredients/nobsc-salmon"]'
    )).toHaveLength(1);
  });
});