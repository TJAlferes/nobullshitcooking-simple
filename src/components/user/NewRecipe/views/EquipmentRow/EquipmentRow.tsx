import React from 'react';

import { IEquipment } from '../../../../../store/data/types';

export function EquipmentRow({
  key,
  rowKey,
  amount,
  type,
  equipment,
  dataEquipment,
  dataMyPrivateEquipment,
  handleEquipmentRowChange,
  removeEquipmentRow
}: Props): JSX.Element {
  let availableEquipment = [
    ...dataEquipment,
    ...(dataMyPrivateEquipment.length ? dataMyPrivateEquipment : [])
  ];
  return (
    <div className="equipment-row" key={key}>

      <label className="equipment-row-label">Amount:</label>
      <select
        className="equipment-row-select-amount"
        name="amount"
        required
        value={amount}
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <label className="equipment-row-label">Type:</label>
      <select
        className="equipment-row-select-equipment-type"
        name="type"
        required
        value={type}
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
      >
        <option value=""></option>
        <option value="2">Preparing</option>
        <option value="3">Cooking</option>
      </select>

      <label className="equipment-row-label">Equipment:</label>
      <select
        className="equipment-row-select-equipment"
        name="equipment"
        required
        value={equipment}
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
      >
        <option value=""></option>
        {
          availableEquipment
          .filter((equ) => equ.equipment_type_id == type)
          .map((equipment, index) => (
            <option key={index} value={equipment.equipment_id}>
              {equipment.equipment_name}
            </option>
          ))
        }
      </select>

      <button
        className="equipment-row-remove-row"
        onClick={() => removeEquipmentRow(rowKey)}
        data-test="equipment-row-remove-row"
      >
        Remove
      </button>
    </div>
  );
}

type Props = {
  key: string;
  rowKey: string;
  amount: string|number;
  type: string|number;
  equipment: string|number;
  dataEquipment: IEquipment[];
  dataMyPrivateEquipment: IEquipment[];
  handleEquipmentRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  removeEquipmentRow(rowKey: string): void;
};