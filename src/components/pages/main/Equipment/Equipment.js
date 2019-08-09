import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './equipment.css';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const Equipment = props => {
  const [ equipment, setEquipment ] = useState({});

  // TODO: Redirect them to equipments if they only navigate to /equipment (if there is no /:id)

  const getEquipment = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/equipment/${id}`);
      const row = res.data;
      setEquipment(row);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const { id } = props.match.params;
    getEquipment(id);
  }, []);

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

export default Equipment;