import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux';

//import { openModal, closeModal } from '../../../store/actions/modalsActions';
//import FoodDropdown from './FoodDropdown/FoodDropdown';
//import Dropdown from './Dropdown/Dropdown';
import './siteNav.css';

class SiteNav extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      expanded: false,
      expandedDropdown: "none"
    };
    //const { isAuthenticated } = props;
  }

  // TO DO: separate out dropdown, disable on mobile/tablets

  // be sure this is called only once!
  handleMouseOver = dropdown => {
    const { expandedDropdown } = this.state;
    if (dropdown === expandedDropdown) {
      this.setState({expanded: false, expandedDropdown: "none"});
    } else {
      this.setState({expanded: true, expandedDropdown: dropdown});
    }
  }

  render() {
    const { expanded, expandedDropdown } = this.state;
    return (
      <div className="site_nav">
        <li>
          <NavLink className="styled_nav_link" to="/food">Food</NavLink>
          {/*<FoodDropdown />*/}
          {/*<Dropdown
            onNavMouseOver={this.handleMouseOver}
            dropdown={'food'}
            expanded={expanded}
            expandedDropdown={expandedDropdown}
            content={'hello'}
          />*/}
          {/*<DropDown menuData={menuData} submenuDirection="right" />*/}
        </li>
        <li>
          <NavLink className="styled_nav_link" to="/fitness">Fitness</NavLink>
        </li>
        <li>
          <NavLink className="styled_nav_link" to="/store/storefront">
            Supply
          </NavLink>
        </li>
        <li>
          <NavLink className="styled_nav_link" to="/welcome">
            New? Start Here
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
}

export default SiteNav;