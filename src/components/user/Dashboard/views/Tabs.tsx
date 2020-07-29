import React from 'react';

export function Tabs({ handleTabClick, tab }: Props): JSX.Element {
  const TabButton = ({ displayText, tabName }: TabButtonProps) => (
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
}

type Props = {
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  tab: string;
};

type TabButtonProps = {
  displayText: string;
  tabName: string;
};