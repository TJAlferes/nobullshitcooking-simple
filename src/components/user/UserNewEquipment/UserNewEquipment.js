import React, { useState } from 'react';
import { connect } from 'react-redux';

import './newEquipment.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { userCreateNewPrivateEquipment } from '../../../store/actions/index';

const UserNewEquipment = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ equipmentTypeId, setEquipmentTypeId ] = useState("");
  const [ equipmentName, setEquipmentName ] = useState("");
  const [ equipmentDescription, setEquipmentDescription ] = useState("");
  const [ equipmentImage, setEquipmentImage ] = useState("");
  const [ equipmentImageName, setEquipmentImageName ] = useState("Choose File");

  const handleEquipmentTypeChange = e => setEquipmentTypeId(e.target.value);

  const handleEquipmentNameChange = e => setEquipmentName(e.target.value);

  const handleEquipmentDescriptionChange = e => setEquipmentDescription(e.target.value);

  const handleEquipmentImageChange = e => setEquipmentImage(e.target.files[0]);

  const validate = () => (equipmentTypeId !== "") && (equipmentName !== "");

  const handleSubmit = () => {
    const equipmentInfo = {
      equipmentTypeId,
      equipmentName,
      equipmentDescription,
      equipmentImage
    };
    setLoading(true);
    try {
      props.userCreateNewPrivateEquipment(equipmentInfo);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-equipment">
      <h1>Create New Private Equipment</h1>
      <h2>Type</h2>
      <select onChange={handleEquipmentTypeChange}>
        {props.dataEquipmentTypes.map(type => (
          <option key={type.equipment_type_id} value={type.equipment_type_id}>
            {type.equipment_type_name}
          </option>
        ))}
      </select>
      <h2>Name</h2>
      <input onChange={handleEquipmentNameChange} />
      <h2>Description</h2>
      <textarea onChange={handleEquipmentDescriptionChange} />
      <h2>Image</h2>
      <input onChange={handleChange} />
      <LoaderButton
        type="button"
        name="submit"
        id="create_new_private_user_equipment_button"
        text="Create"
        loadingText="Creating..."
        isLoading={loading}
        disabled={!validate()}
        onClick={handleSubmit}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  dataEquipmentTypes: state.data.equipmentTypes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateEquipment: (equipmentInfo) => dispatch(userCreateNewPrivateEquipment(equipmentInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNewEquipment);