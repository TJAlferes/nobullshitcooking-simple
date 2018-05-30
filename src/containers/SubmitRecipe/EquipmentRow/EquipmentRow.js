const equipmentRow = () => (
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
    </select>
    <button className="remove_equipment_row_button">Remove</button>
  </div>
);

export default equipmentRow;