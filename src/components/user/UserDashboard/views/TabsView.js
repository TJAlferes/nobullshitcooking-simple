import React from 'react';

const TabsView = ({ tab, handleTabClick }) => (
  <div className="dashboard-menu-tabs">
    {/*
      <button
        className="dashboard-menu-tab"
        name="notifications"
        onClick={handleTabClick}
      >
        Notifications
      </button>
    */}
    <button
      className={(tab === "plans")
        ? "dashboard-menu-tab active"
        : "dashboard-menu-tab inactive"
      }
      name="plans"
      onClick={e => handleTabClick(e)}
    >
      Plans
    </button>
    <button
      className={(tab === "recipes")
        ? "dashboard-menu-tab active"
        : "dashboard-menu-tab inactive"
      }
      name="recipes"
      onClick={e => handleTabClick(e)}
    >
      Recipes
    </button>
    <button
      className={(tab === "ingredients")
        ? "dashboard-menu-tab active"
        : "dashboard-menu-tab inactive"
      }
      name="ingredients"
      onClick={e => handleTabClick(e)}
    >
      Ingredients
    </button>
    <button
      className={(tab === "equipment")
        ? "dashboard-menu-tab active"
        : "dashboard-menu-tab inactive"
      }
      name="equipment"
      onClick={e => handleTabClick(e)}
    >
      Equipment
    </button>
  </div>
);

export default TabsView;