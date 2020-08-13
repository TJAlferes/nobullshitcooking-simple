import { shallow } from 'enzyme';
import React from 'react';

import foodMenuData from '../data/foodMenuData';
import { MenuView } from './MenuView';

const handleMouseEnterRow = jest.fn();
const handleMouseLeaveMenu = jest.fn();

const wrapper = shallow(
  <MenuView
    activeMenuRow={undefined}
    handleMouseEnterRow={handleMouseEnterRow}
    handleMouseLeaveMenu={handleMouseLeaveMenu}
    menuItems={foodMenuData}
    theme="drop-down-menu-light"
  />
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('MenuView', () => {
  it('leaves the menu', () => {
    wrapper.find('[data-test="menu"]').simulate('mouseLeave');
    expect(handleMouseLeaveMenu).toBeCalledTimes(1);
  });

  it('enters a menu item (AKA row)', () => {
    wrapper.find('[data-test="menu-item"]').at(0).simulate('mouseEnter');
    expect(handleMouseEnterRow).toBeCalledTimes(1);
  });

  it('sets only the active menu row className to active', () => {
    const wrapperWithActiveMenuRow = shallow(
      <MenuView
        activeMenuRow={0}
        handleMouseEnterRow={handleMouseEnterRow}
        handleMouseLeaveMenu={handleMouseLeaveMenu}
        menuItems={foodMenuData}
        theme="drop-down-menu-light"
      />
    );
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(0).hasClass('menu__item active')
    ).toBeTruthy();
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(1).hasClass('menu__item active')
    ).toBeFalsy();
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(2).hasClass('menu__item active')
    ).toBeFalsy();
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(3).hasClass('menu__item active')
    ).toBeFalsy();
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(4).hasClass('menu__item active')
    ).toBeFalsy();
    expect(
      wrapperWithActiveMenuRow
      .find('[data-test="menu-item"]').at(5).hasClass('menu__item active')
    ).toBeFalsy();
  });
});