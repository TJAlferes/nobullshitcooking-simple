import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/header/dropdowns/';

const NutritionSlideImage = `${s3Path}steve-reeves-nutrition-slide.png`;
const NutritionSlideImageDark = `${s3Path}steve-reeves-nutrition-slide-dark.png`;
const MethodsSlideImage = `${s3Path}fire-methods-slide.png`;
const MethodsSlideImageDark = `${s3Path}fire-methods-slide-dark.png`;
const IngredientsSlideImage = `${s3Path}abundance-ingredients-slide.png`;
const IngredientsSlideImageDark = `${s3Path}abundance-ingredients-slide-dark.png`;
const CuisinesSlideImage = `${s3Path}world-map-cuisines-slide.png`;
const CuisinesSlideImageDark = `${s3Path}world-map-cuisines-slide-dark.png`;
const PrinciplesSlideImage = `${s3Path}vitruvian-man-principles-slide.png`;
const PrinciplesSlideImageDark = `${s3Path}vitruvian-man-principles-slide-dark.png`;
const ExercisesSlideImage = `${s3Path}pushups-exercises-slide.png`;
const ExercisesSlideImageDark = `${s3Path}pushups-exercises-slide-dark.png`;
const KitchenEquipmentSlideImage = `${s3Path}kitchen-equipment-slide.png`;
const KitchenEquipmentSlideImageDark = `${s3Path}kitchen-equipment-slide-dark.png`;

import './menu.css';

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

