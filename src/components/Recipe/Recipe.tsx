import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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
  dataMyFavoriteRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  message,
  twoColumnBTheme,
  userFavoriteRecipe,
  userIsAuthenticated,
  userSaveRecipe
}: Props): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const [ favoriteClicked, setFavoriteClicked ] = useState(false);
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ recipe, setRecipe ] = useState<IRecipe>();
  const [ saveClicked, setSaveClicked ] = useState(false);

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
        {id},
        {withCredentials: true}
      );
      if (res.data) setRecipe(res.data);
      //else TO DO (and on all other component fetches) (react query?)
    };

    const getPublicRecipe = async (id: number) => {
      const res = await axios.get(`${endpoint}/recipe/${id}`);
      if (res.data) setRecipe(res.data);
      //else TO DO
    };

    const isPrivateUserRecipe =
      location.pathname.match(/^(\/user-recipe\/([1-9][0-9]*))$/);
    
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
      dataMyFavoriteRecipes={dataMyFavoriteRecipes}
      dataMyPrivateRecipes={dataMyPrivateRecipes}
      dataMyPublicRecipes={dataMyPublicRecipes}
      dataMySavedRecipes={dataMySavedRecipes}
      favoriteClicked={favoriteClicked}
      feedback={feedback}
      handleFavoriteClick={handleFavoriteClick}
      handleSaveClick={handleSaveClick}
      loading={loading}
      recipe={recipe}
      saveClicked={saveClicked}
      twoColumnBTheme={twoColumnBTheme}
      userIsAuthenticated={userIsAuthenticated}
    />
  );
};

export interface IRecipe {
  id: number;
  recipe_type_id: number;
  cuisine_id: number;
  author_id: number;
  owner_id: number;
  title: string;
  recipe_type_name: string;
  cuisine_name: string;
  author: string;
  author_avatar: string;
  description: string;
  active_time: string;
  total_time: string;
  directions: string;
  recipe_image: string;
  equipment_image: string;
  ingredients_image: string;
  cooking_image: string;
  required_methods: IRequiredMethod[];
  required_equipment: IRequiredEquipment[];
  required_ingredients: IRequiredIngredient[];
  required_subrecipes: IRequiredSubrecipe[];
}

interface IRequiredMethod {
  method_name: string;
}

interface IRequiredEquipment {
  amount: number;
  equipment_name: string;
}

interface IRequiredIngredient {
  amount: number;
  measurement_name: string;
  ingredient_name: string;
}

interface IRequiredSubrecipe {
  amount: number;
  measurement_name: string;
  subrecipe_title: string;
}

interface RootState {
  auth: {
    userIsAuthenticated: boolean;
  };
  data: {
    myFavoriteRecipes: IWorkRecipe[];
    myPrivateRecipes: IWorkRecipe[];
    myPublicRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
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
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  message: state.user.message,
  userIsAuthenticated: state.auth.userIsAuthenticated
});

const mapDispatchToProps = {
  userFavoriteRecipe: (id: number) => userFavoriteRecipe(id),
  userSaveRecipe: (id: number) => userSaveRecipe(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Recipe);