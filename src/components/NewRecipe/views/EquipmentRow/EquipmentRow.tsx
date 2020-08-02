import React from 'react';

import { IEquipment } from '../../../../store/data/types';

export function EquipmentRow({
  amount,
  dataEquipment,
  dataMyPrivateEquipment,
  equipment,
  handleEquipmentRowChange,
  removeEquipmentRow,
  rowKey,
  type
}: Props): JSX.Element {
  const availableEquipment = [
    ...dataEquipment,
    ...(dataMyPrivateEquipment.length ? dataMyPrivateEquipment : [])
  ];
  return (
    <div className="equipment-row">

      <label className="equipment-row-label">Amount:</label>
      <select
        className="equipment-row-select-amount"
        name="amount"
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
        required
        value={amount}
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
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
        required
        value={type}
      >
        <option value=""></option>
        <option value="2">Preparing</option>
        <option value="3">Cooking</option>
      </select>

      <label className="equipment-row-label">Equipment:</label>
      <select
        className="equipment-row-select-equipment"
        name="equipment"
        onChange={(e) => handleEquipmentRowChange(e, rowKey)}
        required
        value={equipment}
      >
        <option value=""></option>
        {
          availableEquipment
          .filter(e => e.equipment_type_id == type)
          .map((e, index) => (
            <option key={index} value={e.equipment_id}>
              {e.equipment_name}
            </option>
          ))
        }
      </select>

      <button
        className="equipment-row-remove-row"
        data-test="equipment-row-remove-row"
        onClick={() => removeEquipmentRow(rowKey)}
      >
        Remove
      </button>
    </div>
  );
}

type Props = {
  amount: string | number;
  dataEquipment: IEquipment[];
  dataMyPrivateEquipment: IEquipment[];
  equipment: string | number;
  handleEquipmentRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  removeEquipmentRow(rowKey: string): void;
  rowKey: string;
  type: string | number;
};