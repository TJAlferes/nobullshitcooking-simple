import React from 'react';

const SubtabsView = ({ subTab, handleSubTabClick }) => {
  const SubtabButton = ({ subTabName, displayText }) => (
    <button
      className={(subTab === subTabName)
        ? "dashboard-menu-subtab active"
        : "dashboard-menu-subtab inactive"
      }
      name={subTabName}
      onClick={e => handleSubTabClick(e)}
    >
      {displayText}
    </button>
  );

  return (
    <div className="dashboard-menu-subtabs">
      <SubtabButton subTabName="private" displayText="Private" />
      <SubtabButton subTabName="public" displayText="Public" />
      <SubtabButton subTabName="favorite" displayText="Favorite" />
      <SubtabButton subTabName="saved" displayText="Saved" />
    </div>
  );
};

export default SubtabsView;