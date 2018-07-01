import React from 'react';

import Breadcrumbs from '../../routing/breadcrumbs/Breadcrumbs';
import { Styles } from './Styles';

const mainWhite = props => {
  // regex so that breadcrumbs aren't displayed on the home page
  let isHome = props.location.pathname.match(/^\/$/);
  return (
    <Styles>
      {!isHome && <div id="breadcrumbs"><Breadcrumbs /></div>}
      {props.children}
    </Styles>
  );
}

export default mainWhite;