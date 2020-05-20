import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { menuShadowShow, menuShadowHide } from '../../../../store/menu/actions';
import fitnessMenuData from './data/fitnessMenuData';
import foodMenuData from './data/foodMenuData';
//import supplyMenuData from './data/supplyMenuData';
import Menu from './Menu/Menu';
import './siteNav.css';

export function SiteNav({
  menuShadowHide,
  menuShadowShow
}: Props): JSX.Element {
  const [ expanded, setExpanded ] = useState(false);
  const [ expandedDropdown, setExpandedDropdown ] = useState("none");

  const handleMouseEnter = (dropdown: string) => {
    if (dropdown === expandedDropdown) return;
    setExpanded(true);
    setExpandedDropdown(dropdown)
    menuShadowShow();
  };

  const handleMouseLeave = () => {
    setExpanded(false);
    setExpandedDropdown("none");
    menuShadowHide();
  };

  return (
    <div className="site-nav">

      <li
        onMouseEnter={() => handleMouseEnter('Food')}
        onMouseLeave={handleMouseLeave}
        data-test="food-area"
      >
        <Link className="site-nav-link" to="/food">Food</Link>
        {
          (expanded && expandedDropdown === 'Food')
          ? <Menu menuItems={foodMenuData} />
          : false
        }
      </li>

      <li
        onMouseEnter={() => handleMouseEnter('Fitness')}
        onMouseLeave={handleMouseLeave}
        data-test="fitness-area"
      >
        <Link className="site-nav-link" to="/fitness">Fitness</Link>
        {
          (expanded && expandedDropdown === 'Fitness')
          ? <Menu menuItems={fitnessMenuData} />
          : false
        }
      </li>

      {/*
      <li
        onMouseEnter={() => handleMouseEnter('Supply')}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="site-nav-link" to="/store/storefront">Supply</Link>
        {
          (expanded && expandedDropdown === 'Supply')
          ? <Menu menuItems={supplyMenuData} />
          : false
        }
      </li>
      <li>
        <Link className="site-nav-link" to="/site/welcome">New? Start Here</Link>
      </li>
      */}
      
    </div>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapDispatchToProps = {
  menuShadowHide: () => menuShadowHide(),
  menuShadowShow: () => menuShadowShow()
};

const connector = connect(null, mapDispatchToProps)

export default connector(SiteNav);