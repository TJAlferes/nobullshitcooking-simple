import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: [],
  ingredientTypesChecked: [],
  ingredientsDisplay: 25,
  ingredientsPages: 1,
  ingredientsStarting: 0
};

const viewIngredients = (state, action) => {
  const view = [];
  action.types.map(ingredientType => {
    view.push(state.data.ingredients.filter(ing => ing.ingredient_type_id === ingredientType))
  });
  let pages = (view.length > action.display) ? Math.ceil(view.length / action.display) : 1;
  return {
    ...state,
    ...{
      ingredients: view,
      ingredientTypesChecked: action.types,
      ingredientsDisplay: action.display,
      ingredientsPages: pages,
      ingredientsStarting: action.start
    }
  };
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_INGREDIENTS: return viewIngredients(state, action);
  }
  return state;
};

export default viewReducer;