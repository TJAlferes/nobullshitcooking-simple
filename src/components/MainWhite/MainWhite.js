import React from 'react';
import { connect } from 'react-redux';

import { Breadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

const MainWhite = props => {
  // so that breadcrumbs aren't displayed on the home page
  let isHome = props.location.pathname.match(/^\/$/);

  // so that the default breadcrumbs aren't displayed on these pages
  let isRecipe = props.location.pathname.match(/^(\/food\/recipe\/([1-9][0-9]*))$/);  
  let isIngredient = props.location.pathname.match(/^(\/food\/ingredient\/([1-9][0-9]*))$/);
  let isEquipment = props.location.pathname.match(/^(\/food\/equipment\/([1-9][0-9]*))$/);

  let className = props.shadow ? "show-shadow" : "hide-shadow";
  let theme = props.theme;

  return (
    <div className={`mainwhite ${theme}`}>
      <div className={className}></div>
      {
        !isHome && !isRecipe && !isIngredient && !isEquipment &&
        <div id="breadcrumbs"><Breadcrumbs /></div>
      }
      {props.children}
    </div>
  );
}

const mapStateToProps = state => ({
  shadow: state.menu.shadow,
  theme: state.theme.mainTheme
});

export default connect(mapStateToProps)(MainWhite);