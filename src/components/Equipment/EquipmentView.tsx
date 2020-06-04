import React from 'react';

import { EquipmentBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IEquipment } from '../../store/data/types';
import './equipment.css';

export function EquipmentView({
  breadCrumbsTheme,
  twoColumnBTheme,
  equipment,
  dataMyPrivateEquipment
}: Props): JSX.Element {
  return (
    <div className="equipment">

      <div>
        {EquipmentBreadcrumbs({
          breadCrumbsTheme,
          equipmentId: equipment.equipment_id,
          equipmentName: equipment.equipment_name
        })}
      </div>

      <div
        className={`equipment-view two-column-b ${twoColumnBTheme}`}
        data-test="equipment-view"
      >

        <div className="left-column">

          <div className="equipment-details">

            <h1 className="equipment-name">{equipment.equipment_name}</h1>

            <div className="equipment-image">
              {
                dataMyPrivateEquipment.find(
                  equ => equ.equipment_id === equipment.equipment_id
                )
                ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}`} />
                : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}`} />
              }
            </div>

            <div className="equipment-type-outer">
              <b>Equipment Type:</b>
              {' '}
              <span className="equipment-type">
                {equipment.equipment_type_name}
              </span>
            </div>
            
            <div className="equipment-description-outer">
              <b>Equipment Description:</b>
              {' '}
              <div className="equipment-description">
                {equipment.equipment_description}
              </div>
            </div>

          </div>

        </div>

        <div className="right-column">
        </div>

      </div>

    </div>
  );
}

type Props = {
  breadCrumbsTheme: string;
  twoColumnBTheme: string;
  equipment: IEquipment;
  dataMyPrivateEquipment: IEquipment[];
}