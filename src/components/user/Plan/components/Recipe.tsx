import React from 'react';
import { Link } from 'react-router-dom';

import { IPlannerViewRecipe } from '../../../../store/plannerView/types';

export function Recipe({ recipe }: Props): JSX.Element {
  return (
    <div className="plan__recipe">
      <div className="plan__recipe-image">
        <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
      </div>
      <div className="plan__recipe-text">
        <Link
          to={
            Number(recipe.owner_id) === 1
            ? `/recipes/${recipe.id}`
            : `/user-recipes/${recipe.id}`
          }
        >
          {recipe.title}
        </Link>
      </div>
    </div>
  );
}

type Props = {
  recipe: IPlannerViewRecipe;
};