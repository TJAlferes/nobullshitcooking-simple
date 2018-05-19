import React, { Component } from 'react';

import { Styles, LeftNavLink } from './Styles';

// TO DO HERE: some logic to switch up the current link

class LeftNav extends Component {
  render() {
    return (
      <Styles>
        <span>Username</span>
        <LeftNavLink to="/planner"><span id="planner_span">Your Plan</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span>New</span></LeftNavLink>
        <span>Messages</span>
        <span>Friends</span>
        <hr />
        <LeftNavLink to="/content/supplements"><span>Supplements</span></LeftNavLink>
        <span>Equipment</span>
        <hr />
        <span>Water Filtration</span>
        <span>Tea</span>
        <span>Cofee</span>
        <span>Alcohol</span>
        <span>Tobacco</span>
        <hr />
        <span>Outdoors</span>
        <span>Garden</span>
        <span>Weapons</span>
        <span>Finances</span>
        <span>Security</span>
        <hr />
        <span>Contest Winners</span>
        <span>Food for Fall</span>
        <span>Add a Recipe</span>
        <hr />
        <span>Charity</span>
      </Styles>
    );
  }
}

export default LeftNav;