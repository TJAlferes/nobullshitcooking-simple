import React from 'react';

const EquipmentRow = ({
  rowKey,
  amount,
  type,
  equipment,
  dataEquipment,
  handleEquipmentRowChange,
  removeEquipmentRow
}) => (
  <div className="equipment_row">

    <label>Amount:</label>
    <select
      className="select_amount"
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

    <label>Type:</label>
    <select
      className="select_equipment_type"
      name="type"
      required
      value={type}
      onChange={(e) => handleEquipmentRowChange(e, rowKey)}
    >
      <option value=""></option>
      <option value="2">Preparing</option>
      <option value="3">Cooking</option>
    </select>

    <label>Equipment:</label>
    <select
      className="select_equipment"
      name="equipment"
      required
      value={equipment}
      onChange={(e) => handleEquipmentRowChange(e, rowKey)}
    >
      <option value=""></option>
      {
        dataEquipment
        .filter((equ) => equ.equipment_type_id == type)
        .map((equipment, index) => (
          <option key={index} value={equipment.equipment_id}>
            {equipment.equipment_name}
          </option>
        ))
      }
    </select>

    <button
      className="remove_equipment_row_button"
      onClick={() => removeEquipmentRow(rowKey)}
    >
      Remove
    </button>
  </div>
);

export default EquipmentRow;