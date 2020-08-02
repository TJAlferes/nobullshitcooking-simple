import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { IFriendship } from '../../store/data/types';
import { userRequestFriendship } from '../../store/user/friendship/actions';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { ProfileView } from './ProfileView';

const endpoint = NOBSCBackendAPIEndpointOne;

export function Profile({
  authname,
  dataMyFriendships,
  isAuthenticated,
  message,
  oneColumnATheme,
  userRequestFriendship
}: Props): JSX.Element {
  const history = useHistory();
  const { username } = useParams();

  const [ clicked, setClicked ] = useState(false);
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("public");
  const [ userAvatar, setUserAvatar ] = useState("nobsc-user-default");
  const [ userFavoriteRecipes, setUserFavoriteRecipes ]= useState([]);
  const [ userPublicRecipes, setUserPublicRecipes ]= useState([]);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
    }

    return () => {
      isSubscribed = false;
    };
  }, [message]);

  useEffect(() => {
    if (!username) {
      history.push('/home');
      return;
    }

    if ((username.length < 6) || (username.length > 20)) {
      history.push('/home');
      return;
    }

    // TO DO: WHAT HAPPENS IF THE USER IS NOT FOUND?

    const getUserProfile = async (username: string) => {
      const trimmed = username.trim();  // already done?
      const res = await axios.get(`${endpoint}/user/profile/${trimmed}`);

      if (res.data.avatar !== "nobsc-user-default") setUserAvatar(trimmed);  // change, use avatar from server
      setUserFavoriteRecipes(res.data.favoriteRecipes);
      setUserPublicRecipes(res.data.publicRecipes);
    };

    getUserProfile(username);
  }, []);

  const handleFriendRequestClick = () => {
    if (!username) return;
    setClicked(true);
    setLoading(true);
    userRequestFriendship(username);
  };

  const handleTabChange = (value: string) => setTab(value);

  return !username
  ? <LoaderSpinner />
  : (
    <ProfileView
      authname={authname}
      clicked={clicked}
      dataMyFriendships={dataMyFriendships}
      feedback={feedback}
      handleFriendRequestClick={handleFriendRequestClick}
      handleTabChange={handleTabChange}
      isAuthenticated={isAuthenticated}
      loading={loading}
      oneColumnATheme={oneColumnATheme}
      tab={tab}
      userAvatar={userAvatar}
      username={username}
      userPublicRecipes={userPublicRecipes}
      userFavoriteRecipes={userFavoriteRecipes}
    />
  );
};

interface RootState {
  auth: {
    authname: string;
    isAuthenticated: boolean;
  };
  data: {
    myFriendships: IFriendship[];
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  dataMyFriendships: state.data.myFriendships,
  isAuthenticated: state.auth.isAuthenticated,
  message: state.user.message
});

const mapDispatchToProps = {
  userRequestFriendship: (friendName: string) =>
    userRequestFriendship(friendName)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);