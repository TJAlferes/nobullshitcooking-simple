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
  let isUserPlan = location.pathname.match(/^(\/user-plan\/([1-9][0-9]*))$/);
  let isUserRecipe = location.pathname.match(/^(\/user-recipes\/([1-9][0-9]*))$/);
  let isUserIngredient = location.pathname.match(/^(\/user-ingredients\/([1-9][0-9]*))$/);
  let isUserEquipment = location.pathname.match(/^(\/user-equipment\/([1-9][0-9]*))$/);
  let isNewPlan = location.pathname.match(/^(\/user-plan\/submit)$/);
  let isEditPlan = location.pathname.match(/^(\/user-plan\/edit\/([1-9][0-9]*))$/);
  let isNewPrivateRecipe = location.pathname.match(/^(\/user-recipes\/private\/submit)$/);
  let isEditPrivateRecipe = location.pathname.match(/^(\/user-recipes\/private\/edit\/([1-9][0-9]*))$/);
  let isNewPublicRecipe = location.pathname.match(/^(\/user-recipes\/public\/submit)$/);
  let isEditPublicRecipe = location.pathname.match(/^(\/user-recipes\/public\/edit\/([1-9][0-9]*))$/);
  let isNewPrivateIngredient = location.pathname.match(/^(\/user-ingredients\/submit)$/);
  let isEditPrivateIngredient = location.pathname.match(/^(\/user-ingredients\/edit\/([1-9][0-9]*))$/);
  let isNewPrivateEquipment = location.pathname.match(/^(\/user-equipment\/submit)$/);
  let isEditPrivateEquipment = location.pathname.match(/^(\/user-equipment\/edit\/([1-9][0-9]*))$/);

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
        !isUserPlan &&
        !isUserRecipe &&
        !isUserIngredient &&
        !isUserEquipment &&
        !isNewPlan &&
        !isEditPlan &&
        !isNewPrivateRecipe &&
        !isEditPrivateRecipe &&
        !isNewPublicRecipe &&
        !isEditPublicRecipe &&
        !isNewPrivateIngredient &&
        !isEditPrivateIngredient &&
        !isNewPrivateEquipment &&
        !isEditPrivateEquipment &&
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