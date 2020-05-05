import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IFriendship } from '../../../store/data/types';
import {
  userRequestFriendship,
  userAcceptFriendship,
  userRejectFriendship,
  userDeleteFriendship,
  userBlockUser,
  userUnblockUser
} from '../../../store/user/friendship/actions';
import { FriendsView } from './FriendsView';

export function Friends({
  twoColumnATheme,
  message,
  authname,
  dataMyFriendships,
  userRequestFriendship,
  userAcceptFriendship,
  userRejectFriendship,
  userDeleteFriendship,
  userBlockUser,
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

  const handleTabChange = (value: string) => setTab(value);

  const handleFindUserInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setUsertoFind((e.target as HTMLInputElement).value);
  };

  const handleFriendRequestClick = () => {
    if (loading) return;
    if (!validateUserToFind()) return;
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userRequestFriendship(friendName);
    setUsertoFind("");
  };

  const handleFriendAcceptClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userAcceptFriendship((e.target as HTMLInputElement).value);
  };

  const handleFriendRejectClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userRejectFriendship((e.target as HTMLInputElement).value);
  };

  const handleFriendDeleteClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userDeleteFriendship((e.target as HTMLInputElement).value);
  };

  const handleUserBlockClick = () => {
    if (loading) return;
    if (!validateUserToFind()) return;
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userBlockUser(friendName);
    setUsertoFind("");
  };

  const handleUserUnblockClick = (e: React.SyntheticEvent<EventTarget>) => {
    setLoading(true);
    userUnblockUser((e.target as HTMLInputElement).value);
  };

  const validateUserToFind = () => {
    const friendName = userToFind.trim();
    return friendName.length > 1;
  };

  return (
    <FriendsView
      twoColumnATheme={twoColumnATheme}
      feedback={feedback}
      loading={loading}
      dataMyFriendships={dataMyFriendships}
      userToFind={userToFind}
      tab={tab}
      handleTabChange={handleTabChange}
      handleFindUserInputChange={handleFindUserInputChange}
      handleFriendRequestClick={handleFriendRequestClick}
      handleFriendAcceptClick={handleFriendAcceptClick}
      handleFriendRejectClick={handleFriendRejectClick}
      handleFriendDeleteClick={handleFriendDeleteClick}
      handleUserBlockClick={handleUserBlockClick}
      handleUserUnblockClick={handleUserUnblockClick}
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
  userRequestFriendship: (friendName: string) => userRequestFriendship(friendName),
  userAcceptFriendship: (friendName: string) => userAcceptFriendship(friendName),
  userRejectFriendship: (friendName: string) => userRejectFriendship(friendName),
  userDeleteFriendship: (friendName: string) => userDeleteFriendship(friendName),
  userBlockUser: (friendName: string) => userBlockUser(friendName),
  userUnblockUser: (friendName: string) => userUnblockUser(friendName)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Friends);