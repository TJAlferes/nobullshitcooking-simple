import React from 'react';

import { EquipmentBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IEquipment } from '../../store/data/types';
import './equipment.css';

export function EquipmentView({
  dataMyPrivateEquipment,
  equipment,
  twoColumnBTheme
}: Props): JSX.Element {
  const { id, name, image, equipment_type_name, description } = equipment;

  return (
    <div className="equipment">

      <EquipmentBreadcrumbs id={id} name={name} />

      <div
        className={`equipment-view two-column-b ${twoColumnBTheme}`}
        data-test="equipment-view"
      >

        <div className="left-column">

          <div className="equipment-details">

            <h1 className="equipment__name">{name}</h1>

            <div className="equipment__image">
              {
                dataMyPrivateEquipment.find(e => e.id === id)
                ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${image}`} />
                : <img src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${image}.jpg`} />
              }
            </div>

            <div className="equipment__type-outer">
              <b>Equipment Type:</b>
              {' '}
              <span className="equipment__type">{equipment_type_name}</span>
            </div>
            
            <div className="equipment__description-outer">
              <b>Equipment Description:</b>
              {' '}
              <div className="equipment__description">{description}</div>
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