import React from 'react';

export function SubtabsView({ subTab, handleSubTabClick }: Props): JSX.Element {
  const SubtabButton = ({ subTabName, displayText }: SubtabButtonProps) => (
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
}

type Props = {
  subTab: string;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
};

type SubtabButtonProps = {
  subTabName: string;
  displayText: string;
};