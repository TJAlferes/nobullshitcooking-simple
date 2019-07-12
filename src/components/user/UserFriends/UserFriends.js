import React, { useState, useEffect } from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import './userFriends.css';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';

const Flash = (timeout = 3000, message) => {
  if (message !== "") {
    setTimeout(() => {
      setFlashMessage("");
    }, timeout);
    return <span className="flash">{message}</span>
  }
  return false;
};

const UserFriends = props => {
  const [ flashMessage, setFlashMessage ] = useState("");
  const [ userToFind, setUsertoFind ] = useState("");
  const [ friends, setFriends ] = useState([]);
  const [ tab, setTab ] = useState("accepted");

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.post(`${NOBSCBackendAPIEndpointOne}/friendship`);
      setFriends(res.data);
    };
    getFriends();
  }, []);

  const handleFindUserInputChange = e => {
    const username = e.target.value;
    setUsertoFind(username);
  }

  const handleFriendRequestClick = async () => {
    const friendName = userToFind;
    const res = await axios.post(`${NOBSCBackendAPIEndpointOne}/friendship/create`, {friendName});
    setFlashMessage(res.data);
  };

  const handleUserBlockClick = async () => {
    const friendName = userToFind;
    const res = await axios.post(`${NOBSCBackendAPIEndpointOne}/friendship/block`, {friendName});
    setFlashMessage(res.data);
  };

  const handleCurrentTabClick = () => {
    setTab("accepted");
  }

  const handlePendingTabClick = () => {
    setTab("pending");
  }

  const handleBlockedTabClick = () => {
    setTab("blocked");
  }

  const handleFriendAcceptClick = async (e) => {
    const friendName = e.target.value;
    const res = await axios.post(`${NOBSCBackendAPIEndpointOne}/friendship/accept`, {friendName});
    setFlashMessage(res.data);
  };

  const handleFriendDeleteClick = async (e) => {
    const friendName = e.target.value;
    const res = await axios.post(`${NOBSCBackendAPIEndpointOne}/friendship/delete`, {friendName});
    setFlashMessage(res.data);
  };

  return (
    <div className={`friends two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>
        <Flash message={flashMessage} />

        <h1>Friends</h1>

        <div className="friends-find">
          <label htmlFor="friends-find-user">Username:</label>
          <input name="friends-find-user" value={userToFind} onChange={handleFindUserInputChange} />
          <span
            className="friends-find-action"
            onClick={handleFriendRequestClick}
          >
            Send Friend Request
          </span>
          <span
            className="friends-find-action"
            onClick={handleUserBlockClick}
          >
            Block User
          </span>
        </div>

        <div className="friends-list-menu-tabs">
          <span
            className="friends-list-menu-tab"
            onClick={handleCurrentTabClick}
          >
            Current
          </span>
          <span
            className="friends-list-menu-tab"
            onClick={handlePendingTabClick}
          >
            Pending
          </span>
          <span
            className="friends-list-menu-tab"
            onClick={handleBlockedTabClick}
          >
            Blocked
          </span>
        </div>

        <div className="friends-list">
          {
            friends
            .filter(friend => friend.status === tab)
            .map(friend => (
              <div className="friends-list-item">
                <span className="friends-list-item-avatar">
                  <img src={`https://AWS_S3_BUCKET/${friend.avatar}`} />
                </span>
                <span className="friends-list-item-username">
                  {friend.username}
                </span>
                {
                  (friend.status === "pending") &&
                  <span
                    className="friends-list-item-action"
                    onClick={handleFriendAcceptClick}
                  >
                    Accept
                  </span>
                }
                {
                  (friend.status === "pending") &&
                  <span
                    className="friends-list-item-action"
                    onClick={handleFriendDeleteClick}
                  >
                    Reject
                  </span>
                }
                {
                  (friend.status === "accepted") &&
                  <span
                    className="friends-list-item-action"
                    onClick={handleFriendDeleteClick}
                  >
                    Unfriend
                  </span>
                }
                {
                  (friend.status === "blocked") &&
                  <span
                    className="friends-list-item-action"
                    onClick={handleFriendDeleteClick}
                  >
                    Unblock
                  </span>
                }
              </div>
            ))
          }
        </div>
      </section>

    </div>
  );
};

export default UserFriends;