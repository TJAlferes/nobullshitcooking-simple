import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { menuShadowShow, menuShadowHide } from '../../../../store/actions/index';

import Menu from './Menu/Menu';
import foodMenuData from './Menu/foodMenuData';
import fitnessMenuData from './Menu/fitnessMenuData';
//import supplyMenuData from './Menu/supplyMenuData';

import './siteNav.css';

export class SiteNav extends Component {
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

    return (
      <div className="site-nav">

        <li
          onMouseEnter={() => this.handleMouseEnter('Food')}
          onMouseLeave={this.handleMouseLeave}
          data-test="food-area"
        >
          <Link className="site-nav-link" to="/food">Food</Link>
          {
            (expanded && expandedDropdown === 'Food')
            ? <Menu menuData={foodMenuData} submenuDirection="right" />
            : false
          }
        </li>

        <li
          onMouseEnter={() => this.handleMouseEnter('Fitness')}
          onMouseLeave={this.handleMouseLeave}
          data-test="fitness-area"
        >
          <Link className="site-nav-link" to="/fitness">Fitness</Link>
          {
            (expanded && expandedDropdown === 'Fitness')
            ? <Menu menuData={fitnessMenuData} submenuDirection="right" />
            : false
          }
        </li>

        {/*<li onMouseEnter={() => this.handleMouseEnter('Supply')} onMouseLeave={this.handleMouseLeave}>
          <Link className="site-nav-link" to="/store/storefront">Supply</Link>
          {
            (expanded && expandedDropdown === 'Supply')
            ? <Menu menuData={supplyMenuData} submenuDirection="right" />
            : false
          }
        </li>
        <li>
          <Link className="site-nav-link" to="/site/welcome">New? Start Here</Link>
        </li>*/}
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  menuShadowShow: () => dispatch(menuShadowShow()),
  menuShadowHide: () => dispatch(menuShadowHide())
});

export default connect(null, mapDispatchToProps)(SiteNav);