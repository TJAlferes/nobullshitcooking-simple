import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './equipment.css';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const Equipment = props => {
  const [ equipment, setEquipment ] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    //if (!id) Redirect them to Equipments
    const localEquipment = props.dataEquipment.find(equ=> equ.equipment_id === id);
    if (localEquipment) {
      setEquipment(localEquipment);
    } else {
      getEquipment(id);
    }
  }, []);

  const getEquipment = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/equipment/${id}`);  // also for private! /user/
      setEquipment(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div>
        {
          (Object.keys(equipment).length > 1) &&
          <EquipmentBreadcrumbs equipment={equipment} />
        }
      </div>
      <div id="page">
        <div className="view-equipment">
          <div className="equipment-name">{equipment.equipment_name}</div>
          <div className="equipment-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`} />
          </div>
          <div className="equipment-type-name">
            Equipment Type: {equipment.equipment_type_name}
          </div>
          <p>Specs: Coming soon.</p>
        </div>
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