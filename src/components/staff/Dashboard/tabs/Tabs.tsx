import React from 'react';

export function Tabs({ tab, handleTabClick }: Props): JSX.Element {
  const TabButton = ({ tabName, displayText }: TabButtonProps) => (
    <button
      className={(tab === tabName)
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
      <TabButton tabName="content" displayText="Content" />
      <TabButton tabName="recipes" displayText="Recipes" />
      <TabButton tabName="ingredients" displayText="Ingredients" />
      <TabButton tabName="equipment" displayText="Equipment" />
    </div>
  );
}

type Props = {
  tab: string;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
};

type TabButtonProps = {
  tabName: string;
  displayText: string;
};