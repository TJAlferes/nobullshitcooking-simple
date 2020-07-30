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

const DELAY = 300;  //200      // ms delay when user appears to be entering submenu
const MOUSE_LOCS_TRACKED = 3;  // number of past mouse locations to track
const TOLERANCE = 75;  //50    // bigger = more forgivey when entering submenu

let lastDelayLoc: IMouseLocation | null;
let mouseLocs: IMouseLocation[] = [];
let menuTimer: ReturnType<typeof setTimeout> | null;

function offset(el: HTMLElement|null) {
  if (!el) return {left: 0, top: 0};
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + document.body.scrollLeft,
    top: rect.top + document.body.scrollTop,
  };
}

function outerWidth(el: HTMLElement|null) {
  if (!el) return;
  const style = getComputedStyle(el);  // el.currentStyle ||
  let _width = el.offsetWidth;
  _width += (parseInt(style.marginLeft, 10) || 0);
  return _width;
}

function outerHeight(el: HTMLElement|null) {
  if (!el) return;
  const style = getComputedStyle(el);  // el.currentStyle ||
  let _height = el.offsetHeight;
  _height += (parseInt(style.marginLeft, 10) || 0);
  return _height;
}

function getActivateDelay() {
  // findDOMNode? ref? useRef? forwardRef?
  const menu: HTMLElement | null = document.querySelector('.menu');
  if (!menu) return 0;

  const menuOffset = offset(menu);
  const menuOuterHeight = outerHeight(menu);
  const menuOuterWidth = outerWidth(menu);

  if (!menuOuterWidth || !menuOuterHeight) return 0;

  const upperLeft = {
    x: menuOffset.left,
    y: menuOffset.top - TOLERANCE
  };
  const upperRight = {
    x: menuOffset.left + menuOuterWidth,
    y: upperLeft.y
  };
  const lowerLeft = {
    x: menuOffset.left,
    y: menuOffset.top + menuOuterHeight + TOLERANCE
  };
  const lowerRight = {
    x: menuOffset.left + menuOuterWidth,
    y: lowerLeft.y
  };

  const loc = mouseLocs[mouseLocs.length - 1];
  if (!loc) return 0;

  let prevLoc = mouseLocs[0];
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

  const decreasingCorner = upperRight;
  const increasingCorner = lowerRight;
  const decreasingSlope = slope(loc, decreasingCorner);
  const increasingSlope = slope(loc, increasingCorner);
  const prevDecreasingSlope = slope(prevLoc, decreasingCorner);
  const prevIncreasingSlope = slope(prevLoc, increasingCorner);

  if (
    decreasingSlope < prevDecreasingSlope &&
    increasingSlope > prevIncreasingSlope
  ) {
    lastDelayLoc = loc;
    return DELAY;
  }

  lastDelayLoc = null;

  return 0;
}

export function Menu({ menuItems, theme }: Props): JSX.Element {
  const [ activeMenuRow, setActiveMenuRow ] = useState<undefined | number>();

  useLayoutEffect(() => {  // useRef? forwardRef?
    document.addEventListener('mousemove', handleMouseMoveDocument, false);

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveDocument);

      mouseLocs = [];

      if (menuTimer) clearTimeout(menuTimer);

      menuTimer = null;
    };
  });
  
  const handleMouseEnterRow = (row: number) => {
    if (menuTimer) clearTimeout(menuTimer);
    possiblyActivate(row);
  }

  const handleMouseLeaveMenu = () => {
    if (menuTimer) clearTimeout(menuTimer);
  }

  const handleMouseMoveDocument = (e: MouseEvent) => {
    mouseLocs.push({x: e.pageX, y: e.pageY});
    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
  }

  const possiblyActivate = (row: number) => {
    const delay = getActivateDelay();

    if (delay) {
      menuTimer = setTimeout(() => {
        possiblyActivate(row);
      }, delay);
      return;
    }

    setActiveMenuRow(row);
  };

  return (
    <MenuView
      activeMenuRow={activeMenuRow}
      handleMouseEnterRow={handleMouseEnterRow}
      handleMouseLeaveMenu={handleMouseLeaveMenu}
      menuItems={menuItems}
      theme={theme}
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

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  menuItems: IMenuItem[];
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.dropDownMenuTheme
});

const connector = connect(mapStateToProps, {});

export default connector(Menu);