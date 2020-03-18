import React from 'react';
//import { Link } from 'react-router-dom';  // what is this for?

import { RecipeBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './recipe.css';

// TO DO: change this [0] stuff

const RecipeView = ({
  match,
  twoColumnBTheme,
  isAuthenticated,
  feedback,
  loading,

  recipe,

  recipeBy,

  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  favoriteClicked,
  handleFavoriteClick,
  saveClicked,
  handleSaveClick
}) => (
  <div className="recipe">
    <div><RecipeBreadcrumbs recipe={recipe} /></div>

    <div className={`recipe-view two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <div className="recipe-details">
          <div className="recipe-details-title">
            <h1>{recipe.recipe[0].title}</h1>
          </div>

          <p className="recipe-feedback">{feedback}</p>

          <div className="recipe-favorite-save-outer">
            {
              (
                isAuthenticated &&
                !dataMyPrivateRecipes.find(
                  rec => rec.recipe_id == match.params.id
                ) &&
                !dataMyPublicRecipes.find(
                  rec => rec.recipe_id == match.params.id
                )
              )
              ? (
                dataMyFavoriteRecipes.find(
                  rec => rec.recipe_id == match.params.id
                )
                ? (
                  <span className="recipe-favorited-saved">
                    Favorited
                  </span>
                )
                : (
                  !favoriteClicked ? (
                    <button
                      className="recipe-favorite-save"
                      onClick={handleFavoriteClick}
                      disabled={loading}
                    >
                      Favorite
                    </button>
                  )
                  : (
                    <span className="recipe-favorited-saved">
                      Favorited
                    </span>
                  )
                )
              )
              : false
            }

            {
              (
                isAuthenticated &&
                !dataMyPrivateRecipes.find(
                  rec => rec.recipe_id == match.params.id
                ) &&
                !dataMyPublicRecipes.find(
                  rec => rec.recipe_id == match.params.id
                )
              )
              ? (
                dataMySavedRecipes.find(
                  rec => rec.recipe_id == match.params.id
                )
                ? (
                  <span className="recipe-favorited-saved">
                    Saved
                  </span>
                )
                : (
                  !saveClicked ? (
                    <button
                      className="recipe-favorite-save"
                      onClick={handleSaveClick}
                      disabled={loading}
                    >
                      Save
                    </button>
                  )
                  : (
                    <span className="recipe-favorited-saved">
                      Saved
                    </span>
                  )
                )
              )
              : false
            }
          </div>



          <div className="recipe-details-image">
            {
              recipe.recipe[0].recipeImage !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe[0].recipeImage}`} />
              : <div className="image-default-280-172"></div>
            }
          </div>
          <div className="recipe-details-author">
            <b>Author:</b>{' '}{recipeBy()}
          </div>
          <div className="recipe-details-description">
            <b>Author's note:</b>{' '}<i>{`"${recipe.recipe[0].description}"`}</i>
          </div>
          <div className="recipe-details-cuisine">
            <b>Cuisine:</b>{' '}{recipe.recipe[0].cuisineName}
          </div>
          <div className="recipe-details-recipe-type">
            <b>Recipe type:</b>{' '}{recipe.recipe[0].recipeTypeName}
          </div>



          <h2 className="recipe-heading-two">Required Methods</h2>
          <div className="recipe-required-methods">
            {recipe.requiredMethods && recipe.requiredMethods.map(method => (
              <div
                className="recipe-required-method"
                key={method.methodName}
              >
                {method.methodName}
              </div>
            ))}
          </div>



          <h2 className="recipe-heading-two">Required Equipment</h2>
          <div className="recipe-equipment-image">
            {
              recipe.recipe[0].recipeEquipmentImage !== "nobsc-recipe-equipment-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.recipe[0].recipeEquipmentImage}`} />
              : <div className="image-default-280-172"></div>
            }
          </div>
          <div className="recipe-required-equipments">
            {recipe.requiredEquipment && recipe.requiredEquipment.map(equ => (
              <div
                className="recipe-required-equipment"
                key={equ.equipmentName}
              >
                {equ.amount}{' '}{equ.equipmentName}
              </div>
            ))}
          </div>



          <h2 className="recipe-heading-two">Required Ingredients</h2>
          <div className="recipe-ingredients-image">
            {
              recipe.recipe[0].recipeIngredientsImage !== "nobsc-recipe-ingredients-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.recipe[0].recipeIngredientsImage}`} />
              : <div className="image-default-280-172"></div>
            }
          </div>
          <div className="recipe-required-ingredients">
            {recipe.requiredIngredients && recipe.requiredIngredients.map(ing => (
              <div
                className="recipe-required-ingredient"
                key={ing.ingredientName}
              >
                {ing.amount}{' '}{ing.measurementName}{' '}{ing.ingredientName}
              </div>
            ))}
          </div>



          <div className="recipe-required-subrecipes">
            {recipe.requiredSubrecipes.length > 0 && <h2>Required Subrecipes</h2>}
            {recipe.requiredSubrecipes.length > 0 && recipe.requiredSubrecipes.map(rec => (
              <div
                className="recipe-required-subrecipe"
                key={rec.subrecipeTitle}
              >
                {rec.amount}{' '}{rec.measurementName}{' '}{rec.subrecipeTitle}
              </div>
            ))}
          </div>



          <h2 className="recipe-heading-two">Directions</h2>
          <div className="recipe-cooking-image">
            {
              recipe.recipe[0].recipeCookingImage !== "nobsc-recipe-cooking-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.recipe[0].recipeCookingImage}`} />
              : <div className="image-default-280-172"></div>
            }
          </div>
          <div className="recipe-directions">
            {recipe.recipe[0].directions}
          </div>
          
        </div>

      </div>

      <div className="right-column">
      </div>

    </div>
  </div>
);

export default RecipeView;