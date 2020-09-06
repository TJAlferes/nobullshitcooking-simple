import { shallow } from 'enzyme';
import React from 'react';

import { IngredientView } from '../../../src/pages/Ingredient/IngredientView';

const ingredient = {
  id: 1,
  owner_id: 1,
  ingredient_type_id: 1,
  brand: null,
  variety: "Chilean",
  name: "Salmon",
  ingredient_type_name: "Fish",
  description: "Some note.",
  image: "nobsc-salmon"
};

const initialProps = {
  twoColumnBTheme: "light",
  dataMyPrivateIngredients: [
    {
      id: 600,
      owner_id: 88,
      ingredient_type_id: 12,
      brand: null,
      variety: null,
      name: "My Special Apple",
      ingredient_type_name: "Fruit",
      description: "Some note.",
      image: "0123456789"
    },
    {
      id: 605,
      owner_id: 88,
      ingredient_type_id: 11,
      brand: null,
      variety: null,
      name: "My Special Spinach",
      ingredient_type_name: "Vegetable",
      description: "Some note.",
      image: "0123456790"
    }
  ]
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
      expect(wrapper.find('.ingredient__name').text())
      .toEqual("My Special Apple");
    });

    it('displays the correct ingredient image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-user-ingredients/0123456789"]'
      )).toHaveLength(1);
    });

    it('displays a span element with text Fruit', () => {
      expect(wrapper.find('.ingredient__type').text()).toEqual("Fruit");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.ingredient__description').text())
      .toEqual("Some note.");
    });
  });

  describe('when the ingredient is an official ingredient', () => {
    const wrapper = shallow(
      <IngredientView ingredient={ingredient} {...initialProps} />
    );

    it('displays a h1 element with text Chilean Salmon', () => {
      expect(wrapper.find('.ingredient__name').text()).toEqual("Chilean Salmon");
    });

    it('displays the correct ingredient image', () => {
      expect(wrapper.find(
        'img[src="https://s3.amazonaws.com/nobsc-images-01/ingredients/nobsc-salmon.jpg"]'
      )).toHaveLength(1);
    });

    it('displays a span element with text Fish', () => {
      expect(wrapper.find('.ingredient__type').text()).toEqual("Fish");
    });

    it('displays a div element with text Some note.', () => {
      expect(wrapper.find('.ingredient__description').text())
      .toEqual("Some note.");
    });
  });
});