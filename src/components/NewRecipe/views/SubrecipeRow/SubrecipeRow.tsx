import React from 'react';

import {
  IMeasurement,
  IWorkRecipe,
  IRecipeType,
  ICuisine
} from '../../../../store/data/types';

export function SubrecipeRow({
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
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  editing,
  selfId,
  handleSubrecipeRowChange,
  removeSubrecipeRow
}: Props): JSX.Element {
  let availableRecipes = [
    ...dataRecipes,
    ...(
      dataMyPrivateRecipes.length
      ? (
        editing && selfId !== 0
        ? dataMyPrivateRecipes.filter((rec) => rec.recipe_id != selfId)
        : dataMyPrivateRecipes
      )
      : []
    ),
    ...(
      dataMyPublicRecipes.length
      ? (
        editing && selfId !== 0
        ? dataMyPublicRecipes.filter((rec) => rec.recipe_id != selfId)
        : dataMyPublicRecipes
      )
      : []
    ),
    ...(dataMyFavoriteRecipes.length ? dataMyFavoriteRecipes : []),
    ...(dataMySavedRecipes.length ? dataMySavedRecipes : [])
  ];
  return (
    <div className="subrecipe-row">

      <label className="subrecipe-row-label">Amount:</label>
      <input
        className="subrecipe-row-manual-amount"
        type="number"
        name="amount"
        step="any"
        min="0.125"
        max="9999"
        required
        value={amount}
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
      />

      <label className="subrecipe-row-label">Unit:</label>
      <select
        className="subrecipe-row-select-unit"
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

      <label className="subrecipe-row-label">Type:</label>
      <select
        className="subrecipe-ro-select-subrecipe-type"
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

      <label className="subrecipe-row-label">Cuisine:</label>
      <select
        className="subrecipe-row-select-cuisine"
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

      <label className="subrecipe-row-label">Subrecipe:</label>
      <select
        className="subrecipe-row-select-subrecipe"
        name="subrecipe"
        required
        value={subrecipe}
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
      >
        <option value=""></option>
        {
          availableRecipes
          .filter((rec) => rec.recipe_type_id == type)
          .filter((cui) => cui.cuisine_id == cuisine)
          .map((recipe, index) => (
            <option key={index} value={recipe.recipe_id}>
              {recipe.title}
            </option>
          ))
        }
      </select>

      <button
        className="subrecipe-row-remove-row"
        onClick={() => removeSubrecipeRow(rowKey)}
        data-test="subrecipe-row-remove-row"
      >
        Remove
      </button>

    </div>
  );
}

type Props = {
  rowKey: string;
  amount: string|number;
  unit: string|number;
  type: string|number;
  cuisine: string|number;
  subrecipe: string|number;
  dataMeasurements: IMeasurement[];
  dataRecipeTypes: IRecipeType[];
  dataCuisines: ICuisine[];
  dataRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  editing: boolean;
  selfId: number;
  handleSubrecipeRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  removeSubrecipeRow(rowKey: string): void;
};