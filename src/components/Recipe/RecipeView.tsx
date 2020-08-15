import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IWorkRecipe } from '../../store/data/types';
import { IRecipe } from './Recipe';
import './recipe.css';

export function RecipeView({
  dataMyFavoriteRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  favoriteClicked,
  feedback,
  handleFavoriteClick,
  handleSaveClick,
  loading,
  recipe,
  saveClicked,
  twoColumnBTheme,
  userIsAuthenticated
}: Props): JSX.Element {
  const {
    id,
    author,
    title,
    description,
    cuisine_name,
    recipe_type_name,
    directions,
    required_equipment,
    required_ingredients,
    required_subrecipes,
    required_methods,
    recipe_image,
    equipment_image,
    ingredients_image,
    cooking_image
  } = recipe;

  const recipeBy = () => {
    if (author === "Unknown") return "Unknown";
    return (
      <Link className="recipe__author" to={`/profile/${author}`}>{author}</Link>
    );
  };

  return (
    <div className="recipe">

      <RecipeBreadcrumbs id={id} title={title} />

      <div className={`recipe-view two-column-b ${twoColumnBTheme}`}>

        <div className="left-column">

          <div className="recipe-details">

            <h1 className="recipe__title">{title}</h1>

            <p className="recipe__feedback">{feedback}</p>

            <div className="recipe__favorite-save-outer">
              {(
                userIsAuthenticated &&
                !dataMyPrivateRecipes.find(r => r.id == id) &&
                !dataMyPublicRecipes.find(r => r.id == id)
              ) ? (
                <>
                  {
                    dataMyFavoriteRecipes.find(r => r.id == id) ? (
                      <span className="recipe__favorited-saved">
                        Favorited
                      </span>
                    ) : (
                      !favoriteClicked ? (
                        <button
                          className="recipe__favorite-save"
                          disabled={loading}
                          name="favorite-button"
                          onClick={handleFavoriteClick}
                        >
                          Favorite
                        </button>
                      ) : (
                        <span
                          className="recipe__favorited-saved"
                          data-test="favorited-span"
                        >
                          Favorited
                        </span>
                      )
                    )
                  }
                  {
                    dataMySavedRecipes.find(r => r.id == id)
                    ? <span className="recipe__favorited-saved">Saved</span>
                    : (
                      !saveClicked ? (
                        <button
                          className="recipe__favorite-save"
                          disabled={loading}
                          name="save-button"
                          onClick={handleSaveClick}
                        >
                          Save
                        </button>
                      ) : (
                        <span
                          className="recipe__favorited-saved"
                          data-test="saved-span"
                        >
                          Saved
                        </span>
                      )
                    )
                  }
                </>
              ) : false}
            </div>

            <div className="recipe__image">
              {
                recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe_image}`} />
                : (
                  <div
                    className="image-default-280-172"
                    data-test="recipe-default"
                  >
                  </div>
                )
              }
            </div>

            <div className="recipe__author-outer">
              <b>Author:</b>{' '}{recipeBy()}
            </div>

            <div className="recipe__description-outer">
              <b>Author's note:</b>{' '}
              <em className="recipe__description">{description}</em>
            </div>

            <div className="recipe__cuisine-outer">
              <b>Cuisine:</b>{' '}
              <span className="recipe__cuisine">{cuisine_name}</span>
            </div>

            <div className="recipe__type-outer">
              <b>Recipe type:</b>{' '}
              <span className="recipe__type">{recipe_type_name}</span>
            </div>

            <h2 className="recipe__h2" data-test="methods-heading">
              Required Methods
            </h2>
            <div className="recipe__required-methods">
              {
                required_methods && required_methods.map(m => (
                  <div className="recipe__required-method" key={m.method_name}>
                    {m.method_name}
                  </div>
                ))
              }
            </div>

            <h2 className="recipe__h2" data-test="equipment-heading">
              Required Equipment
            </h2>
            <div className="recipe__equipment-image">
              {
                equipment_image !== "nobsc-recipe-equipment-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${equipment_image}`} />
                : (
                  <div
                    className="image-default-280-172"
                    data-test="recipe-equipment-default"
                  >
                  </div>
                )
              }
            </div>
            <div className="recipe__required-equipments">
              {
                required_equipment && required_equipment.map(e => (
                  <div
                    className="recipe__required-equipment"
                    key={e.equipment_name}
                  >
                    {e.amount}{' '}{e.equipment_name}
                  </div>
                ))
              }
            </div>

            <h2 className="recipe__h2" data-test="ingredients-heading">
              Required Ingredients
            </h2>
            <div className="recipe__ingredients-image">
              {
                ingredients_image !== "nobsc-recipe-ingredients-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${ingredients_image}`} />
                : (
                  <div
                    className="image-default-280-172"
                    data-test="recipe-ingredients-default"
                  >
                  </div>
                )
              }
            </div>
            <div className="recipe__required-ingredients">
              {
                required_ingredients && required_ingredients.map(i => (
                  <div
                    className="recipe__required-ingredient"
                    key={i.ingredient_name}
                  >
                    {i.amount}{' '}{i.measurement_name}{' '}{i.ingredient_name}
                  </div>
                ))
              }
            </div>

            <h2 className="recipe__h2" data-test="subrecipes-heading">
              Required Subrecipes
            </h2>
            <div className="recipe__required-subrecipes">
              {
                required_subrecipes
                ? required_subrecipes.map(s => (
                  <div
                    className="recipe__required-subrecipe"
                    key={s.subrecipe_title}
                  >
                    {s.amount}{' '}{s.measurement_name}{' '}{s.subrecipe_title}
                  </div>
                ))
                : "none"
              }
            </div>

            <h2 className="recipe__h2" data-test="directions-heading">
              Directions
            </h2>
            <div className="recipe__cooking-image">
              {
                cooking_image !== "nobsc-recipe-cooking-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${cooking_image}`} />
                : (
                  <div
                    className="image-default-280-172"
                    data-test="recipe-cooking-default"
                  >
                  </div>
                )
              }
            </div>
            <div className="recipe__directions">
              {directions}
            </div>
            
          </div>

        </div>

        <div className="right-column">
        </div>

      </div>

    </div>
  );
}

type Props = {
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  favoriteClicked: boolean;
  feedback: string;
  handleFavoriteClick(): void;
  handleSaveClick(): void;
  loading: boolean;
  recipe: IRecipe;
  saveClicked: boolean;
  twoColumnBTheme: string;
  userIsAuthenticated: boolean;
};