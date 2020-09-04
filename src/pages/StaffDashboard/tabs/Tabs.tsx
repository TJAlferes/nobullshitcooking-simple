import React from 'react';

export function Tabs({ handleTabClick, tab }: Props): JSX.Element {
  const TabButton = ({ displayText, tabName }: TabButtonProps) => (
    <button
      className={
        tab === tabName
        ? "staff-dashboard-tab active"
        : "staff-dashboard-tab inactive"
      }
      name={tabName}
      onClick={e => handleTabClick(e)}
    >
      {displayText}
    </button>
  );

  return (
    <div className="staff-dashboard-tabs">
      <TabButton displayText="Content" tabName="content" />
      <TabButton displayText="Recipes" tabName="recipes" />
      <TabButton displayText="Ingredients" tabName="ingredients" />
      <TabButton displayText="Equipment" tabName="equipment" />
    </div>
  );
}

type Props = {
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  tab: string;
};

type TabButtonProps = {
  displayText: string;
  tabName: string;
};