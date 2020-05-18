import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import { Cuisine, ICuisineDetail } from './Cuisine';
import { CuisineView } from './CuisineView';

const dataCuisines = [
  {cuisine_id: 1, cuisine_name: "Chinese", cuisine_nation: "China"},
  {cuisine_id: 2, cuisine_name: "Italian", cuisine_nation: "Italy"}
];
const cuisine = {
  cuisine_id: 1,
  cuisine_name: "Italian",
  cuisine_nation: "Italy",
  //cuisine_banner: "",  // AWS S3  cuisine/banner/${cuisine.cuisine_nation} don't put in here, just put in markup
  //cuisine_flag: "",  // AWS S3 cuisine/flag/${cuisine.cuisine_nation} don't put in here, just put in markup
  cuisine_wiki: "Italian_cuisine",
  cuisine_intro: "",
  cuisine_suppliers: [
    {supplier_id: 14, supplier_name: "Amazing Italian Foods"}
  ],
  cuisine_equipment: [
    {equipment_id: 1, equipment_name: "Pot"}
  ],
  cuisine_ingredients: [
    {ingredient_id: 1, ingredient_name: "White Onion"}
  ],
  cuisine_recipes: [
    {recipe_id: 1, title: "Something"},
    {recipe_id: 2, title: "Something Else"}
  ]
};

// don't use, if possible, this is a big anti-pattern, find something better
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));
const mockHistoryPush = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data: cuisine}));

jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    CuisineBreadcrumbs: (cuisine: ICuisineDetail) =>
      <div>{cuisine.cuisine_name}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Cuisine', () => {
  it('should redirect to /food/cuisines if given no cuisine', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({})
    }));
    mount(
      <MemoryRouter>
        <Cuisine oneColumnATheme="light" dataCuisines={dataCuisines} />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/food/cuisines");
  });

  it('should redirect to /food/cuisines if given an invalid cuisine', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "999"})
    }));
    mount(
      <MemoryRouter>
        <Cuisine oneColumnATheme="light" dataCuisines={dataCuisines} />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/food/cuisines");
  });

  it('should not redirect if given a valid cuisine', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    const wrapper = mount(
      <MemoryRouter>
        <Cuisine oneColumnATheme="light" dataCuisines={dataCuisines} />
      </MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });
  });
  
  it('should load the appropriate cuisine', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({id: "1"})
    }));
    const wrapper = mount(
      <MemoryRouter>
        <Cuisine oneColumnATheme="light" dataCuisines={dataCuisines} />
      </MemoryRouter>
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