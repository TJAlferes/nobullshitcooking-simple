import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './equipment.css';

const Equipment = props => {
  const [ equipment, setEquipment ] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    if (!id) props.history.push('/home');
    const localEquipment = (
      props.dataEquipment.find(equ=> equ.equipment_id === id) ||
      (
        props.dataMyPrivateEquipment &&
        props.dataMyPrivateEquipment.find(equ=> equ.equipment_id === id)
      )
    );
    if (localEquipment) {
      setEquipment(localEquipment);
    } else {
      //Redirect them to Equipments
    }
  }, []);

  return (
    <div className={`view-equipment two-column-b ${props.twoColumnBTheme}`}>
      {/*<div>{(Object.keys(equipment).length > 1) && <EquipmentBreadcrumbs equipment={equipment} />}</div>*/}
      <div className="left-column">
        <div className="equipment-details">
          <div className="equipment-details__name">
            <h1>{equipment.equipment_name}</h1>
          </div>
          <div className="equipment-details__image">
            {
              (
                props.dataMyPrivateEquipment &&
                props.dataMyPrivateEquipment.find(
                  equ => equ.equipment_id === equipment.equipment_id
                )
              )
              ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}`} />
              : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`} />
            }
          </div>
          <div className="equipment-details__type">
            Equipment Type: {equipment.equipment_type_name}
          </div>
          <div className="equipment-details__description">
            {equipment.equipment_description}
          </div>
        </div>
      </div>
      <div className="right-column">
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataEquipment: state.data.equipment,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

export default withRouter(connect(mapStateToProps)(Equipment));