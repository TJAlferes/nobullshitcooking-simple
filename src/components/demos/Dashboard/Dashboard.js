import React, { useState } from 'react';

import './dashboard.css';
import LeftNav from '../../LeftNav/LeftNav';

//import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';

const Dashboard = props => {
  const [ tab, setTab ] = useState("notifications");

  /*useEffect(() => {
    const getNotifications = async () => {
      const res = await axios.post(`${NOBSCBackendAPIEndpointOne}`);
    };

    const getSavedRecipes = async () => {
      const res = await axios.post(`${NOBSCBackendAPIEndpointOne}`);
    };

    const getFavoritedRecipes = async () => {
      const res = await axios.post(`${NOBSCBackendAPIEndpointOne}`);
    };

    const getUserRecipes = async () => {
      const res = await axios.post(`${NOBSCBackendAPIEndpointOne}`);
    };

    getNotifications();
    getSavedRecipes();
    getFavoritedRecipes();
    getUserRecipes();
  }, []);*/

  const handleNotificationsTabClick = () => {
    setTab("notifications");
  };

  const handleSavedTabClick = () => {
    setTab("saved");
  };

  const handleFavoritedTabClick = () => {
    setTab("favorited");
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

        <h1>Dashboard</h1>

        <div className="dashboard-menu-tabs">
          <button
            className="dashboard-menu-tab"
            onClick={handleNotificationsTabClick}
          >
            Unread Notifications
          </button>
          <button
            className="dashboard-menu-tab"
            onClick={handleSavedTabClick}
          >
            Saved Recipes
          </button>
          <button
            className="dashboard-menu-tab"
            onClick={handleFavoritedTabClick}
          >
            Favorited Recipes
          </button>
          <button
            className="dashboard-menu-tab"
            onClick={handleUploadedTabClick}
          >
            Uploaded Recipes
          </button>
        </div>

        <div className="dashboard-content">
          {tab}
        </div>

      </section>

    </div>
  );
};

export default Dashboard;