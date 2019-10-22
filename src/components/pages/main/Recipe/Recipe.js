import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import { userFavoriteRecipe, userSaveRecipe } from '../../../../store/actions/index';
import { RecipeBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './recipe.css';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const Recipe = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ favoriteClicked, setFavoriteClicked ] = useState(false);
  const [ saveClicked, setSaveClicked ] = useState(false);
  const [ recipe, setRecipe ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

  useEffect(() => {
    const { id } = props.match.params;
    if (!id) props.history.push('/home');
    const getPublicRecipe = async (id) => {
      try {
        const res = await axios.get(`${endpoint}/recipe/${id}`);
        if (res.data) setRecipe(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getPublicRecipe(Number(id));
  }, []);

  const handleFavoriteClick = () => {
    const { id } = props.match.params;
    setLoading(true);
    try {
      props.userFavoriteRecipe(Number(id));
    } catch(err) {
      console.log(err);
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setFavoriteClicked(true);
      setLoading(false);
    }
  };

  const handleSaveClick = () => {
    const { id } = props.match.params;
    setLoading(true);
    try {
      props.userSaveRecipe(Number(id));
    } catch(err) {
      console.log(err);
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setSaveClicked(true);
      setLoading(false);
    }
  };

  const recipeBy = () => {
    if (recipe.recipe[0].authorName === "Unknown") {
      return "Unknown";
    } else {
      return (
        <Link
          className="recipe-details__author-name"
          to={`/user/profile/${recipe.recipe[0].authorName}`}
        >
          {recipe.recipe[0].authorName}
        </Link>
      );
    }
  };

  return (
    <div className="recipe">
      {recipe && <div><RecipeBreadcrumbs recipe={recipe} /></div>}
      <div className={`view-recipe two-column-b ${props.twoColumnBTheme}`}>

        <div className="left-column">
          {recipe && recipe.recipe && (
            <div className="recipe-details">
              <div className="recipe-details__title">
                <h1>{recipe.recipe[0].title}</h1>
              </div>

              <p className="recipe-details__error-message">{message}</p>

              <div className="favorite-save-outer">
                {
                  (
                    props.isAuthenticated &&
                    !props.dataMyPrivateRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    ) &&
                    !props.dataMyPublicRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    )
                  )
                  ? (
                    props.dataMyFavoriteRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    )
                    ? <span>Favorited</span>
                    : (
                      !favoriteClicked ? (
                        <button onClick={handleFavoriteClick} disabled={loading}>
                          Favorite
                        </button>
                      )
                      : <span>Favorited</span>
                    )
                  )
                  : false
                }

                {
                  (
                    props.isAuthenticated &&
                    !props.dataMyPrivateRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    ) &&
                    !props.dataMyPublicRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    )
                  )
                  ? (
                    props.dataMySavedRecipes.find(
                      rec => rec.recipe_id == props.match.params.id
                    )
                    ? <span>Saved</span>
                    : (
                      !saveClicked ? (
                        <button onClick={handleSaveClick} disabled={loading}>
                          Save
                        </button>
                      )
                      : <span>Saved</span>
                    )
                  )
                  : false
                }
              </div>



              <div className="recipe-details__image">
                <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe[0].recipeImage}`} />
              </div>
              <div className="recipe-details__author">
                <b>Author:</b>{' '}{recipeBy()}
              </div>
              <div className="recipe-details__description">
                <b>Author's note:</b>{' '}<i>{`"${recipe.recipe[0].description}"`}</i>
              </div>
              <div className="recipe-details__cuisine">
                <b>Cuisine:</b>{' '}{recipe.recipe[0].cuisineName}
              </div>
              <div className="recipe-details__recipe-type">
                <b>Recipe type:</b>{' '}{recipe.recipe[0].recipeTypeName}
              </div>



              <h2 className="recipe-details__heading-two">Required Methods</h2>
              <div className="recipe-details__required-methods">
                {recipe.requiredMethods && recipe.requiredMethods.map(method => (
                  <div
                    className="recipe-details__required-method"
                    key={method.methodName}
                  >
                    {method.methodName}
                  </div>
                ))}
              </div>



              <h2 className="recipe-details__heading-two">Required Equipment</h2>
              <div className="recipe-details__equipment-image">
                <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.recipe[0].recipeEquipmentImage}`} />
              </div>
              <div className="recipe-details__required-equipments">
                {recipe.requiredEquipment && recipe.requiredEquipment.map(equ => (
                  <div
                    className="recipe-details__required-equipment"
                    key={equ.equipmentName}
                  >
                    {equ.amount}{' '}{equ.equipmentName}
                  </div>
                ))}
              </div>



              <h2 className="recipe-details__heading-two">Required Ingredients</h2>
              <div className="recipe-details__ingredients-image">
                <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.recipe[0].recipeIngredientsImage}`} />
              </div>
              <div className="recipe-details__required-ingredients">
                {recipe.requiredIngredients && recipe.requiredIngredients.map(ing => (
                  <div
                    className="recipe-details__required-ingredient"
                    key={ing.ingredientName}
                  >
                    {ing.amount}{' '}{ing.measurementName}{' '}{ing.ingredientName}
                  </div>
                ))}
              </div>



              <div className="recipe-details__required-subrecipes">
                {recipe.requiredSubrecipes.length > 0 && <h2>Required Subrecipes</h2>}
                {recipe.requiredSubrecipes.length > 0 && recipe.requiredSubrecipes.map(rec => (
                  <div
                    className="recipe-details__required-subrecipe"
                    key={rec.subrecipeTitle}
                  >
                    {rec.amount}{' '}{rec.measurementName}{' '}{rec.subrecipeTitle}
                  </div>
                ))}
              </div>



              <h2 className="recipe-details__heading-two">Directions</h2>
              <div className="recipe-details__cooking-image">
                <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.recipe[0].recipeCookingImage}`} />
              </div>
              <div className="recipe-details__directions">
                {recipe.recipe[0].directions}
              </div>
              
            </div>
          )}
        </div>

        <div className="right-column">
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataRecipes: state.data.recipes,
  dataPublicRecipes: state.data.publicRecipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  userFavoriteRecipe: id => dispatch(userFavoriteRecipe(id)),
  userSaveRecipe: id => dispatch(userSaveRecipe(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));