function offset(el) {
  if (!el) return {left: 0, top: 0};
  let rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

function outerWidth(el) {
  let _width = el.offsetWidth;
  let style = el.currentStyle || getComputedStyle(el);
  _width += (parseInt(style.marginLeft, 10) || 0);
  return _width;
}

function outerHeight(el) {
  let _height = el.offsetHeight;
  let style = el.currentStyle || getComputedStyle(el);
  _height += (parseInt(style.marginLeft, 10) || 0);
  return _height;
}

const Menu = props => {
  const [activeMenuIndex, setActiveMenuIndex] = useState();

  let __reactMenuAimConfig;
  let __mouseMoveDocumentHandler;
  let __reactMenuAimTimer;
  let _lastDelayLoc;
  let mouseLocs = [];

  function handleMouseMoveDocument(e) {  // Mousemove handler on document
    mouseLocs.push({x: e.pageX, y: e.pageY});
    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
  }
  
  function getActivateDelay(config) {
    let menu = config.menuSelector && document.querySelector(config.menuSelector);  // do you need findDOMNode? or a ref?
    let menuOffset = offset(menu);
    let upperLeft = {x: menuOffset.left, y: menuOffset.top - (config.tolerance || TOLERANCE)};
    let upperRight = {x: menuOffset.left + outerWidth(menu), y: upperLeft.y};
    let lowerLeft = {x: menuOffset.left, y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE)};
    let lowerRight = {x: menuOffset.left + outerWidth(menu), y: lowerLeft.y};
    let loc = mouseLocs[mouseLocs.length - 1];
    let prevLoc = mouseLocs[0];
  
    if (!loc) return 0;
    if (!prevLoc) prevLoc = loc;
    if (prevLoc.x < menuOffset.left || prevLoc.x > lowerRight.x || prevLoc.y < menuOffset.top || prevLoc.y > lowerRight.y) return 0;
    if (_lastDelayLoc && loc.x === _lastDelayLoc.x && loc.y === _lastDelayLoc.y) return 0;
  
    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    }
  
    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;
    let decreasingSlope = slope(loc, decreasingCorner);
    let increasingSlope = slope(loc, increasingCorner);
    let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
    let prevIncreasingSlope = slope(prevLoc, increasingCorner);
  
    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
      _lastDelayLoc = loc;
      return config.delay || DELAY;
    }
    _lastDelayLoc = null;
    return 0;
  }
  
  function activate(rowIdentifier, handler) {
    handler.call(this, rowIdentifier);
  }
  
  function possiblyActivate(rowIdentifier, handler, config) {
    let delay = getActivateDelay.call(this, config);
    if (delay) {
      __reactMenuAimTimer = setTimeout(() => {
        possiblyActivate.call(this, rowIdentifier, handler, config);
      }, delay);
    } else {
      activate.call(this, rowIdentifier, handler);
    }
  }

  function initMenuAim(options) {
    __reactMenuAimConfig = options;
  }
  
  function __getMouseMoveDocumentHandler() {
    if (!__mouseMoveDocumentHandler) {
      __mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this);
    }
    return __mouseMoveDocumentHandler;
  }
  
  function handleMouseLeaveMenu(handler, e) {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    if (typeof handler === 'function') handler.call(this, e);
  }
  
  const handleMouseEnterRow = (rowIdentifier, handler) => {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    possiblyActivate(rowIdentifier, handler, __reactMenuAimConfig);
  }

  useLayoutEffect(() => {
    // config
    initMenuAim({
      submenuDirection: props.submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
    // setup
    let mousemoveListener = 0;
    if (mousemoveListener === 0) document.addEventListener('mousemove', __getMouseMoveDocumentHandler(), false);
    mousemoveListener += 1;
    // cleanup
    return () => {
      mousemoveListener -= 1;
      if (mousemoveListener === 0) {
        document.removeEventListener('mousemove', __getMouseMoveDocumentHandler());
        mouseLocs = [];
      }
      clearTimeout(__reactMenuAimTimer);
      __reactMenuAimTimer = null;
      __mouseMoveDocumentHandler = null;
    };
  });

  const handleSwitchMenuIndex = index => {
    setActiveMenuIndex(index);
  }

  const { menuData, submenuDirection, theme } = props;

  return (
    <div className={`menu-container ${submenuDirection} ${theme}`}>

      <div className={`menu ${theme}`} onMouseLeave={handleMouseLeaveMenu}>
        <ul>
          {menuData.map((menu, index) => {
            let className = 'menu-item';
            if (activeMenuIndex !== undefined && index === activeMenuIndex) {
              className += ' active';
            }
            return (
              <li
                className={className}
                key={index}
                onMouseEnter={() => { handleMouseEnterRow(index, handleSwitchMenuIndex) }}
              >
                <Link className={theme} to={menu.link}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`sub-menu ${theme}`}>
        {
          activeMenuIndex !== undefined &&
          <h3>
            <Link className={theme} to={menuData[activeMenuIndex].link}>
              {menuData[activeMenuIndex].name}
            </Link>
          </h3>
        }
        <ul>
          {
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].subMenu.map((subMenu, index) => 
              <li className="sub-menu-item" key={index}>
                <Link className={theme} to={menuData[activeMenuIndex].subMenuLinks[index]}>
                  {subMenu}
                </Link>
              </li>
            )
          }
        </ul>
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'recipes'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={IngredientsSlideImage} />
            : <img src={IngredientsSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'cuisines'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={CuisinesSlideImage} />
            : <img src={CuisinesSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'ingredients'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={IngredientsSlideImage} />
            : <img src={IngredientsSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'nutrition'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={NutritionSlideImage} />
            : <img src={NutritionSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'equipment'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={IngredientsSlideImage} />
            : <img src={IngredientsSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'methods'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={MethodsSlideImage} />
            : <img src={MethodsSlideImageDark} />
          )
        }

        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'principles'
          ) && 
          (
            theme === "drop-down-menu-light"
            ? <img src={PrinciplesSlideImage} />
            : <img src={PrinciplesSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'exercises'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={ExercisesSlideImage} />
            : <img src={ExercisesSlideImageDark} />
          )
        }
        {
          (
            activeMenuIndex !== undefined &&
            menuData[activeMenuIndex].image === 'kitchen-equipment'
          ) &&
          (
            theme === "drop-down-menu-light"
            ? <img src={KitchenEquipmentSlideImage} />
            : <img src={KitchenEquipmentSlideImageDark} />
          )
        }
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.dropDownMenuTheme
});

export default connect(mapStateToProps)(Menu);