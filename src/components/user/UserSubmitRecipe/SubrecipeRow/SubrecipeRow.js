import React from 'react';

const SubrecipeRow = ({
  rowKey,
  amount,
  unit,
  type,
  cuisine,
  subrecipe,
  dataMeasurements,
  dataRecipeTypes,
  dataCuisines,
  dataRecipes,
  handleSubrecipeRowChange,
  removeSubrecipeRow
}) => (
  <div className="subrecipe-row">

    <label className="subrecipe-row__label">Amount:</label>
    <input
      className="subrecipe-row__manual-amount"
      type="number"
      name="amount"
      step="any"
      min="0.125"
      max="9999"
      required
      value={amount}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    />

    <label className="subrecipe-row__label">Unit:</label>
    <select
      className="subrecipe-row__select-unit"
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

    <label className="subrecipe-row__label">Type:</label>
    <select
      className="subrecipe-ro__select-subrecipe-type"
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

    <label className="subrecipe-row__label">Cuisine:</label>
    <select
      className="subrecipe-row__select-cuisine"
      name="cuisine"
      required
      value={cuisine}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    >
      <option value=""></option>
      {dataCuisines.map((cuisine, index) => (
        <option key={index} value={cuisine.cuisine_id}>
          {cuisine.cuisine_name}
        </option>
      ))}
    </select>

    <label className="subrecipe-row__label">Subrecipe:</label>
    <select
      className="subrecipe-row__select-subrecipe"
      name="subrecipe"
      required
      value={subrecipe}
      onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
    >
      <option value=""></option>
      {
        dataRecipes
        .filter((rec) => rec.recipe_type_id == type)
        .filter((cui) => cui.cuisine_id == cuisine)
        .map((recipe, index) => (
          <option key={index} value={recipe.recipe_id}>
            {recipe.recipe_name}
          </option>
        ))
      }
    </select>

    <button
      className="subrecipe-row__remove-row"
      onClick={() => removeSubrecipeRow(rowKey)}
    >
      Remove
    </button>

  </div>
);

export default SubrecipeRow;