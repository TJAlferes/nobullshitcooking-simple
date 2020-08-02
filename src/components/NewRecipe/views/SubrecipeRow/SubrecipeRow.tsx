import React from 'react';

import {
  ICuisine,
  IMeasurement,
  IRecipeType,
  IWorkRecipe
} from '../../../../store/data/types';

export function SubrecipeRow({
  amount,
  cuisine,
  dataCuisines,
  dataMeasurements,
  dataMyFavoriteRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  dataRecipes,
  dataRecipeTypes,
  editing,
  handleSubrecipeRowChange,
  removeSubrecipeRow,
  rowKey,
  selfId,
  subrecipe,
  type,
  unit
}: Props): JSX.Element {
  const availableRecipes = [
    ...(dataMyFavoriteRecipes.length ? dataMyFavoriteRecipes : []),
    ...(
      dataMyPrivateRecipes.length
      ? (
        editing && selfId !== 0
        ? dataMyPrivateRecipes.filter(r => r.recipe_id != selfId)
        : dataMyPrivateRecipes
      )
      : []
    ),
    ...(
      dataMyPublicRecipes.length
      ? (
        editing && selfId !== 0
        ? dataMyPublicRecipes.filter(r => r.recipe_id != selfId)
        : dataMyPublicRecipes
      )
      : []
    ),
    ...(dataMySavedRecipes.length ? dataMySavedRecipes : []),
    ...dataRecipes,
  ];

  return (
    <div className="subrecipe-row">

      <label className="subrecipe-row-label">Amount:</label>
      <input
        className="subrecipe-row-manual-amount"
        max="9999"
        min="0.125"
        name="amount"
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
        required
        step="any"
        type="number"
        value={amount}
      />

      <label className="subrecipe-row-label">Unit:</label>
      <select
        className="subrecipe-row-select-unit"
        name="unit"
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
        required
        value={unit}
      >
        <option value=""></option>
        {dataMeasurements.map((m, index) => (
          <option key={index} value={m.measurement_id}>
            {m.measurement_name}
          </option>
        ))}
      </select>

      <label className="subrecipe-row-label">Type:</label>
      <select
        className="subrecipe-ro-select-subrecipe-type"
        name="type"
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
        required
        value={type}
      >
        <option value=""></option>
        {dataRecipeTypes.map((r, index) => (
          <option key={index} value={r.recipe_type_id}>
            {r.recipe_type_name}
          </option>
        ))}
      </select>

      <label className="subrecipe-row-label">Cuisine:</label>
      <select
        className="subrecipe-row-select-cuisine"
        name="cuisine"
        onChange={(e) => handleSubrecipeRowChange(e, rowKey)}
        required
        value={cuisine}
      >
        <option value=""></option>
        {dataCuisines.map((c, index) => (
          <option key={index} value={c.cuisine_id}>{c.cuisine_name}</option>
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
          .filter(r => r.recipe_type_id == type)
          .filter(r => r.cuisine_id == cuisine)
          .map((r, index) => (
            <option key={index} value={r.recipe_id}>{r.title}</option>
          ))
        }
      </select>

      <button
        className="subrecipe-row-remove-row"
        data-test="subrecipe-row-remove-row"
        onClick={() => removeSubrecipeRow(rowKey)}
      >
        Remove
      </button>

    </div>
  );
}

type Props = {
  amount: string | number;
  cuisine: string | number;
  dataCuisines: ICuisine[];
  dataMeasurements: IMeasurement[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  dataRecipes: IWorkRecipe[];
  dataRecipeTypes: IRecipeType[];
  editing: boolean;
  handleSubrecipeRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  removeSubrecipeRow(rowKey: string): void;
  rowKey: string;
  selfId: number;
  subrecipe: string | number;
  type: string | number;
  unit: string | number;
};