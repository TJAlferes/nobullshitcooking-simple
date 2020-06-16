import { shallow } from 'enzyme';
import React from 'react';

import { RecipeView } from './RecipeView';

const recipe = {
  recipe_id: 1,
  recipe_type_id: 1,
  cuisine_id: 1,
  author_id: 1,
  owner_id: 1,
  title: "Some Title",
  recipe_type_name: "Appetizer",
  cuisine_name: "Afghan",
  author: "NOBSC",
  author_avatar: "NOBSC",
  description: "A descriptive description.",
  directions: "Do this, then that.",
  recipe_image: "nobsc-recipe-default",
  equipment_image: "nobsc-recipe-equipment-default",
  ingredients_image: "nobsc-recipe-ingredients-default",
  cooking_image: "nobsc-recipe-cooking-default",
  required_methods: [
    {method_name: "Simmer"}
  ],
  required_equipment: [
    {amount: 1, equipment_name: "Wooden Spoon"}
  ],
  required_ingredients: [
    {amount: 1, measurement_name: "teaspoon", ingredient_name: "Salt"}
  ],
  required_subrecipes: [
    {amount: 1, measurement_name: "cup", subrecipe_title: "Beef Stock"}
  ]
};
const initialProps = {
  twoColumnBTheme: "light",
  //userIsAuthenticated,
  feedback: "Some message.",
  loading: false,
  recipe,
  dataMyPrivateRecipes: [],
  dataMyPublicRecipes: [],
  dataMyFavoriteRecipes: [],
  dataMySavedRecipes: [],
  //favoriteClicked: false,
  handleFavoriteClick: jest.fn(),
  //saveClicked: false,
  handleSaveClick: jest.fn()
};

describe('RecipeView', () => {
  describe('content', () => {
    const wrapper = shallow(
      <RecipeView
        userIsAuthenticated={false}
        favoriteClicked={false}
        saveClicked={false}
        {...initialProps}
      />
    );

    it('displays an h1 element with text Some Title', () => {
      expect(wrapper.find('h1.recipe-title').text()).toEqual("Some Title");
    });

    it('displays a p element with text Some message.', () => {
      expect(wrapper.find('p.recipe-feedback').text()).toEqual("Some message.");
    });

    it('displays an em element with text A descriptive description.', () => {
      expect(wrapper.find('em.recipe-description').text())
      .toEqual("A descriptive description.");
    });

    it('displays a span element with text Afghan', () => {
      expect(wrapper.find('span.recipe-cuisine').text()).toEqual("Afghan");
    });

    it('displays a span element with text Appetizer', () => {
      expect(wrapper.find('span.recipe-type').text()).toEqual("Appetizer");
    });

    // move

    it('displays a div element with className image-default-280-172', () => {
      expect(wrapper.find('div[data-test="recipe-default"]')).toHaveLength(1);
    });

    it('displays a div element with className image-default-280-172', () => {
      expect(wrapper.find('div[data-test="recipe-equipment-default"]'))
      .toHaveLength(1);
    });

    it('displays a div element with className image-default-280-172', () => {
      expect(wrapper.find('div[data-test="recipe-ingredients-default"]'))
      .toHaveLength(1);
    });

    it('displays a div element with className image-default-280-172', () => {
      expect(wrapper.find('div[data-test="recipe-cooking-default"]'))
      .toHaveLength(1);
    });
  });

  //describe('user images', () => {});

  //describe('author', () => {});

  describe('when user is authenticated', () => {
    describe ('when favorite not clicked', () => {
      const wrapper = shallow(
        <RecipeView
          userIsAuthenticated={true}
          favoriteClicked={false}
          saveClicked={false}
          {...initialProps}
        />
      );
  
      it('displays a button with text Favorite', () => {
        expect(wrapper.find('button[name="favorite-button"]').text())
        .toEqual("Favorite");
      });
    });

    describe ('when favorite clicked', () => {
      const wrapper = shallow(
        <RecipeView
          userIsAuthenticated={true}
          favoriteClicked={true}
          saveClicked={false}
          {...initialProps}
        />
      );
  
      it('displays a span with text Favorited', () => {
        expect(wrapper.find('span[data-test="favorited-span"]').text())
        .toEqual("Favorited");
      });
    });

    describe ('when save not clicked', () => {
      const wrapper = shallow(
        <RecipeView
          userIsAuthenticated={true}
          favoriteClicked={false}
          saveClicked={false}
          {...initialProps}
        />
      );
  
      it('displays a button with text Save', () => {
        expect(wrapper.find('button[name="save-button"]').text())
        .toEqual("Save");
      });
    });

    describe ('when save clicked', () => {
      const wrapper = shallow(
        <RecipeView
          userIsAuthenticated={true}
          favoriteClicked={false}
          saveClicked={true}
          {...initialProps}
        />
      );
  
      it('displays a span with text Saved', () => {
        expect(wrapper.find('span[data-test="saved-span"]').text())
        .toEqual("Saved");
      });
    });
  });
});