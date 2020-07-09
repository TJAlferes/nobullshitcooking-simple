import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import Content from './Content';
import { ContentView } from './ContentView';

const contents = [
  {},
  {}
];

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});
const mockHistoryPush = jest.fn();
//const mockContentBreadcrumbs = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: contents}));

/*jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({ContentBreadcrumbs: mockContentBreadcrumbs})
);*/

afterEach(() => {
  jest.clearAllMocks();
});

describe ('Content', () => {
  it('should redirect to /home if given no content', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });
    mount(<MemoryRouter><Content oneColumnATheme="light" /></MemoryRouter>);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it('should not redirect if given a valid content', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Content oneColumnATheme="light" /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });
  
  it('should load the appropriate content', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });
    const wrapper = mount(
      <MemoryRouter><Content oneColumnATheme="light" /></MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('.content-view')).toHaveLength(1);
        expect(wrapper.find(ContentView).props().contents).toEqual(contents);
      });
    });
  });
});