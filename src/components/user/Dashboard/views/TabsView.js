import React from 'react';

const TabsView = ({ tab, handleTabClick }) => {
  const TabButton = ({ tabName, displayText }) => (
    <button
      className={(tab === tabName)
        ? "dashboard-menu-tab active"
        : "dashboard-menu-tab inactive"
      }
      name={tabName}
      onClick={e => handleTabClick(e)}
    >
      {displayText}
    </button>
  );

  return (
    <div className="dashboard-menu-tabs">
      <TabButton tabName="avatar" displayText="Avatar" />
      <TabButton tabName="plans" displayText="Plans" />
      <TabButton tabName="recipes" displayText="Recipes" />
      <TabButton tabName="ingredients" displayText="Ingredients" />
      <TabButton tabName="equipment" displayText="Equipment" />
    </div>
  );
};

export default TabsView;