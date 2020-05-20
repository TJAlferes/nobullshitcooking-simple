import { mount, render } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
//import { SearchProvider } from '@elastic/react-search-ui';

import RoutesList from './routing/Routes';
import rootReducer from './store/rootReducer';
//import searchConfig from './config/searchConfig';
import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import { HeaderRed } from './components/HeaderRed/desktop/HeaderRed';
import { MainWhite } from './components/MainWhite/MainWhite';
import { FooterGray } from './components/FooterGray/FooterGray';
import { App } from './App';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const beginProps = {
  headerTheme: 'header-light',
  footerTheme: 'footer-light',
  mainTheme: 'main-light',
  breadCrumbsTheme: 'breadcrumbs-light',
  shadow: false
};

const mockBreadcrumbs = jest.fn();

jest.mock('./routing/breadcrumbs/Breadcrumbs', () => ({
  Breadcrumbs: mockBreadcrumbs
}));

afterEach(() => {
  jest.clearAllMocks();
});

//let wrapper;

const store = storeFactory();

describe('App', () => {
  jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {...originalModule, useLocation: () => ({pathname: "/"})};
  });
  
  /*const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <SearchProvider config={{}}>
          <App {...beginProps} />
        </SearchProvider>
      </MemoryRouter>
    </Provider>
  );*/
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <App {...beginProps} />
      </MemoryRouter>
    </Provider>
  );

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
  jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {...originalModule, useLocation: () => ({pathname: "/register"})};
  });

  const wrapper = render(
    <Provider store={store}>
      <MemoryRouter>
        <App {...beginProps} />
      </MemoryRouter>
    </Provider>
  );

  it('does not display a MobileHeaderRed component', () => {
    expect(wrapper.find('.mobile-header-red')).toHaveLength(0);
  });

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find('.header-red')).toHaveLength(0);
  });

  it('does not display a MainWhite component', () => {
    expect(wrapper.find('.main-white')).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find('.footer-gray')).toHaveLength(0);
  });

  it('does not display the normal elements', () => {
    expect(wrapper.find('div#app')).toHaveLength(0);
  });
});

describe('when pathname is /verify', () => {
  jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {...originalModule, useLocation: () => ({pathname: "/verify"})};
  });

  const wrapper = render(
    <Provider store={store}>
      <MemoryRouter>
        <App {...beginProps} />
      </MemoryRouter>
    </Provider>
  );

  it('does not display a MobileHeaderRed component', () => {
    expect(wrapper.find('.mobile-header-red')).toHaveLength(0);
  });

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find('.header-red')).toHaveLength(0);
  });

  it('does not display a MainWhite component', () => {
    expect(wrapper.find('.main-white')).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find('.footer-gray')).toHaveLength(0);
  });

  it('does not display the normal elements', () => {
    expect(wrapper.find('div#app')).toHaveLength(0);
  });
});

describe('when pathname is /login', () => {
  jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {...originalModule, useLocation: () => ({pathname: "/login"})};
  });

  const wrapper = render(
    <Provider store={store}>
      <MemoryRouter>
        <App {...beginProps} />
      </MemoryRouter>
    </Provider>
  );

  it('does not display a MobileHeaderRed component', () => {
    expect(wrapper.find('.mobile-header-red')).toHaveLength(0);
  });

  it('does not display a HeaderRed component', () => {
    expect(wrapper.find('.header-red')).toHaveLength(0);
  });

  it('does not display a MainWhite component', () => {
    expect(wrapper.find('.main-white')).toHaveLength(0);
  });

  it('does not display a FooterGray component', () => {
    expect(wrapper.find('.footer-gray')).toHaveLength(0);
  });

  it('does not display the normal elements', () => {
    expect(wrapper.find('div#app')).toHaveLength(0);
  });
});