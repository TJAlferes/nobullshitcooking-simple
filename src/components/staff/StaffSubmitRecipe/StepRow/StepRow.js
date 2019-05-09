import React from 'react';

const StepRow = ({ rowKey, step, handleStepRowChange, removeStepRow }) => (
  <div className="step_row">
    <label>Step:</label>
    <input
      type="text"
      maxLength="250"
      className="manual_step"
      required
      value={step}
      onChange={(e) => handleStepRowChange(e, rowKey)}
    />
    <button
      className="remove_step_row_button"
      onClick={() => removeStepRow(rowKey)}
    >
      Remove
    </button>
  </div>
);

export default StepRow;