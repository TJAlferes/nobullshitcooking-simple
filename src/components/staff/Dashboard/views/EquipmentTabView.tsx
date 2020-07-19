import React from 'react';
import { Link } from 'react-router-dom';

import { IEquipment } from '../../../../store/data/types';

export function EquipmentTabView({
  equipment,
  handleDeleteEquipment
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">
      <h2 className="staff-dashboard-content-heading">Official Equipment</h2>
      <Link className="create-new-entity" to="/equipment/submit">
        Create New Equipment
      </Link>
      {equipment.map(equ => (
        <div
          className="staff-dashboard-content-item"
          key={equ.equipment_id}
        >
          <span className="staff-dashboard-content-item-name">
            <Link to={`/equipment/${equ.equipment_id}`}>
              {equ.equipment_name}
            </Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/equipment/edit/${equ.equipment_id}`}>
              Edit
            </Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => handleDeleteEquipment(equ.equipment_id)}
          >
            Delete
          </span>
        </div>
      ))}
    </div>
  );
}

type Props = {
  equipment: IEquipment[];
  handleDeleteEquipment(id: number): void;
};