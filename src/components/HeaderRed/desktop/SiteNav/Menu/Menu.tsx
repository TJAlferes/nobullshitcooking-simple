import React, { useState, useLayoutEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { MenuView } from './MenuView';

/*
This Menu component heavily borrows from react-menu-aim
which is a React mixin heavily inspired by jQuery-menu-aim
All rights reserved by the original authors.
https://github.com/jasonslyvia/react-menu-aim
https://github.com/kamens/jQuery-menu-aim
*/

const MOUSE_LOCS_TRACKED = 3;  // number of past mouse locations to track
const DELAY = 200;             // ms delay when user appears to be entering submenu
const TOLERANCE = 50;          // bigger = more forgivey when entering submenu

function offset(el: HTMLElement|null) {
  if (!el) return {left: 0, top: 0};
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left + document.body.scrollLeft,
    top: rect.top + document.body.scrollTop,
  };
}

function outerWidth(el: HTMLElement|null) {
  if (!el) return;
  let _width = el.offsetWidth;
  let style = getComputedStyle(el);  // el.currentStyle ||
  _width += (parseInt(style.marginLeft, 10) || 0);
  return _width;
}

function outerHeight(el: HTMLElement|null) {
  if (!el) return;
  let _height = el.offsetHeight;
  let style = getComputedStyle(el);  // el.currentStyle ||
  let something = 
  _height += (parseInt(style.marginLeft, 10) || 0);
  return _height;
}

export function Menu({ theme, menuItems }: Props): JSX.Element {
  const [ activeMenuRow, setActiveMenuRow ] = useState<undefined|number>();

  const menuConfig: IMenuConfig = {delay: 300, tolerance: 75};

  let menuTimer: null|ReturnType<typeof setTimeout>;
  let mouseLocs: IMouseLocation[] = [];
  let lastDelayLoc: null|IMouseLocation;

  useLayoutEffect(() => {  // useRef? forwardRef?
    document.addEventListener('mousemove', handleMouseMoveDocument, false);
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveDocument);
      mouseLocs = [];
      if (menuTimer) clearTimeout(menuTimer);
      menuTimer = null;
    };
  });

  function getActivateDelay(config: IMenuConfig) {
    // findDOMNode? ref? useRef? forwardRef?
    let menu: HTMLElement|null = document.querySelector('.menu');
    if (!menu) return 0;

    let menuOffset = offset(menu);
    let menuOuterWidth = outerWidth(menu);
    let menuOuterHeight = outerHeight(menu);
    if (!menuOuterWidth || !menuOuterHeight) return 0;

    let upperLeft = {
      x: menuOffset.left,
      y: menuOffset.top - (config.tolerance || TOLERANCE)
    };

    let upperRight = {x: menuOffset.left + menuOuterWidth, y: upperLeft.y};

    let lowerLeft = {
      x: menuOffset.left,
      y: menuOffset.top + menuOuterHeight + (config.tolerance || TOLERANCE)
    };

    let lowerRight = {x: menuOffset.left + menuOuterWidth, y: lowerLeft.y};

    let loc = mouseLocs[mouseLocs.length - 1];

    let prevLoc = mouseLocs[0];
  
    if (!loc) return 0;

    if (!prevLoc) prevLoc = loc;

    if (
      prevLoc.x < menuOffset.left ||
      prevLoc.x > lowerRight.x ||
      prevLoc.y < menuOffset.top ||
      prevLoc.y > lowerRight.y
    ) {
      return 0;
    }

    if (
      lastDelayLoc &&
      loc.x === lastDelayLoc.x &&
      loc.y === lastDelayLoc.y
    ) {
      return 0;
    }

    function slope(a: IMouseLocation, b: IMouseLocation) {
      return (b.y - a.y) / (b.x - a.x);
    }
  
    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;
    let decreasingSlope = slope(loc, decreasingCorner);
    let increasingSlope = slope(loc, increasingCorner);
    let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
    let prevIncreasingSlope = slope(prevLoc, increasingCorner);
  
    if (
      decreasingSlope < prevDecreasingSlope &&
      increasingSlope > prevIncreasingSlope
    ) {
      lastDelayLoc = loc;
      return config.delay || DELAY;
    }

    lastDelayLoc = null;
    
    return 0;
  }

  function possiblyActivate(row: number) {
    const delay = getActivateDelay(menuConfig);

    if (delay) {
      menuTimer = setTimeout(() => {
        possiblyActivate(row);
      }, delay);
      return;
    }

    setActiveMenuRow(row);
  }

  const handleMouseMoveDocument = (e: MouseEvent) => {
    mouseLocs.push({x: e.pageX, y: e.pageY});
    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
  }
  
  const handleMouseEnterRow = (row: number) => {
    if (menuTimer) clearTimeout(menuTimer);
    possiblyActivate(row);
  }

  const handleMouseLeaveMenu = () => {
    if (menuTimer) clearTimeout(menuTimer);
  }

  return (
    <MenuView
      theme={theme}
      menuItems={menuItems}
      activeMenuRow={activeMenuRow}
      handleMouseEnterRow={handleMouseEnterRow}
      handleMouseLeaveMenu={handleMouseLeaveMenu}
    />
  );
}

interface RootState {
  theme: {
    dropDownMenuTheme: string;
  };
}

export interface IMenuItem {
  name: string;
  link: string;
  subMenu: string[];
  subMenuLinks: string[];
  image: string;
}

interface IMouseLocation {
  x: number;
  y: number;
}

interface IMenuConfig {
  delay: number;
  tolerance: number;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  menuItems: IMenuItem[];
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.dropDownMenuTheme
});

const connector = connect(mapStateToProps)

export default connector(Menu);