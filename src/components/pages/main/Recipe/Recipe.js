import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
  const [ recipe, setRecipe ] = useState({});

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
    //if (!id) Redirect them to Recipes
    const localRecipe = (
      props.dataRecipes.find(rec => rec.recipe_id === id) ||
      props.dataMyPrivateRecipes && props.dataMyPrivateRecipes.find(rec => rec.recipe_id === id)
    );
    if (localRecipe) {
      setRecipe(localRecipe);
    } else {
      getPublicRecipe(id);
    }
  }, []);

  const getPublicRecipe = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/user/recipe/public/${id}`);
      if (res.data.success === true) {
        setRecipe(res.data);
      } else {
        //Redirect them to Recipes
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleFavoriteClick = () => {
    const { id } = props.match.params;
    setLoading(true);
    try {
      props.userFavoriteRecipe(id);
    } catch(err) {
      console.log(err);
    } finally {
      setFavoriteClicked(true);
      setLoading(false);
    }
  };

  const handleSaveClick = () => {
    const { id } = props.match.params;
    setLoading(true);
    try {
      props.userSaveRecipe(id);
    } catch(err) {
      console.log(err);
    } finally {
      setSaveClicked(true);
      setLoading(false);
    }
  };

  return (
    <div className="view-recipe">
      <div>
        {
          (Object.keys(recipe).length > 1) &&
          <RecipeBreadcrumbs recipe={recipe} />
        }
      </div>

      <div className="recipe">
        <div className="title"><h1>{recipe.title}</h1></div>

        <p className="error-message">{message}</p>

        <div className="favorite-save-outer">
          {
            (
              props.isAuthenticated &&
              !props.dataMyPrivateRecipes.find(props.match.params.id) &&
              !props.dataMyPublicRecipes.find(props.match.params.id)
            )
            ? (
              props.dataMyFavoriteRecipes.find(rec => rec.recipe_id === props.match.params.id)
              ? <span>Favorited</span>
              : (
                !favoriteClicked ? <button onClick={handleFavoriteClick} disabled={loading}>Favorite</button>
                : <span>Favorited</span>
              )
            )
            : false
          }

          {
            (
              props.isAuthenticated &&
              !props.dataMyPrivateRecipes.find(props.match.params.id) &&
              !props.dataMyPublicRecipes.find(props.match.params.id)
            )
            ? (
              props.dataMySavedRecipes.find(rec => rec.recipe_id === props.match.params.id)
              ? <span>Saved</span>
              : (
                !saveClicked ? <button onClick={handleSaveClick} disabled={loading}>Save</button>
                : <span>Saved</span>
              )
            )
            : false
          }
        </div>

        <div className="recipe-image">
          <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}`} />
        </div>

        <div className="recipe-type-name">{recipe.recipe_type_name}</div>

        <div className="cuisine-name">{recipe.cuisine_name}</div>

        <div className="description">{recipe.description}</div>

        <div className="required-equipment">
          {recipe.required_equipment && recipe.required_equipment.map(equ => (
            <div key={equ.key}>{equ.amount}{' '}{equ.equipment}</div>
          ))}
        </div>

        <div className="required-ingredients">
          {recipe.required_ingredients && recipe.required_ingredients.map(ing => (
            <div key={ing.key}>{ing.amount}{ing.unit}{' '}{ing.ingredient}</div>
          ))}
        </div>

        <div className="required-subrecipes">
          {recipe.required_subrecipes && recipe.required_subrecipes.map(rec => (
            <div key={rec.key}>{rec.amount}{rec.unit}{' '}{rec.subrecipe}</div>
          ))}
        </div>

        <div className="directions">{recipe.directions}</div>

        <div className="equipment-image">
          <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.equipment_image}`} />
        </div>

        <div className="ingredients-image">
          <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.ingredients_image}`} />
        </div>

        <div className="cooking-image">
          <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.cooking_image}`} />
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

const mapDispatchToProps = state => ({
  userFavoriteRecipe: id => dispatch(userFavoriteRecipe(id)),
  userSaveRecipe: id => dispatch(userSaveRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);