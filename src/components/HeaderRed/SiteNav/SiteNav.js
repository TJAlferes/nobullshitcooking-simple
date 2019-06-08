import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './Menu/Menu';
import foodMenuData from './Menu/foodMenuData';
import fitnessMenuData from './Menu/fitnessMenuData';
import supplyMenuData from './Menu/supplyMenuData';
import { menuShadowShow, menuShadowHide } from '../../../store/actions/index';
import './siteNav.css';

class SiteNav extends Component {
  state = {expanded: false, expandedDropdown: "none"};

  handleMouseEnter = dropdown => {
    const { expandedDropdown } = this.state;
    if (dropdown === expandedDropdown) return;
    this.setState({expanded: true, expandedDropdown: dropdown});
    this.props.menuShadowShow();
  }

  handleMouseLeave = () => {
    this.setState({expanded: false, expandedDropdown: "none"});
    this.props.menuShadowHide();
  }

  render() {
    const { expanded, expandedDropdown } = this.state;
    let { theme } = this.props;
    return (
      <div className="site_nav">
        <li onMouseEnter={() => this.handleMouseEnter('Food')} onMouseLeave={this.handleMouseLeave}>
          <NavLink className="styled_nav_link" to="/food">Food</NavLink>
          {
            (expanded && expandedDropdown === 'Food')
            ? <Menu menuData={foodMenuData} submenuDirection="right" />
            : false
          }
        </li>
        <li onMouseEnter={() => this.handleMouseEnter('Fitness')} onMouseLeave={this.handleMouseLeave}>
          <NavLink className="styled_nav_link" to="/fitness">Fitness</NavLink>
          {
            (expanded && expandedDropdown === 'Fitness')
            ? <Menu menuData={fitnessMenuData} submenuDirection="right" />
            : false
          }
        </li>
        <li onMouseEnter={() => this.handleMouseEnter('Supply')} onMouseLeave={this.handleMouseLeave}>
          <NavLink className="styled_nav_link" to="/store/storefront">Supply</NavLink>
          {
            (expanded && expandedDropdown === 'Supply')
            ? <Menu menuData={supplyMenuData} submenuDirection="right" />
            : false
          }
        </li>
        <li>
          <NavLink className="styled_nav_link" to="/welcome">New? Start Here</NavLink>
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
}

const mapDispatchToProps = dispatch => ({
  menuShadowShow: () => dispatch(menuShadowShow()),
  menuShadowHide: () => dispatch(menuShadowHide())
});

export default connect(null, mapDispatchToProps)(SiteNav);