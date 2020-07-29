import React from 'react';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../../store/data/types';
import { Subtabs } from './Subtabs';

export function FavoriteRecipes({
  handleSubTabClick,
  handleUnfavoriteRecipe,
  myFavoriteRecipes,
  subTab
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading--tall">Favorite Recipes</h2>

      <Subtabs handleSubTabClick={handleSubTabClick} subTab={subTab} />

      {
        myFavoriteRecipes.length
        ? myFavoriteRecipes.map(recipe => (
          <div className="dashboard-content-item" key={recipe.recipe_id}>
            <span className="dashboard-content-item-tiny">
              {
                recipe.recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe${recipe.recipe_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>
            <span className="dashboard-content-item-name">
              <Link to={`/recipe/${recipe.recipe_id}`}>
                {recipe.title}
              </Link>
            </span>
            <span
              className="dashboard-content-item-unfavorite"
              onClick={() => handleUnfavoriteRecipe(recipe.recipe_id)}
            >
              Unfavorite
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't favorited any recipes yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  handleUnfavoriteRecipe(id: number): void;
  myFavoriteRecipes: IWorkRecipe[];
  subTab: string;
};