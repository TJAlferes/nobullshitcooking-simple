import { SearchProvider } from '@elastic/react-search-ui';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

//import { searchConfig } from './config/searchConfig';
import { rootReducer } from './store/rootReducer';
import { App } from './App';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const store = storeFactory();

const beginProps = {
  dataContentTypes: [],
  headerTheme: 'header-light',
  footerTheme: 'footer-light',
  mainTheme: 'main-light',
  shadow: false
};

const mockBreadcrumbs = jest.fn();
jest.mock('./routing/breadcrumbs/Breadcrumbs', () => ({
  Breadcrumbs: mockBreadcrumbs
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  describe('when pathname is /login', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <SearchProvider config={{}}>
            <App {...beginProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.headerred')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.mainwhite')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footergray')).toHaveLength(0);
    });
  });

  describe('when pathname is /register', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/register"]}>
          <SearchProvider config={{}}>
            <App {...beginProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.headerred')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.mainwhite')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footergray')).toHaveLength(0);
    });
  });

  describe('when pathname is /verify', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/verify"]}>
          <SearchProvider config={{}}>
            <App {...beginProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.headerred')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.mainwhite')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footergray')).toHaveLength(0);
    });
  });

  describe('when not at auth page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <SearchProvider config={{}}>
            <App {...beginProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('displays a Header component', () => {
      expect(wrapper.find('.headerred')).toHaveLength(1);
    });

    it('displays a Main component', () => {
      expect(wrapper.find('.mainwhite')).toHaveLength(1);
    });

    it('displays a Footer component', () => {
      expect(wrapper.find('.footergray')).toHaveLength(1);
    });
  });
});