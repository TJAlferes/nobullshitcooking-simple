import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LeftNav from '../../LeftNav/LeftNav';
//import './userDashboard.css';

const UserDashboard = props => {
  const [ tab, setTab ] = useState("notifications");

  const handleNotificationsTabClick = () => {
    setTab("notifications");
  };

  const handleSavedTabClick = () => {
    setTab("saved");
  };

  const handleFavoritesTabClick = () => {
    setTab("favorites");
  };

  const handleUploadedTabClick = () => {
    setTab("uploaded")
  };

  return (
    <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{props.authname}</h1>

        <div className="dashboard-menu-tabs">
          <span
            className="dashboard-menu-tab"
            onClick={handleNotificationsTabClick}
          >
            Unread Notifications
          </span>
          <span
            className="dashboard-menu-tab"
            onClick={handleSavedTabClick}
          >
            Saved Recipes
          </span>
          <span
            className="dashboard-menu-tab"
            onClick={handleFavoritesTabClick}
          >
            Favorite Recipes
          </span>
          <span
            className="dashboard-menu-tab"
            onClick={handleUploadedTabClick}
          >
            Uploaded Recipes
            <Link to="/user/recipes/submit">Create Recipe</Link>
          </span>
        </div>

        <div className="dashboard-content">
          {tab}
        </div>

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname
})

export default connect(mapStateToProps)(UserDashboard);