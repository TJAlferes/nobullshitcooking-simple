import React from 'react';

const IngredientRow = ({
  rowKey,
  amount,
  unit,
  type,
  ingredient,
  dataMeasurements,
  dataIngredientTypes,
  dataIngredients,
  dataMyPrivateIngredients = [],
  handleIngredientRowChange,
  removeIngredientRow
}) => {
  let availableIngredients = [
    ...dataIngredients,
    ...(dataMyPrivateIngredients.length && dataMyPrivateIngredients)
  ];
  return (
    <div className="ingredient-row">

      <label className="ingredient-row__label">Amount:</label>
      <input
        className="ingredient-row__manual-amount"
        type="number"
        name="amount"
        step="any"
        min="0.125"
        max="9999"
        required
        value={amount}
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
      />

      <label className="ingredient-row__label">Unit:</label>
      <select
        className="ingredient-row__select-unit"
        name="unit"
        required
        value={unit}
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
      >
        <option value=""></option>
        {dataMeasurements.map((measurement, index) => (
          <option key={index} value={measurement.measurement_id}>
            {measurement.measurement_name}
          </option>
        ))}
      </select>

      <label className="ingredient-row__label">Type:</label>
      <select
        className="ingredient-row__select-ingredient-type"
        name="type"
        required
        value={type}
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
      >
        <option value=""></option>
        {dataIngredientTypes.map((ingredientType, index) => (
          <option key={index} value={ingredientType.ingredient_type_id}>
            {ingredientType.ingredient_type_name}
          </option>
        ))}
      </select>

      <label className="ingredient-row__label">Ingredient:</label>
      <select
        className="ingredient-row__select-ingredient"
        name="ingredient"
        required
        value={ingredient}
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
      >
        <option value=""></option>
        {
          availableIngredients
          .filter((ing) => ing.ingredient_type_id == type)
          .map((ingredient, index) => (
            <option key={index} value={ingredient.ingredient_id}>
              {ingredient.ingredient_name}
            </option>
          ))
        }
      </select>

      <button
        className="ingredient-row__remove-row"
        onClick={() => removeIngredientRow(rowKey)}
      >
        Remove
      </button>

    </div>
  );
};

export default IngredientRow;