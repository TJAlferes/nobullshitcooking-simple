import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { IWorkRecipe } from '../../store/data/types';
import { userFavoriteRecipe } from '../../store/user/favorite/actions';
import { userSaveRecipe } from '../../store/user/save/actions';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { RecipeView } from './RecipeView';

const endpoint = NOBSCBackendAPIEndpointOne;

export function Recipe({
  twoColumnBTheme,
  userIsAuthenticated,
  message,
  dataMyPublicRecipes,
  dataMyPrivateRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  userFavoriteRecipe,
  userSaveRecipe
}: Props): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ favoriteClicked, setFavoriteClicked ] = useState(false);
  const [ saveClicked, setSaveClicked ] = useState(false);
  const [ recipe, setRecipe ] = useState<IRecipe>();

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
    .match(/^(\/user-recipe\/([1-9][0-9]*))$/);
    
    if (isPrivateUserRecipe) getPrivateRecipe(Number(id));
    else getPublicRecipe(Number(id));
  }, []);

  const handleFavoriteClick = () => {
    if (!userIsAuthenticated) return;
    if (favoriteClicked) return;
    setFavoriteClicked(true);
    setLoading(true);
    userFavoriteRecipe(Number(id));
  };

  const handleSaveClick = () => {
    if (!userIsAuthenticated) return;
    if (saveClicked) return;
    setSaveClicked(true);
    setLoading(true);
    userSaveRecipe(Number(id));
  };

  return !recipe
  ? <LoaderSpinner />
  : (
    <RecipeView
      twoColumnBTheme={twoColumnBTheme}
      userIsAuthenticated={userIsAuthenticated}
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

export interface IRecipe {
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
  required_methods: IRequiredMethod[]
  required_equipment: IRequiredEquipment[]
  required_ingredients: IRequiredIngredient[]
  required_subrecipes: IRequiredSubrecipe[]
}

interface IRequiredMethod {
  method_name: string
}

interface IRequiredEquipment {
  amount: number
  equipment_name: string
}

interface IRequiredIngredient {
  amount: number
  measurement_name: string
  ingredient_name: string
}

interface IRequiredSubrecipe {
  amount: number
  measurement_name: string
  subrecipe_title: string
}

interface RootState {
  data: {
    myPublicRecipes: IWorkRecipe[];
    myPrivateRecipes: IWorkRecipe[];
    myFavoriteRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
  };
  auth: {
    userIsAuthenticated: boolean;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

/*type Props = RouteComponentProps & PropsFromRedux & {
  twoColumnBTheme: string;
};*/
type Props = PropsFromRedux & {
  twoColumnBTheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  userIsAuthenticated: state.auth.userIsAuthenticated,
  message: state.user.message
});

const mapDispatchToProps = {
  userFavoriteRecipe: (id: number) => userFavoriteRecipe(id),
  userSaveRecipe: (id: number) => userSaveRecipe(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Recipe);