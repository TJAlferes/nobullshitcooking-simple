import React from 'react';
import { connect } from 'react-redux';

import { Breadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';

import './mainWhite.css';

export const MainWhite = ({ location, theme, shadow, children }) => {
  // so that breadcrumbs aren't displayed at all on the home page:
  let isHome = location.pathname.match(/^\/$/);

  // so that the default breadcrumbs aren't displayed on these pages:
  let isCuisineDetail = location.pathname.match(/^(\/food\/cuisines\/([1-9][0-9]*))$/);
  let isRecipe = location.pathname.match(/^(\/recipes\/([1-9][0-9]*))$/);
  let isIngredient = location.pathname.match(/^(\/ingredients\/([1-9][0-9]*))$/);
  let isEquipment = location.pathname.match(/^(\/equipment\/([1-9][0-9]*))$/);
  let isUserRecipe = location.pathname.match(/^(\/user\/recipes\/([1-9][0-9]*))$/);
  let isUserIngredient = location.pathname.match(/^(\/user\/ingredients\/([1-9][0-9]*))$/);
  let isUserEquipment = location.pathname.match(/^(\/user\/equipment\/([1-9][0-9]*))$/);

  return (
    <main className={`mainwhite ${theme}`}>
      <div className={shadow ? 'show-shadow' : 'hide-shadow'}>
      </div>
      {
        !isHome &&
        !isCuisineDetail &&
        !isRecipe &&
        !isIngredient &&
        !isEquipment &&
        !isUserRecipe &&
        !isUserIngredient &&
        !isUserEquipment &&
        <div className="desktop_display" id="breadcrumbs"><Breadcrumbs /></div>
      }
      {children}
    </main>
  );
}

const mapStateToProps = state => ({
  shadow: state.menu.shadow,
  theme: state.theme.mainTheme
});

export default connect(mapStateToProps)(MainWhite);