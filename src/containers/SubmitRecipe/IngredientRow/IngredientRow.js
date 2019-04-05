import React from 'react';

import devData from '../dev-submit-recipe-data';

/*
TO DO:
give this a uuid key, put it in state,
give it types 1 through 18 substate, (no, just give it a single type substate, and set/update it as they select)
and filter equipment substate based on equipment type substate
*/
const IngredientRow = ({ rowKey, removeIngredientRow }) => (
  <div className="ingredient_row">
    <label>Amount:</label>
    <input
      className="manual_amount"
      type="number" step="any"
      min="0.125"
      max="9999"
      required
    />
    <label>Unit:</label>
    <select className="select_unit" required>
      <option></option>
    </select>
    <label>Type:</label>
    <select className="select_ingredient_type" required>
      <option></option>
    </select>
    <label>Ingredient:</label>
    <select className="select_ingredient" required>
      <option></option>
    </select>
    <button className="remove_ingredient_row_button" onClick={() => removeIngredientRow(rowKey)}>Remove</button>
  </div>
);

export default IngredientRow;