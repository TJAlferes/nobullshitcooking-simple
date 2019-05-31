import React from 'react';

const SubrecipeRow = ({
  rowKey,
  amount,
  unit,
  type,
  subrecipe,
  dataMeasurements,
  dataRecipeTypes,
  dataRecipes,
  handleSubrecipeRowChange,
  removeSubrecipeRow
}) => (
  <div className="subrecipe_row">

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
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    />

    <label>Unit:</label>
    <select
      className="select_unit"
      name="unit"
      required
      value={unit}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    >
      <option value=""></option>
      {dataMeasurements.map((measurement, index) => (
        <option key={index} value={measurement.measurement_id}>
          {measurement.measurement_name}
        </option>
      ))}
    </select>

    <label>Type:</label>
    <select
      className="select_subrecipe_type"
      name="type"
      required
      value={type}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    >
      <option value=""></option>
      {dataRecipeTypes.map((recipeType, index) => (
        <option key={index} value={recipeType.recipe_type_id}>
          {recipeType.recipe_type_name}
        </option>
      ))}
    </select>

    <label>Subrecipe:</label>
    <select
      className="select_subrecipe"
      name="subrecipe"
      required
      value={subrecipe}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    >
      <option value=""></option>
      {
        dataRecipes
        .filter((rec) => rec.recipe_type_id == type)
        .map((recipe, index) => (
          <option key={index} value={recipe.recipe_id}>
            {recipe.recipe_name}
          </option>
        ))
      }
    </select>

    <button
      className="remove_subrecipe_row_button"
      onClick={() => removeSubrecipeRow(rowKey)}
    >
      Remove
    </button>

  </div>
);

export default SubrecipeRow;