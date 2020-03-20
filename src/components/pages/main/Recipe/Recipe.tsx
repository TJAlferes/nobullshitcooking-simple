import React, { useEffect, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import axios from 'axios';

import { userFavoriteRecipe } from '../../../../store/user/favorite/actions';
import { userSaveRecipe } from '../../../../store/user/save/actions';

import LoaderSpinner from '../../../LoaderSpinner/LoaderSpinner';
import RecipeView from './RecipeView';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export interface RecipeInterface {
  recipe_id: number
  recipe_type_id: number
  cuisine_id: number
  author_id: number
  owner_id: number
  title: string
  recipe_type_name: string
  cuisine_name: string
  author: string
  author_avatar: string
  description: string
  directions: string
  recipe_image: string
  equipment_image: string
  ingredients_image: string
  cooking_image: string
  required_methods: RequiredMethod[]
  required_equipment: RequiredEquipment[]
  required_ingredients: RequiredIngredient[]
  required_subrecipes: RequiredSubrecipe[]
}

export interface RequiredMethod {
  method_name: string
}

export interface RequiredEquipment {
  amount: number
  equipment_name: string
}

export interface RequiredIngredient {
  amount: number
  measurement_name: string
  ingredient_name: string
}

export interface RequiredSubrecipe {
  amount: number
  measurement_name: string
  subrecipe_title: string
}

export function Recipe({
  match,
  twoColumnBTheme,
  isAuthenticated,
  message,
  //dataRecipes,
  dataMyPublicRecipes,
  dataMyPrivateRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  userFavoriteRecipe,
  userSaveRecipe
}: InferProps<typeof Recipe.propTypes>): JSX.Element {
  const history = useHistory();
  const location = useLocation();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ favoriteClicked, setFavoriteClicked ] = useState(false);
  const [ saveClicked, setSaveClicked ] = useState(false);
  const [ recipe, setRecipe ] = useState<RecipeInterface>();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0, 0);
      setFeedback(message);
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  useEffect(() => {
    const { id } = match.params;
    
    if (!id) {
      history.push('/home');
      return;
    }

    const getPrivateRecipe = async (id: number) => {
      const res = await axios.post(
        `${endpoint}/user/recipe/private/one`,
        {recipeId: id},
        {withCredentials: true}
      );
      if (res.data) setRecipe(res.data);
    };

    const getPublicRecipe = async (id: number) => {
      const res = await axios.get(`${endpoint}/recipe/${id}`);
      if (res.data) setRecipe(res.data);
    };

    let isPrivateUserRecipe = location.pathname
    .match(/^(\/user-recipes\/([1-9][0-9]*))$/);
    
    if (isPrivateUserRecipe) getPrivateRecipe(Number(id));
    else getPublicRecipe(Number(id));
  }, []);

  const handleFavoriteClick = () => {
    const { id } = match.params;
    setLoading(true);
    userFavoriteRecipe(Number(id));
    setFavoriteClicked(true);
  };

  const handleSaveClick = () => {
    const { id } = match.params;
    setLoading(true);
    userSaveRecipe(Number(id));
    setSaveClicked(true);
  };

  return !recipe
  ? <LoaderSpinner />
  : (
    <RecipeView
      match={match}
      twoColumnBTheme={twoColumnBTheme}
      isAuthenticated={isAuthenticated}
      feedback={feedback}
      loading={loading}

      recipe={recipe}

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

Recipe.propTypes = {
  match: PropTypes.object.isRequired,
  twoColumnBTheme: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  //dataRecipes,
  dataMyPublicRecipes: PropTypes.array.isRequired,
  dataMyPrivateRecipes: PropTypes.array.isRequired,
  dataMyFavoriteRecipes: PropTypes.array.isRequired,
  dataMySavedRecipes: PropTypes.array.isRequired,
  userFavoriteRecipe: PropTypes.func.isRequired,
  userSaveRecipe: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  //dataRecipes: state.data.recipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  isAuthenticated: state.auth.isAuthenticated,
  message: state.user.message
});

const mapDispatchToProps = dispatch => ({
  userFavoriteRecipe: (id: number) => dispatch(userFavoriteRecipe(id)),
  userSaveRecipe: (id: number) => dispatch(userSaveRecipe(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));