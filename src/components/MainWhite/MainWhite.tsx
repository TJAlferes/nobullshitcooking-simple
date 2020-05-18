import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router';

import { Breadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import './mainWhite.css';

export const MainWhite: FunctionComponent<Props> = ({
  theme,
  breadCrumbsTheme,
  shadow,
  children
}): JSX.Element => {
  const location = useLocation();
  // so that breadcrumbs aren't displayed at all on the home page:
  const isHome = location.pathname.match(/^\/$/);
  // so that the default breadcrumbs aren't displayed on these pages:
  const isCuisineDetail = location.pathname.match(/^(\/food\/cuisines\/([1-9][0-9]*))$/);
  const isRecipe = location.pathname.match(/^(\/recipes\/([1-9][0-9]*))$/);
  const isIngredient = location.pathname.match(/^(\/ingredients\/([1-9][0-9]*))$/);
  const isEquipment = location.pathname.match(/^(\/equipment\/([1-9][0-9]*))$/);
  const isUserPlan = location.pathname.match(/^(\/user-plan\/([1-9][0-9]*))$/);
  const isUserRecipe = location.pathname.match(/^(\/user-recipes\/([1-9][0-9]*))$/);
  const isUserIngredient = location.pathname.match(/^(\/user-ingredients\/([1-9][0-9]*))$/);
  const isUserEquipment = location.pathname.match(/^(\/user-equipment\/([1-9][0-9]*))$/);
  const isNewPlan = location.pathname.match(/^(\/user-plan\/submit)$/);
  const isEditPlan = location.pathname.match(/^(\/user-plan\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateRecipe = location.pathname.match(/^(\/user-recipes\/private\/submit)$/);
  const isEditPrivateRecipe = location.pathname.match(/^(\/user-recipes\/private\/edit\/([1-9][0-9]*))$/);
  const isNewPublicRecipe = location.pathname.match(/^(\/user-recipes\/public\/submit)$/);
  const isEditPublicRecipe = location.pathname.match(/^(\/user-recipes\/public\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateIngredient = location.pathname.match(/^(\/user-ingredients\/submit)$/);
  const isEditPrivateIngredient = location.pathname.match(/^(\/user-ingredients\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateEquipment = location.pathname.match(/^(\/user-equipment\/submit)$/);
  const isEditPrivateEquipment = location.pathname.match(/^(\/user-equipment\/edit\/([1-9][0-9]*))$/);

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
        <Breadcrumbs breadCrumbsTheme={breadCrumbsTheme} />
      }
      {children}
    </main>
  );
};

type Props = {
  theme: string;
  breadCrumbsTheme: string;
  shadow: boolean;
};