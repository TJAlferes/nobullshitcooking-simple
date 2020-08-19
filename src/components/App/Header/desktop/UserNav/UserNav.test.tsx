import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UserNav } from './UserNav';

const authStaffLogout = jest.fn();
const authUserLogout = jest.fn();
const themeDarkTrigger = jest.fn();
const themeLightTrigger = jest.fn();

const initialProps = {
  authname: "Person",
  authStaffLogout,
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
};

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('UserNav', () => {

  describe('content', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={false}
          theme={"header-light"}
          userIsAuthenticated={false}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it(`displays a Link element to "/help" with text "Help"`, () => {
      expect(wrapper.find('[data-test="help"]').at(0).prop('to'))
      .toEqual("/help");
      expect(wrapper.find('[data-test="help"]').at(0).props().children)
      .toEqual("Help");
    });
  });

  describe('when theme is header-light', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={false}
          theme={"header-light"}
          userIsAuthenticated={false}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it('displays an i element with className moon-symbol', () => {
      expect(wrapper.find('i.moon-symbol')).toHaveLength(1);
    });

    it (`
      displays a span element with className "mode-button" and text "☾ Night"
    `, () => {
      expect(wrapper.find('span.mode-button').text()).toEqual("☾ Night");
    });

    it ('changes theme', () => {
      wrapper.find('.mode-button').simulate('click');
      expect(themeDarkTrigger).toHaveBeenCalledTimes(1);
    });
  });

  describe('when theme is header-dark', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={false}
          theme={"header-dark"}
          userIsAuthenticated={false}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it('displays an i element with className sun-symbol', () => {
      expect(wrapper.find('i.sun-symbol')).toHaveLength(1);
    });

    it (`
      displays a span element with className "mode-button" and text "☀︎ Day"
    `, () => {
      expect(wrapper.find('span.mode-button').text()).toEqual("☀︎ Day");
    });

    it ('changes theme', () => {
      wrapper.find('.mode-button').simulate('click');
      expect(themeLightTrigger).toHaveBeenCalledTimes(1);
    });
  });

  describe('when not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={false}
          theme={"header-light"}
          userIsAuthenticated={false}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it(`
      displays a Link element to "/register" with text "Create Account"
    `, () => {
      expect(wrapper.find('[data-test="register"]').at(0).prop('to'))
      .toEqual("/register");
      expect(wrapper.find('[data-test="register"]').at(0).props().children)
      .toEqual("Create Account");
    });

    it(`
      displays a Link element to "/login" with text "Create Account"
    `, () => {
      expect(wrapper.find('[data-test="login"]').at(0).prop('to'))
      .toEqual("/login");
      expect(wrapper.find('[data-test="login"]').at(0).props().children)
      .toEqual("Sign In");
    });
  });

  describe('when staff is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={true}
          theme={"header-light"}
          userIsAuthenticated={false}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it(`
      displays a Link element to "/staff-dashboard" with text "Hello, Person"
    `, () => {
      expect(wrapper.find('[data-test="staff-dashboard"]').at(0).prop('to'))
      .toEqual("/staff-dashboard");
      expect(
        wrapper.find('[data-test="staff-dashboard"]').at(0).props().children
      )
      .toEqual("Hello, Person");
    });

    it (`
      displays a span element
      with className "user-nav__link--authenticated" and
      with text "Sign Out"
    `, () => {
      expect(wrapper.find('span.user-nav__link--authenticated').text())
      .toEqual("Sign Out");
    });

    it('logs staff out and redirects home', () => {
      wrapper.find('span.user-nav__link--authenticated').simulate('click');
      expect(authStaffLogout).toHaveBeenCalledTimes(1);
      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    });
  });

  describe('when user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserNav
          staffIsAuthenticated={false}
          theme={"header-light"}
          userIsAuthenticated={true}
          {...initialProps}
        />
      </MemoryRouter>
    );

    it(`
      displays a Link element to "/dashboard" with text "Hello, Person"
    `, () => {
      expect(wrapper.find('[data-test="dashboard"]').at(0).prop('to'))
      .toEqual("/dashboard");
      expect(wrapper.find('[data-test="dashboard"]').at(0).props().children)
      .toEqual("Hello, Person");
    });

    it (`
      displays a span element
      with className "user-nav__link--authenticated" and
      with text "Sign Out"
    `, () => {
      expect(wrapper.find('span.user-nav__link--authenticated').text())
      .toEqual("Sign Out");
    });

    it('logs user out and redirects home', () => {
      wrapper.find('span.user-nav__link--authenticated').simulate('click');
      expect(authUserLogout).toHaveBeenCalledTimes(1);
      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    });
  });

});