import { SearchProvider } from '@elastic/react-search-ui';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

//import { searchConfig } from '../../../src/config/searchConfig';
import { rootReducer } from '../../../src/store/rootReducer';
import { App } from '../../../src/components/App/App';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const store = storeFactory();

const initialProps = {
  dataContentTypes: [],
  footerTheme: 'footer-light',
  headerTheme: 'header-light',
  mainTheme: 'main-light',
  shadow: false
};

const mockBreadcrumbs = jest.fn();
jest.mock('../../../src/components/Breadcrumbs/Breadcrumbs', () => ({
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
            <App {...initialProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.header')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.main')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footer')).toHaveLength(0);
    });
  });

  describe('when pathname is /register', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/register"]}>
          <SearchProvider config={{}}>
            <App {...initialProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.header')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.main')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footer')).toHaveLength(0);
    });
  });

  describe('when pathname is /verify', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/verify"]}>
          <SearchProvider config={{}}>
            <App {...initialProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('does not display a Header component', () => {
      expect(wrapper.find('.header')).toHaveLength(0);
    });

    it('does not display a Main component', () => {
      expect(wrapper.find('.main')).toHaveLength(0);
    });

    it('does not display a Footer component', () => {
      expect(wrapper.find('.footer')).toHaveLength(0);
    });
  });

  describe('when not at auth page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <SearchProvider config={{}}>
            <App {...initialProps} />
          </SearchProvider>
        </MemoryRouter>
      </Provider>
    );

    it('displays a Header component', () => {
      expect(wrapper.find('.header')).toHaveLength(1);
    });

    it('displays a Main component', () => {
      expect(wrapper.find('.main')).toHaveLength(1);
    });

    it('displays a Footer component', () => {
      expect(wrapper.find('.footer')).toHaveLength(1);
    });
  });
});