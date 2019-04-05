import React from 'react';

import devData from '../dev-submit-recipe-data';

/*
TO DO:
give this a uuid key, put it in state,
give it types 1 through 18 substate, (no, just give it a single type substate, and set/update it as they select)
and filter equipment substate based on equipment type substate
*/
const IngredientRow = ({
  rowKey,
  amount,
  unit,
  type,
  ingredient,
  handleIngredientRowChange,
  removeIngredientRow
}) => (
  <div className="ingredient_row">

    <label>Amount:</label>
    <input
      className="manual_amount"
      type="number"
      name="amount"
      step="any"
      min="0.125"
      max="9999"
      required
      value={amount}
      onChange={(e) => handleIngredientRowChange(e, rowKey)}
    />

    <label>Unit:</label>
    <select
      className="select_unit"
      name="unit"
      required
      value={unit}
      onChange={(e) => handleIngredientRowChange(e, rowKey)}
    >
      <option value=""></option>
      {devData.measurements.map((measurement, index) => (
        <option key={index} value={measurement.measurement_id}>
          {measurement.measurement_name}
        </option>
      ))}
    </select>

    <label>Type:</label>
    <select
      className="select_ingredient_type"
      name="type"
      required
      value={type}
      onChange={(e) => handleIngredientRowChange(e, rowKey)}
    >
      <option value=""></option>
      {devData.ingredientTypes.map((ingredientType, index) => (
        <option key={index} value={ingredientType.ingredient_type_id}>
          {ingredientType.ingredient_type_name}
        </option>
      ))}
    </select>

    <label>Ingredient:</label>
    <select
      className="select_ingredient"
      name="ingredient"
      required
      value={ingredient}
      onChange={(e) => handleIngredientRowChange(e, rowKey)}
    >
      <option value=""></option>
      {
        devData.ingredients
        .filter((ing) => ing.ingredient_type_id == type)
        .map((ingredient, index) => (
          <option key={index} value={ingredient.ingredient_id}>
            {ingredient.ingredient_name}
          </option>
        ))
      }
    </select>

    <button
      className="remove_ingredient_row_button"
      onClick={() => removeIngredientRow(rowKey)}
    >
      Remove
    </button>

  </div>
);

export default IngredientRow;