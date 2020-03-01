import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Cuisine } from './Cuisine';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));

// TO DO:
/*jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: () => Promise.resolve  // finish
}));*/

describe('Cuisine redirect behavior', () => {
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

  // mock that axios
  /*it('should not redirect if given a valid cuisine', async () => {
    mount(
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
    await wait(3000);
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });*/
});

/*describe('Cuisine', () => {
  it('should load the appropriate cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);

    expect(wrapper.state("cuisine")).not.toBeNull();  // insufficient, also, this is not a unit test, it's an integration test now...
  });
});*/