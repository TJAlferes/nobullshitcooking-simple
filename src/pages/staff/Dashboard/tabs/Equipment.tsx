import React from 'react';
import { Link } from 'react-router-dom';

import { IEquipment } from '../../../../store/data/types';

export function Equipment({
  equipment,
  handleDeleteEquipment
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">
      <h2 className="staff-dashboard-content-heading">Equipment</h2>
      <Link className="create-new-entity" to="/equipment/submit">
        Create New Equipment
      </Link>
      {equipment.map(e => (
        <div className="staff-dashboard-content-item" key={e.id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/equipment/${e.id}`}>{e.name}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/equipment/edit/${e.id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => handleDeleteEquipment(e.id)}
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