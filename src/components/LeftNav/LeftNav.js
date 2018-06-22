import React, { Component } from 'react';

import { Styles, LeftNavLink } from './Styles';

// TO DO HERE: some logic to switch up the current link

class LeftNav extends Component {
  render() {
    return (
      <Styles>
        <LeftNavLink to="/"><span>Username</span></LeftNavLink>
        <LeftNavLink to="/planner"><span id="planner_span">Your Plan</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span id="home_span">New</span></LeftNavLink>
        <LeftNavLink to="/messenger"><span id="messenger_span">Messages</span></LeftNavLink>
        <LeftNavLink to="/"><span>Friends</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/content/supplements"><span id="supplements_span">Supplements</span></LeftNavLink>
        <LeftNavLink to="/"><span>Equipment</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span>Water Filtration</span></LeftNavLink>
        <LeftNavLink to="/"><span>Tea</span></LeftNavLink>
        <LeftNavLink to="/"><span>Coffee</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span>Outdoors</span></LeftNavLink>
        <LeftNavLink to="/"><span>Garden</span></LeftNavLink>
        <LeftNavLink to="/"><span>Tools</span></LeftNavLink>
        <LeftNavLink to="/"><span>Weapons</span></LeftNavLink>
        <LeftNavLink to="/"><span>Finances</span></LeftNavLink>
        <LeftNavLink to="/"><span>Security</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span>Contest Winners</span></LeftNavLink>
        <LeftNavLink to="/"><span>Food for Fall</span></LeftNavLink>
        <LeftNavLink to="/"><span>Add a Recipe</span></LeftNavLink>
        <hr />
        <LeftNavLink to="/"><span>Charity</span></LeftNavLink>
      </Styles>
    );
  }
}

export default LeftNav;