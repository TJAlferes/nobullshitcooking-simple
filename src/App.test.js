import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/desktop/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';

import RoutesList from './routing/Routes';

import { App } from './App';

const beginProps = {
  headerTheme: 'header-light',
  footerTheme: 'footer-light'
};

afterEach(() => {
  jest.clearAllMocks();
  pathname = "/";
});

let wrapper;

describe('App', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({pathname: "/"})
  }));

  wrapper = mount(<MemoryRouter><App {...beginProps} /></MemoryRouter>);

  it('displays a MobileHeaderRed component', () => {
    expect(wrapper.find(MobileHeaderRed)).toHaveLength(1);
  });

  it('displays a HeaderRed component', () => {
    expect(wrapper.find(HeaderRed)).toHaveLength(1);
  });

  it('displays a MainWhite component', () => {
    expect(wrapper.find(MainWhite)).toHaveLength(1);
  });

  it('displays a FooterGray component', () => {
    expect(wrapper.find(FooterGray)).toHaveLength(1);
  });

  it('displays a RoutesList component', () => {
    expect(wrapper.find(RoutesList)).toHaveLength(1);
  });
});

describe('when pathname is /register', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({pathname: "/register"})
  }));

  wrapper = mount(<MemoryRouter><App {...beginProps} /></MemoryRouter>);

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find(HeaderRed)).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find(FooterGray)).toHaveLength(0);
  });
});

describe('when pathname is /verify', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({pathname: "/verify"})
  }));

  wrapper = mount(<MemoryRouter><App {...beginProps} /></MemoryRouter>);

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find(HeaderRed)).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find(FooterGray)).toHaveLength(0);
  });
});

describe('when pathname is /login', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({pathname: "/login"})
  }));

  wrapper = mount(<MemoryRouter><App {...beginProps} /></MemoryRouter>);

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find(HeaderRed)).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find(FooterGray)).toHaveLength(0);
  });
});