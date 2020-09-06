import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Cuisine } from '../../../src/pages/Cuisine/Cuisine';
import { CuisineView } from '../../../src/pages/Cuisine/CuisineView';

const cuisine = {
  id: 1,
  name: "Italian",
  nation: "Italy",
  //banner: "",  // AWS S3 cuisine/banner/${cuisine.nation} don't put in here, just put in markup
  //flag: "",  // AWS S3 cuisine/flag/${cuisine.nation} don't put in here, just put in markup
  wiki: "Italian_cuisine",
  intro: "",
  equipment: [{id: 1, name: "Pot"}],
  ingredients: [{id: 1, name: "White Onion"}],
  recipes: [{id: 1, title: "Something"}, {id: 2, title: "Something Else"}],
  suppliers: [{id: 14, name: "Amazing Italian Foods"}]
};

const initialProps = {
  dataCuisines: [
    {id: 1, name: "Chinese", nation: "China"},
    {id: 2, name: "Italian", nation: "Italy"}
  ],
  oneColumnATheme: "light"
};

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});
const mockHistoryPush = jest.fn();
const mockCuisineBreadcrumbs = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: cuisine}));

jest.mock(
  '../../../src/components/Breadcrumbs/Breadcrumbs',
  () => ({CuisineBreadcrumbs: mockCuisineBreadcrumbs})
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Cuisine', () => {
  it('should redirect to /food/cuisines if given no cuisine', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });

    mount(<MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>);

    expect(mockHistoryPush).toHaveBeenCalledWith("/page/guide/food/cuisines");
  });

  it('should redirect to /food/cuisines if given an invalid cuisine', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "999"})};
    });

    mount(<MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>);

    expect(mockHistoryPush).toHaveBeenCalledWith("/page/guide/food/cuisines");
  });

  it('should not redirect if given a valid cuisine', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });

    const wrapper =
      mount(<MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>);

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });
  
  it('should load the appropriate cuisine', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({id: "1"})};
    });

    const wrapper =
      mount(<MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>);

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('.cuisine-view')).toHaveLength(1);
        expect(wrapper.find(CuisineView).props().cuisine.id)
        .toEqual(1);
      });
    });
  });
});