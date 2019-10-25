import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './equipment.css';

const Equipment = props => {
  const history = useHistory();

  const [ equipment, setEquipment ] = useState("");

  useEffect(() => {
    const { id } = props.match.params;
    if (!id) history.push('/home');
    const localEquipment = (
      props.dataEquipment.find(equ=> equ.equipment_id == id) ||
      props.dataMyPrivateEquipment.find(equ=> equ.equipment_id == id)
    );
    if (localEquipment) {
      const localEquipmentType = props.dataEquipmentTypes.find(
        equ => equ.equipment_type_id == localEquipment.equipment_type_id
      );
      localEquipment.equipment_type_name = localEquipmentType.equipment_type_name;
      setEquipment(localEquipment);
    } else {
      history.push('/equipment');
    }
  }, []);

  return (
    <div className="equipment">
      {equipment && <div><EquipmentBreadcrumbs equipment={equipment} /></div>}
      <div className={`view-equipment two-column-b ${props.twoColumnBTheme}`}>
        <div className="left-column">
          {equipment && (
            <div className="equipment-details">
              <div className="equipment-details__name">
                <h1>{equipment.equipment_name}</h1>
              </div>
              <div className="equipment-details__image">
                {
                  props.dataMyPrivateEquipment.find(
                    equ => equ.equipment_id === equipment.equipment_id
                  )
                  ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}`} />
                  : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`} />
                }
              </div>
              <div className="equipment-details__type">
                <b>Equipment Type:</b> {equipment.equipment_type_name}
              </div>
              {/*<div className="equipment-details__description">
                {equipment.equipment_description}
              </div>*/}
            </div>
          )}
        </div>
        <div className="right-column">
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataEquipmentTypes: state.data.equipmentTypes,
  dataEquipment: state.data.equipment,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

export default withRouter(connect(mapStateToProps)(Equipment));