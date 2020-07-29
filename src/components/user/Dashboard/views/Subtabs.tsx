import React from 'react';

export function Subtabs({ handleSubTabClick, subTab }: Props): JSX.Element {
  const SubtabButton = ({ displayText, subTabName }: SubtabButtonProps) => (
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
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  subTab: string;
};

type SubtabButtonProps = {
  displayText: string;
  subTabName: string;
};