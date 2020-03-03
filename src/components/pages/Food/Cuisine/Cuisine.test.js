import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import CuisineView from './CuisineView';

import { Cuisine } from './Cuisine';

let cuisine = {
  cuisine: {
    cuisine_id: 1,
    cuisine_name: "Italian",
    cuisine_nation: "Italy",
    //cuisine_banner: "",  // AWS S3  cuisine/banner/${cuisine.cuisine_nation}
    //cuisine_flag: "",  // AWS S3 cuisine/flag/${cuisine.cuisine_nation}
    cuisine_wiki: "Italian_cuisine",
    cuisine_intro: ""
  },
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
  ],
  cuisine_plans: [
    {plan_id: 3320, plan_name: "Italian Plan", author_id: 1}
  ]
};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));

jest.mock('axios');

axios.get.mockImplementation(() => Promise.resolve({data: cuisine}));



jest.mock(
  '../../../../routing/breadcrumbs/Breadcrumbs',
  () => ({
    CuisineBreadcrumbs: ({ cuisine }) => <div>{cuisine.cuisine_name}</div>
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Cuisine', () => {
  it('should redirect to /food/cuisines if given no cuisine', async () => {
    mount(
      <MemoryRouter>
        <Cuisine
          match={{params: {}}}
          oneColumnATheme="light"
          dataCuisines={[
            {cuisine_id: 1, cuisine_name: "Chinese"},
            {cuisine_id: 2, cuisine_name: "Italian"}
          ]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  it('should redirect to /food/cuisines if given an invalid cuisine', async () => {
    mount(
      <MemoryRouter>
        <Cuisine
          match={{params: {id: "999"}}}
          oneColumnATheme="light"
          dataCuisines={[
            {cuisine_id: 1, cuisine_name: "Chinese"},
            {cuisine_id: 2, cuisine_name: "Italian"}
          ]}
        />
      </MemoryRouter>
    );
    await wait(3000);
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  it('should not redirect if given a valid cuisine', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Cuisine
          match={{params: {id: "1"}}}
          oneColumnATheme="light"
          dataCuisines={[
            {cuisine_id: 1, cuisine_name: "Chinese"},
            {cuisine_id: 2, cuisine_name: "Italian"}
          ]}
        />
      </MemoryRouter>
    );

    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());

      expect(mockHistoryPush).not.toHaveBeenCalled();
    }));
  });

  it('should load the appropriate cuisine', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Cuisine
          match={{params: {id: "1"}}}
          oneColumnATheme="light"
          dataCuisines={[
            {cuisine_id: 1, cuisine_name: "Chinese"},
            {cuisine_id: 2, cuisine_name: "Italian"}
          ]}
        />
      </MemoryRouter>
    );

    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());

      expect(wrapper.find('.cuisine-view')).toHaveLength(1);

      expect(wrapper.find(CuisineView).props().cuisine.cuisine.cuisine_id)
      .toEqual(1);
    }));
  });
});