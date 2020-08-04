import React from 'react';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../../store/data/types';
import { Subtabs } from './Subtabs';

export function SavedRecipes({
  handleSubTabClick,
  handleUnsaveRecipe,
  mySavedRecipes,
  subTab
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading--tall">Saved Recipes</h2>

      <Subtabs handleSubTabClick={handleSubTabClick} subTab={subTab} />

      {
        mySavedRecipes.length
        ? mySavedRecipes.map(r => (
          <div className="dashboard-content-item" key={r.recipe_id}>
            <span className="dashboard-content-item-tiny">
              {
                r.recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${r.recipe_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>
            <span className="dashboard-content-item-name">
              <Link to={`/recipe/${r.recipe_id}`}>{r.title}</Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => handleUnsaveRecipe(r.recipe_id)}
            >
              Unsave
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't saved any recipes yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  handleUnsaveRecipe(id: number): void;
  mySavedRecipes: IWorkRecipe[];
  subTab: string;
};