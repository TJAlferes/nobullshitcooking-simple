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
        ? myFavoriteRecipes.map(r => (
          <div className="dashboard-content-item" key={r.recipe_id}>
            <span className="dashboard-content-item-tiny">
              {
                r.recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe${r.recipe_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>
            <span className="dashboard-content-item-name">
              <Link to={`/recipe/${r.recipe_id}`}>{r.title}</Link>
            </span>
            <span
              className="dashboard-content-item-unfavorite"
              onClick={() => handleUnfavoriteRecipe(r.recipe_id)}
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