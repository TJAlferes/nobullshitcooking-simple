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
      <SubtabButton displayText="Private" subTabName="private" />
      <SubtabButton displayText="Public" subTabName="public" />
      <SubtabButton displayText="Favorite" subTabName="favorite" />
      <SubtabButton displayText="Saved" subTabName="saved" />
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