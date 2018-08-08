import React from 'react';

const stepRow = () => (
  <div className="step_row">
    <label>Step:</label>
    <input type="text" maxLength="250" className="manual_step" required />
    <button className="remove_row_button">Remove</button>
  </div>
);

export default stepRow;