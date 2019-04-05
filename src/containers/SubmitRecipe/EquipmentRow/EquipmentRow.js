import React from 'react';

import devData from '../dev-submit-recipe-data';

/*
TO DO:
give this a uuid key, put it in state,
give it type 2 or 3 substate, (no, just give it a single type substate, and set/update it as they select)
and filter equipment substate based on equipment type substate
*/
const EquipmentRow = ({ rowKey, removeEquipmentRow }) => (
  <div className="equipment_row">
    <label>Amount:</label>
    <select className="select_amount" required>
      <option></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label>Type:</label>
    <select className="select_equipment_type" required>
      <option></option>
      <option value="2">Preparing</option>
      <option value="3">Cooking</option>
    </select>
    <label>Equipment:</label>
    <select className="select_equipment" required>
      <option></option>
      {devData.equipment.map((equipment, index) => (
        <option key={index} value={equipment.equipment_id}>
          {equipment.equipment_name}
        </option>
      ))}
    </select>
    <button className="remove_equipment_row_button" onClick={() => removeEquipmentRow(rowKey)}>Remove</button>
  </div>
);

export default EquipmentRow;