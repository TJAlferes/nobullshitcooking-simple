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
import { IRecipe } from './types';

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