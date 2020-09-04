import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  menuShadowHide,
  menuShadowShow
} from '../../../../../store/menu/actions';
// TO DO: this menu data needs to also come dynamically from content types
import fitnessMenuData from './data/fitnessMenuData';
import foodMenuData from './data/foodMenuData';
import supplyMenuData from './data/supplyMenuData';
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

      <span
        className="site-nav__anchor"
        data-test="food-area"
        onMouseEnter={() => handleMouseEnter('Food')}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="site-nav__link" to="/page/guide/food">Food</Link>
        {
          (expanded && expandedDropdown === 'Food')
          ? <Menu menuItems={foodMenuData} /> : false
        }
      </span>

      <span
        className="site-nav__anchor"
        data-test="fitness-area"
        onMouseEnter={() => handleMouseEnter('Fitness')}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="site-nav__link" to="/page/guide/fitness">Fitness</Link>
        {
          (expanded && expandedDropdown === 'Fitness')
          ? <Menu menuItems={fitnessMenuData} /> : false
        }
      </span>

      <span
        className="site-nav__anchor"
        data-test="supply-area"
        onMouseEnter={() => handleMouseEnter('Supply')}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="site-nav__link" to="/store/storefront">Supply</Link>
        {
          (expanded && expandedDropdown === 'Supply')
          ? <Menu menuItems={supplyMenuData} /> : false
        }
      </span>
      
    </div>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapDispatchToProps = {
  menuShadowHide: () => menuShadowHide(),
  menuShadowShow: () => menuShadowShow()
};

const connector = connect(null, mapDispatchToProps);

export default connector(SiteNav);