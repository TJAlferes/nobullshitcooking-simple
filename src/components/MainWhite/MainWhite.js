import React from 'react';
import { connect } from 'react-redux';

import { Breadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

const MainWhite = props => {
  // so that breadcrumbs aren't displayed on the home page
  let isHome = props.location.pathname.match(/^\/$/);
  // so that the default breadcrumbs aren't displayed on these pages
  let isRecipe = props.location.pathname.match(/^(\/recipe\/([1-9][0-9]*))$/);  
  let isIngredient = props.location.pathname.match(/^(\/ingredient\/([1-9][0-9]*))$/);
  let isEquipment = props.location.pathname.match(/^(\/equipment\/([1-9][0-9]*))$/);
  return (
    <main className={`mainwhite ${props.theme}`}>
      <div className={props.shadow ? 'show-shadow' : 'hide-shadow'}>
      </div>
      {
        !isHome && !isRecipe && !isIngredient && !isEquipment &&
        <div className="desktop_display" id="breadcrumbs"><Breadcrumbs /></div>
      }
      {props.children}
    </main>
  );
}

const mapStateToProps = state => ({
  shadow: state.menu.shadow,
  theme: state.theme.mainTheme
});

export default connect(mapStateToProps)(MainWhite);