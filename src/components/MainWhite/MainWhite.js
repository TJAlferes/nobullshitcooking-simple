import React from 'react';
import { connect } from 'react-redux';

import Breadcrumbs from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

const MainWhite = props => {
  let isHome = props.location.pathname.match(/^\/$/);  // regex so that breadcrumbs aren't displayed on the home page
  let className = props.shadow ? "show-shadow" : "hide-shadow";
  let theme = props.theme;
  return (
    <div className={`mainwhite ${theme}`}>
      <div className={className}></div>
      {!isHome && <div id="breadcrumbs"><Breadcrumbs /></div>}
      {props.children}
    </div>
  );
}

const mapStateToProps = state => ({
  shadow: state.menu.shadow,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(MainWhite);