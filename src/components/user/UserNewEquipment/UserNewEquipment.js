import React, { useState } from 'react';
import { connect } from 'react-redux';

import './newEquipment.css';

const UserNewEquipment = props => {
  const [ equipmentType, setEquipmentType ] = useState("");
  const [ equipmentName, setEquipmentName ] = useState("");
  const [ equipmentDescription, setEquipmentDescription ] = useState("");
  const [ equipmentImage, setEquipmentImage ] = useState("");

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="new-equipment">
      <h1>Create New Private Equipment</h1>
      <h2>Type</h2>
      <select onChange={handleChange}>
        {props.dataEquipmentTypes.map(type => (
          <option key={type.equipment_type_id} value={type.equipment_type_id}>
            {type.equipment_type_name}
          </option>
        ))}
      </select>
      <h2>Name</h2>
      <input onChange={handleChange} />
      <h2>Description</h2>
      <textarea onChange={handleChange} />
      <h2>Image</h2>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

const mapStateToProps = state => ({
  dataEquipmentTypes: state.data.equipmentTypes
});

export default connect(mapStateToProps)(UserNewEquipment);