import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentTabView = ({
  myPrivateEquipment,
  handleDeletePrivateEquipment
}) => (
  <div className="dashboard-content">
    <h2 className="dashboard-content-heading">Private Equipment</h2>
    <Link className="create-new-entity" to="/user/equipment/submit">
      Create New Equipment
    </Link>
    {
      myPrivateEquipment.length
      ? myPrivateEquipment.map(equipment => (
        <div
          className="dashboard-content-item"
          key={equipment.equipment_id}
        >
          <span className="dashboard-content-item-tiny">
            {
              equipment.equipment_image !== "nobsc-equipment-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}-tiny`} />
              : <div className="image-default-28-18"></div>
            }
          </span>
          <span className="dashboard-content-item-name">
            <Link to={`/user/equipment/${equipment.equipment_id}`}>
              {equipment.equipment_name}
            </Link>
          </span>
          <span className="dashboard-content-item-action">
            <Link to={`/user/equipment/edit/${equipment.equipment_id}`}>
              Edit
            </Link>
          </span>
          <span
            className="dashboard-content-item-delete"
            onClick={() => handleDeletePrivateEquipment(equipment.equipment_id)}
          >
            Delete
          </span>
        </div>
      ))
      : (
        <div className="dashboard-content-none">
          You haven't created any private equipment yet.
        </div>
      )
    }
  </div>
);

export default EquipmentTabView;