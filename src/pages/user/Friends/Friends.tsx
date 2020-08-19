import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IFriendship } from '../../../store/data/types';
import {
  userAcceptFriendship,
  userBlockUser,
  userDeleteFriendship,
  userRejectFriendship,
  userRequestFriendship,
  userUnblockUser
} from '../../../store/user/friendship/actions';
import { FriendsView } from './FriendsView';

export function Friends({
  authname,
  dataMyFriendships,
  message,
  twoColumnATheme,
  userAcceptFriendship,
  userBlockUser,
  userDeleteFriendship,
  userRejectFriendship,
  userRequestFriendship,
  userUnblockUser
}: Props): JSX.Element {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("accepted");
  const [ userToFind, setUsertoFind ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleAcceptClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userAcceptFriendship((e.target as HTMLInputElement).value);
  };

  const handleBlockClick = () => {
    if (loading) return;
    if (!validateUserToFind()) return;
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userBlockUser(friendName);
    setUsertoFind("");
  };

  const handleDeleteClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userDeleteFriendship((e.target as HTMLInputElement).value);
  };

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setUsertoFind((e.target as HTMLInputElement).value);
  };

  const handleRejectClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userRejectFriendship((e.target as HTMLInputElement).value);
  };

  const handleRequestClick = () => {
    if (loading) return;
    if (!validateUserToFind()) return;
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userRequestFriendship(friendName);
    setUsertoFind("");
  };

  const handleTabChange = (value: string) => setTab(value);

  const handleUnblockClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userUnblockUser((e.target as HTMLInputElement).value);
  };

  const validateUserToFind = () => (userToFind.trim()).length > 1;

  return (
    <FriendsView
      dataMyFriendships={dataMyFriendships}
      feedback={feedback}
      handleAcceptClick={handleAcceptClick}
      handleBlockClick={handleBlockClick}
      handleDeleteClick={handleDeleteClick}
      handleInputChange={handleInputChange}
      handleRejectClick={handleRejectClick}
      handleRequestClick={handleRequestClick}
      handleTabChange={handleTabChange}
      handleUnblockClick={handleUnblockClick}
      loading={loading}
      tab={tab}
      twoColumnATheme={twoColumnATheme}
      userToFind={userToFind}
    />
  );
};

interface RootState {
  auth: {
    authname: string;
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
  twoColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  dataMyFriendships: state.data.myFriendships,
  message: state.user.message
});

const mapDispatchToProps = {
  userAcceptFriendship: (friendName: string) => userAcceptFriendship(friendName),
  userBlockUser: (friendName: string) => userBlockUser(friendName),
  userDeleteFriendship: (friendName: string) => userDeleteFriendship(friendName),
  userRejectFriendship: (friendName: string) => userRejectFriendship(friendName),
  userRequestFriendship: (friendName: string) => userRequestFriendship(friendName),
  userUnblockUser: (friendName: string) => userUnblockUser(friendName)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Friends);