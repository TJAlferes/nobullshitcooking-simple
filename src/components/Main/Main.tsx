import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router';

import { Breadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import './main.css';

export const Main: FunctionComponent<Props> = ({
  theme,
  shadow,
  children
}): JSX.Element => {
  const { pathname } = useLocation();
  // so that breadcrumbs aren't displayed at all on the home page:
  const isHome = pathname.match(/^\/$/);
  // so that the default breadcrumbs aren't displayed on these pages:
  const isCuisineDetail = pathname.match(/^(\/page\/guide\/food\/cuisine\/([1-9][0-9]*))$/);
  const isRecipe = pathname.match(/^(\/recipe\/([1-9][0-9]*))$/);
  const isIngredient = pathname.match(/^(\/ingredient\/([1-9][0-9]*))$/);
  const isEquipment = pathname.match(/^(\/equipment\/([1-9][0-9]*))$/);
  const isUserPlan = pathname.match(/^(\/user-plan\/([1-9][0-9]*))$/);
  const isUserRecipe = pathname.match(/^(\/user-recipe\/([1-9][0-9]*))$/);
  const isUserIngredient = pathname.match(/^(\/user-ingredient\/([1-9][0-9]*))$/);
  const isUserEquipment = pathname.match(/^(\/user-equipment\/([1-9][0-9]*))$/);
  const isNewPlan = pathname.match(/^(\/user-plan\/submit)$/);
  const isEditPlan = pathname.match(/^(\/user-plan\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateRecipe = pathname.match(/^(\/user-recipe\/private\/submit)$/);
  const isEditPrivateRecipe = pathname.match(/^(\/user-recipe\/private\/edit\/([1-9][0-9]*))$/);
  const isNewPublicRecipe = pathname.match(/^(\/user-recipe\/public\/submit)$/);
  const isEditPublicRecipe = pathname.match(/^(\/user-recipe\/public\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateIngredient = pathname.match(/^(\/user-ingredient\/submit)$/);
  const isEditPrivateIngredient = pathname.match(/^(\/user-ingredient\/edit\/([1-9][0-9]*))$/);
  const isNewPrivateEquipment = pathname.match(/^(\/user-equipment\/submit)$/);
  const isEditPrivateEquipment = pathname.match(/^(\/user-equipment\/edit\/([1-9][0-9]*))$/);

  return (
    <main className={`main ${theme}`}>
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
        <Breadcrumbs />
      }
      {children}
    </main>
  );
};

type Props = {
  theme: string;
  shadow: boolean;
};