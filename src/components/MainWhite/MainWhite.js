import React from 'react';
import { connect } from 'react-redux';

import Breadcrumbs from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

const MainWhite = props => {
  // regex so that breadcrumbs aren't displayed on the home page
  let isHome = props.location.pathname.match(/^\/$/);
  let className = props.shadow ? "show-shadow" : "hide-shadow";
  return (
    <div className="main_white">
      <div className={className}></div>
      {!isHome && <div id="breadcrumbs"><Breadcrumbs /></div>}
      {props.children}
    </div>
  );
}

const mapStateToProps = state => ({shadow: state.menu.shadow});

export default connect(mapStateToProps)(MainWhite);