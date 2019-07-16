import React, { useState } from 'react';
import { connect } from 'react-redux';

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

        <span className="demo-only-notice">
          This page is for demonstration purposes only.
          To view an actual dashboard, please create an account.
        </span>

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
          </span>
        </div>

        <div className="dashboard-content">
          
        </div>

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname
})

export default connect(mapStateToProps)(UserDashboard);