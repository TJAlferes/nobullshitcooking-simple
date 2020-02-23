import React from 'react';

import './cuisine.css';

const CuisineView = ({ oneColumnATheme, cuisine, tab }) => (
  <div className="cuisine">
    {/*cuisine && <div><CuisineBreadcrumbs cuisine={cuisine} /></div>*/}
    <div className={`view-cuisine one-column-a ${oneColumnATheme}`}>
      <div className="left-column">
        {equipment && (
          <div className="equipment-details">
            <div className="equipment-details__name">
              <h1>{equipment.equipment_name}</h1>
            </div>
            <div className="equipment-details__image">
              {/*<img src={`https://s3.amazonaws.com/nobsc-images-01/cuisines/${cuisine.cuisine_name}.jpg`} />*/}
            </div>
            <div className="equipment-details__type">
              <b>Equipment Type:</b> {equipment.equipment_type_name}
            </div>
            {/*<div className="equipment-details__description">
              {cuisine}
            </div>*/}
          </div>
        )}
      </div>
      <div className="right-column">
      </div>
    </div>
  </div>
);

export default CuisineView;