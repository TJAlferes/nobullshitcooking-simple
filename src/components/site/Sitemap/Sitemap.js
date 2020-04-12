import React from 'react';

import './siteMap.css';

const SiteMap = ({ oneColumnATheme }) => (
  <div className={`site-map one-column-a ${oneColumnATheme}`}>
    <h1 className="site-map__heading">Site Map</h1>
    <p className="site-map__text">Autogenerate this from routes?</p>
  </div>
);

export default SiteMap;