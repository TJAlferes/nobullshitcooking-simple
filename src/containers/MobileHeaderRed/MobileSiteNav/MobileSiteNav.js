import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux';

//import { openModal, closeModal } from '../../../store/actions/modalsActions';
//import FoodDropdown from './FoodDropdown/FoodDropdown';
//import Dropdown from './Dropdown/Dropdown';
import './mobileSiteNav.css';

const MobileSiteNav = props => {
  //const { isAuthenticated } = props;

  return (
    <div className="mobile_site_nav">
      <li>
        <NavLink className="styled_nav_link" to="/food">Food</NavLink>
      </li>
      <li>
        <NavLink className="styled_nav_link" to="/fitness">Fitness</NavLink>
      </li>
      <li>
        <NavLink className="styled_nav_link" to="/store/storefront">
          Supply
        </NavLink>
      </li>
      {/*
        !isAuthenticated &&
        <li>
          <NavLink className="styled_nav_link" to="/user/dashboard">
            Member Area
          </NavLink>
        </li>
      */}
    </div>
  );
}

export default MobileSiteNav;