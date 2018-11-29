import React from 'react';

import Breadcrumbs from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

const MainWhite = props => {
  // regex so that breadcrumbs aren't displayed on the home page
  let isHome = props.location.pathname.match(/^\/$/);
  return (
    <div className="main_white">
      {!isHome && <div id="breadcrumbs"><Breadcrumbs /></div>}
      {props.children}
    </div>
  );
}

export default MainWhite;