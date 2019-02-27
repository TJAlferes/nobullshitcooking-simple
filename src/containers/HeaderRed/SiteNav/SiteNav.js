import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux';
// react aria modal OR just css OR css and react?

//import { openModal, closeModal } from '../../../store/actions/modalsActions';
//import FoodDropdown from './FoodDropdown/FoodDropdown';

//import Dropdown from './Dropdown/Dropdown';
import Menu from './Menu/Menu';
import foodMenuData from './FoodDropdown/foodMenuData';
import fitnessMenuData from './FoodDropdown/fitnessMenuData';
import supplyMenuData from './FoodDropdown/supplyMenuData';
import './siteNav.css';

class SiteNav extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();  // ...what?
    this.state = {
      expanded: false,
      expandedDropdown: "none"
    };
  }

  handleMouseEnter = dropdown => {
    const { expandedDropdown } = this.state;
    if (dropdown === expandedDropdown) return;
    this.setState({expanded: true, expandedDropdown: dropdown});
    /*if (dropdown === expandedDropdown) {
      this.setState({expanded: false, expandedDropdown: "none"});
    } else {
      this.setState({expanded: true, expandedDropdown: dropdown});
    }*/
  }

  handleMouseLeave = () => {
    this.setState({expanded: false, expandedDropdown: "none"});
  }

  render() {
    const { expanded, expandedDropdown } = this.state;
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

export default SiteNav;