import React from 'react';

import { EquipmentBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IEquipment } from '../../store/data/types';
import './equipment.css';

export function EquipmentView({
  dataMyPrivateEquipment,
  equipment,
  twoColumnBTheme
}: Props): JSX.Element {
  return (
    <div className="equipment">

      <EquipmentBreadcrumbs id={equipment.id} name={equipment.name} />

      <div
        className={`equipment-view two-column-b ${twoColumnBTheme}`}
        data-test="equipment-view"
      >

        <div className="left-column">

          <div className="equipment-details">

            <h1 className="equipment-name">{equipment.name}</h1>

            <div className="equipment-image">
              {
                dataMyPrivateEquipment.find(e => e.id === equipment.id)
                ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.image}`} />
                : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.image}.jpg`} />
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
                {equipment.description}
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
  dataMyPrivateEquipment: IEquipment[];
  equipment: IEquipment;
  twoColumnBTheme: string;
}