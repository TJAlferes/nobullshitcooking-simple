import { shallow } from 'enzyme';
import React from 'react';

import { IngredientView } from './IngredientView';

const initialProps = {
  breadCrumbsTheme: "light",
  twoColumnBTheme: "light",
  dataMyPrivateIngredients: [
    {
      ingredient_id: 600,
      owner_id: 88,
      ingredient_type_id: 12,
      ingredient_name: "My Special Apple",
      ingredient_type_name: "Fruit",
      ingredient_description: "Some note.",
      ingredient_image: "0123456789"
    },
    {
      ingredient_id: 605,
      owner_id: 88,
      ingredient_type_id: 11,
      ingredient_name: "My Special Spinach",
      ingredient_type_name: "Vegetable",
      ingredient_description: "Some note.",
      ingredient_image: "0123456790"
    }
  ]
};
const ingredient = {
  ingredient_id: 1,
  owner_id: 1,
  ingredient_type_id: 1,
  ingredient_name: "Salmon",
  ingredient_type_name: "Fish",
  ingredient_description: "Some note.",
  ingredient_image: "nobsc-salmon"
};

describe('IngredientView', () => {
  describe('when the ingredient is a private user ingredient', () => {
    const wrapper = shallow(
      <IngredientView
        ingredient={initialProps.dataMyPrivateIngredients[0]}
        {...initialProps}
      />
    );

    it('displays a h1 element with text My Special Apple', () => {
      expect(wrapper.find('.ingredient-name').text())
      .toEqual("My Special Apple");
    });

    it('displays the correct ingredient image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-user-ingredients/0123456789"]'
      )).toHaveLength(1);
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-images-01/ingredients/0123456789"]'
      )).toHaveLength(0);
    });

    it('displays a span element with text Fruit', () => {
      expect(wrapper.find('.ingredient-type').text()).toEqual("Fruit");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.ingredient-description').text())
      .toEqual("Some note.");
    });
  });

  describe('when the ingredient is an official ingredient', () => {
    const wrapper = shallow(
      <IngredientView ingredient={ingredient} {...initialProps} />
    );

    it('displays a h1 element with text Salmon', () => {
      expect(wrapper.find('.ingredient-name').text()).toEqual("Salmon");
    });

    it('displays the correct ingredient image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-user-ingredients/nobsc-salmon"]'
      )).toHaveLength(0);
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-images-01/ingredients/nobsc-salmon"]'
      )).toHaveLength(1);
    });

    it('displays a span element with text Fish', () => {
      expect(wrapper.find('.ingredient-type').text()).toEqual("Fish");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.ingredient-description').text())
      .toEqual("Some note.");
    });
  });
});