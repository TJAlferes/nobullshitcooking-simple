import React from 'react';

/*
TO DO:
give this a uuid key, put it in state,
and input value in state default value = null or ""
*/
const StepRow = ({ rowKey, removeStepRow }) => (
  <div className="step_row">
    <label>Step:</label>
    <input type="text" maxLength="250" className="manual_step" required />
    <button className="remove_step_row_button" onClick={() => removeStepRow(rowKey)}>Remove</button>
  </div>
);

export default StepRow;