import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './equipment.css';

const Equipment = props => {
  const [ equipment, setEquipment ] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    //if (!id) Redirect them to Equipments
    const localEquipment = (
      props.dataEquipment.find(equ=> equ.equipment_id === id) ||
      (props.dataMyPrivateEquipment && props.dataMyPrivateEquipment.find(equ=> equ.equipment_id === id))
    );
    if (localEquipment) {
      setEquipment(localEquipment);
    } else {
      //Redirect them to Equipments
    }
  }, []);

  return (
    <div className="view-equipment">
      <div>
        {
          (Object.keys(equipment).length > 1) &&
          <EquipmentBreadcrumbs equipment={equipment} />
        }
      </div>
      <div className="equipment">
        <div className="equipment-name">{equipment.equipment_name}</div>
        <div className="equipment-image">
          {
            (props.dataMyPrivateEquipment && props.dataMyPrivateEquipment.find(equ => equ.equipment_id === equipment.equipment_id))
            ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}`} />
            : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`} />
          }
          {/* props.privateImage */}
        </div>
        <div className="equipment-type-name">
          Equipment Type: {equipment.equipment_type_name}
        </div>
        <div className="equipment-description">{equipment.equipment_description}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataEquipment: state.data.equipment,
  dataMyPrivateEquipment: state.data.myPrivateEquipment,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Equipment);