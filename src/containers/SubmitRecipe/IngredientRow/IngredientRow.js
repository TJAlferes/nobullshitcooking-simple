import React from 'react';

const ingredientRow = () => (
  <div className="ingredient_row">
    <label>Amount:</label><input className="manual_amount" type="number" step="any" min="0.125" max="9999" required />
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
    <button className="remove_ingredient_row_button">Remove</button>
  </div>
);

export default ingredientRow;