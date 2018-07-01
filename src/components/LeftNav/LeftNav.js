import React, { Component } from 'react';

import { Styles, LeftNavLink } from './Styles';

const LeftNav = props => {
  const { isAuthenticated, getUser, userEmail } = props;
  return (
    <Styles>
      {
        !isAuthenticated
        ? <LeftNavLink to="/user/login"><span>Dashboard</span></LeftNavLink>
        : <LeftNavLink to="/user/dashboard"><span>{userEmail}</span></LeftNavLink>
      }
      {
        !isAuthenticated
        ? <LeftNavLink to="/planner"><span id="planner_span">Planner</span></LeftNavLink>
        : <LeftNavLink to="/user/planner"><span id="planner_span">Planner</span></LeftNavLink>
      }
      <hr />

      <LeftNavLink to="/"><span id="home_span">News</span></LeftNavLink>
      {
        !isAuthenticated
        ? <LeftNavLink to="/user/login"><span>Messenger</span></LeftNavLink>
        : <LeftNavLink to="/messenger"><span id="messenger_span">Messenger</span></LeftNavLink>
      }
      {
        !isAuthenticated
        ? <LeftNavLink to="/user/login"><span>Friends</span></LeftNavLink>
        : <LeftNavLink to="/user/friends"><span>Friends</span></LeftNavLink>
      }
      <hr />

      <LeftNavLink to="/supplements"><span id="supplements_span">Supplements</span></LeftNavLink>
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
      <LeftNavLink to="/"><span>Food for Summer</span></LeftNavLink>
      <LeftNavLink to="/"><span>Add a Recipe</span></LeftNavLink>
      <hr />

      <LeftNavLink to="/"><span>Charity</span></LeftNavLink>
    </Styles>
  );
}

export default LeftNav;