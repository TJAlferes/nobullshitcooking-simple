import React from 'react';

import {
  IIngredient,
  IIngredientType,
  IMeasurement
} from '../../../../store/data/types';

// TO DO: Add ingredient_brand and ingredient_variety

export function IngredientRow({
  amount,
  dataIngredients,
  dataIngredientTypes,
  dataMeasurements,
  dataMyPrivateIngredients,
  handleIngredientRowChange,
  ingredient,
  removeIngredientRow,
  rowKey,
  type,
  unit
}: Props): JSX.Element {
  const availableIngredients = [
    ...dataIngredients,
    ...(dataMyPrivateIngredients.length ? dataMyPrivateIngredients : [])
  ];
  return (
    <div className="ingredient-row">

      <label className="ingredient-row-label">Amount:</label>
      <input
        className="ingredient-row-manual-amount"
        max="9999"
        min="0.125"
        name="amount"
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
        required
        step="any"
        type="number"
        value={amount}
      />

      <label className="ingredient-row-label">Unit:</label>
      <select
        className="ingredient-row-select-unit"
        name="unit"
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
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

      <label className="ingredient-row-label">Type:</label>
      <select
        className="ingredient-row-select-ingredient-type"
        name="type"
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
        required
        value={type}
      >
        <option value=""></option>
        {dataIngredientTypes.map((i, index) => (
          <option key={index} value={i.ingredient_type_id}>
            {i.ingredient_type_name}
          </option>
        ))}
      </select>

      <label className="ingredient-row-label">Ingredient:</label>
      <select
        className="ingredient-row-select-ingredient"
        name="ingredient"
        onChange={(e) => handleIngredientRowChange(e, rowKey)}
        required
        value={ingredient}
      >
        <option value=""></option>
        {
          availableIngredients
          .filter(i => i.ingredient_type_id == type)
          .map((i, index) => (
            <option key={index} value={i.ingredient_id}>
              {i.ingredient_name}
            </option>
          ))
        }
      </select>

      <button
        className="ingredient-row-remove-row"
        data-test="ingredient-row-remove-row"
        onClick={() => removeIngredientRow(rowKey)}
      >
        Remove
      </button>

    </div>
  );
}

type Props = {
  amount: string | number;
  dataIngredients: IIngredient[];
  dataIngredientTypes: IIngredientType[];
  dataMeasurements: IMeasurement[];
  dataMyPrivateIngredients: IIngredient[];
  handleIngredientRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  ingredient: string | number;
  removeIngredientRow(rowKey: string): void;
  rowKey: string;
  type: string | number;
  unit: string | number;
};