import { shallow } from 'enzyme';
import React from 'react';

import MenuView from './MenuView';

const handleMouseEnterRow = jest.fn();
const handleMouseLeaveMenu = jest.fn();
const handleSwitchMenuIndex = jest.fn();

const wrapper = shallow(
  <MenuView
    theme="drop-down-menu-light"
    menuData={[]}
    activeMenuIndex={undefined}
    handleMouseEnterRow={handleMouseEnterRow}
    handleMouseLeaveMenu={handleMouseLeaveMenu}
    handleSwitchMenuIndex={handleSwitchMenuIndex}
  />
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('MenuView', () => {
  it('leaves menu', () => {
    wrapper.find('[data-test="menu"]').simulate('mouseLeave');
    expect(handleMouseLeaveMenu).toBeCalledTimes(1);
  });
});