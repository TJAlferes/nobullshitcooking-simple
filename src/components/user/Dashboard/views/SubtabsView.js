import React from 'react';

const SubtabsView = ({ subTab, handleSubTabClick }) => (
  <div className="dashboard-menu-subtabs">
    <button
      className={(subTab === "private")
        ? "dashboard-menu-subtab active"
        : "dashboard-menu-subtab inactive"
      }
      name="private"
      onClick={e => handleSubTabClick(e)}
    >
      Private
    </button>
    <button
      className={(subTab === "public")
        ? "dashboard-menu-subtab active"
        : "dashboard-menu-subtab inactive"
      }
      name="public"
      onClick={e => handleSubTabClick(e)}
    >
      Public
    </button>
    <button
      className={(subTab === "favorite")
        ? "dashboard-menu-subtab active"
        : "dashboard-menu-subtab inactive"
      }
      name="favorite"
      onClick={e => handleSubTabClick(e)}
    >
      Favorite
    </button>
    <button
      className={(subTab === "saved")
        ? "dashboard-menu-subtab active"
        : "dashboard-menu-subtab inactive"
      }
      name="saved"
      onClick={e => handleSubTabClick(e)}
    >
      Saved
    </button>
  </div>
);

export default SubtabsView;