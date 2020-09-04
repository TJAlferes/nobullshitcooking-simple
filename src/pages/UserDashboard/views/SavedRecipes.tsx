import React from 'react';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../store/data/types';
import { Subtabs } from './Subtabs';

export function SavedRecipes({
  handleSubTabClick,
  handleUnsaveRecipe,
  mySavedRecipes,
  subTab
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content__heading--tall">Saved Recipes</h2>

      <Subtabs handleSubTabClick={handleSubTabClick} subTab={subTab} />

      {
        mySavedRecipes.length
        ? mySavedRecipes.map(r => (
          <div className="dashboard-content__item" key={r.id}>
            <span className="dashboard-content__item-tiny">
              {
                r.recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${r.recipe_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>

            <span className="dashboard-content__item-name">
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </span>

            <span
              className="dashboard-content__item-delete"
              onClick={() => handleUnsaveRecipe(r.id)}
            >
              Unsave
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content__none">
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