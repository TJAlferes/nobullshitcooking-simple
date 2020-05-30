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
  breadCrumbsTheme: "light",
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
  describe('when user is ', () => {});


  const wrapper = shallow(
    <RecipeView
      userIsAuthenticated={false}
      favoriteClicked={false}
      saveClicked={false}
      {...initialProps}
    />
  );
  it('needs testing', () => {
    expect(1).toEqual(1);
  });
});