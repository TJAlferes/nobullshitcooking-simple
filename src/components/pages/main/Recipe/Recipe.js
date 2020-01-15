import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import {
  userFavoriteRecipe,
  userSaveRecipe
} from '../../../../store/actions/index';

import RecipeView from './RecipeView';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

export const Recipe = ({
  match,
  twoColumnBTheme,
  isAuthenticated,
  message,
  //dataRecipes,
  //dataPublicRecipes,
  dataMyPublicRecipes,
  dataMyPrivateRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  userFavoriteRecipe,
  userSaveRecipe
}) => {
  const history = useHistory();
  const location = useLocation();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ favoriteClicked, setFavoriteClicked ] = useState(false);  // Make sure they can't favorite their own recipes (whether public or private)
  const [ saveClicked, setSaveClicked ] = useState(false);  // Make sure they can't save their own recipes (whether public or private)
  const [ recipe, setRecipe ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
    }
    return () => isSubscribed = false;
  }, [message]);

  useEffect(() => {
    const { id } = match.params;
    if (!id) history.push('/home');

    const getPublicRecipe = async (id) => {
      try {
        const res = await axios.get(`${endpoint}/recipe/${id}`);
        if (res.data) setRecipe(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const getPrivateRecipe = async (id) => {
      try {
        const res = await axios.post(
          `${endpoint}/user/recipe/private/one`,
          {recipeId: id},
          {withCredentials: true}
        );
        if (res.data) setRecipe(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    let isPrivateUserRecipe = location.pathname
    .match(/^(\/user\/recipes\/([1-9][0-9]*))$/);
    
    if (isPrivateUserRecipe) {
      getPrivateRecipe(Number(id));
    } else {
      getPublicRecipe(Number(id));
    }
  }, []);

  const handleFavoriteClick = () => {
    const { id } = match.params;
    setLoading(true);
    try {
      userFavoriteRecipe(Number(id));
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setFavoriteClicked(true);
      setLoading(false);
    }
  };

  const handleSaveClick = () => {
    const { id } = match.params;
    setLoading(true);
    try {
      userSaveRecipe(Number(id));
    } catch(err) {
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
    <RecipeView
      match={match}
      twoColumnBTheme={twoColumnBTheme}
      isAuthenticated={isAuthenticated}
      feedback={feedback}
      loading={loading}

      recipe={recipe}

      recipeBy={recipeBy}

      dataMyPrivateRecipes={dataMyPrivateRecipes}
      dataMyPublicRecipes={dataMyPublicRecipes}
      dataMyFavoriteRecipes={dataMyFavoriteRecipes}
      dataMySavedRecipes={dataMySavedRecipes}

      favoriteClicked={favoriteClicked}
      handleFavoriteClick={handleFavoriteClick}
      saveClicked={saveClicked}
      handleSaveClick={handleSaveClick}
    />
  );
};

const mapStateToProps = state => ({
  //dataRecipes: state.data.recipes,
  //dataPublicRecipes: state.data.publicRecipes,
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