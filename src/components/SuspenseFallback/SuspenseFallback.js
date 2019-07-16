import React from 'react';

import FlamesLoader from '../../assets/images/content/loading/flames-loader.png';
import './suspenseFallback.css';

const SuspenseFallback = () => (
  <div className="suspense-fallback">
    <img className="suspense-fallback-image" src={FlamesLoader} />
  </div>
);

export default SuspenseFallback;