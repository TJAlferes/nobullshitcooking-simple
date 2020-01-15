import React from 'react';

import { EquipmentBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './equipment.css';

const EquipmentView = ({
  twoColumnBTheme,
  equipment,
  dataMyPrivateEquipment
}) => (
  <div className="equipment">
    {equipment && <div><EquipmentBreadcrumbs equipment={equipment} /></div>}
    <div className={`view-equipment two-column-b ${twoColumnBTheme}`}>
      <div className="left-column">
        {equipment && (
          <div className="equipment-details">
            <div className="equipment-details__name">
              <h1>{equipment.equipment_name}</h1>
            </div>
            <div className="equipment-details__image">
              {
                dataMyPrivateEquipment.find(
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

export default EquipmentView;