import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Cuisine } from './Cuisine';
import { CuisineView } from './CuisineView';

const cuisine = {
  cuisine_id: 1,
  cuisine_name: "Italian",
  cuisine_nation: "Italy",
  //cuisine_banner: "",  // AWS S3  cuisine/banner/${cuisine.cuisine_nation} don't put in here, just put in markup
  //cuisine_flag: "",  // AWS S3 cuisine/flag/${cuisine.cuisine_nation} don't put in here, just put in markup
  cuisine_wiki: "Italian_cuisine",
  cuisine_intro: "",
  cuisine_equipment: [{equipment_id: 1, equipment_name: "Pot"}],
  cuisine_ingredients: [{ingredient_id: 1, ingredient_name: "White Onion"}],
  cuisine_recipes: [
    {recipe_id: 1, title: "Something"},
    {recipe_id: 2, title: "Something Else"}
  ],
  cuisine_suppliers: [{supplier_id: 14, supplier_name: "Amazing Italian Foods"}]
};

const initialProps = {
  dataCuisines: [
    {cuisine_id: 1, cuisine_name: "Chinese", cuisine_nation: "China"},
    {cuisine_id: 2, cuisine_name: "Italian", cuisine_nation: "Italy"}
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
  '../../routing/breadcrumbs/Breadcrumbs',
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

    const wrapper = mount(
      <MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>
    );

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

    const wrapper = mount(
      <MemoryRouter><Cuisine {...initialProps} /></MemoryRouter>
    );

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(wrapper.find('.cuisine-view')).toHaveLength(1);
        expect(wrapper.find(CuisineView).props().cuisine.cuisine_id)
        .toEqual(1);
      });
    });
  });
});