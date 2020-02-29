import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
//import routeData from 'react-router';
//import * as ReactRouter from 'react-router';

//import { TestingRouter } from '../../../../../test/testUtils';

import { Cuisine } from './Cuisine';

/*const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};*/

/*describe('Cuisine Redirects', () => {
  it('should redirect to /food/cuisines if given no cuisine', () => {
    const container = render(
      <TestingRouter
        Path="/food/cuisines/1"
        ComponentWithRedirection={() => (
          <Cuisine
            match={{params: {id: "1"}}}
            oneColumnATheme="light"
            dataCuisines={[
              {cuisine_id: 1, cuisine_name: "Chinese"},
              {cuisine_id: 2, cuisine_name: "Italian"}
            ]}
          />
        )}
        RedirectUrl={'/food/cuisines'}
      />
    );
    console.log(container[0]);
    expect(container[0].children[0].data).toEqual('/food/cuisines/1');
  });

  it('should redirect to /food/cuisines if given a non-existent/invalid cuisine', () => {
    const container = render(
      <TestingRouter
        Path="/food/cuisines/2"
        ComponentWithRedirection={() => (
          <Cuisine
            match={{params: {id: "2"}}}
            oneColumnATheme="light"
            dataCuisines={[
              {cuisine_id: 1, cuisine_name: "Chinese"},
              {cuisine_id: 2, cuisine_name: "Italian"}
            ]}
          />
        )}
        RedirectUrl={'/food/cuisines'}
      />
    );
    console.log(container[0]);
    expect(container[0].children[0].data).toEqual('/food/cuisines/2');
  });
});*/

//const { useHistory } = jest.requireActual('react-router');
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush})
}));

describe('Cuisine', () => {
  beforeEach(() => {
    /*jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({companyId: 'company-id1', teamId: 'team-id1'}),
      useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
    }));*/

    /*jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({push: mockHistoryPush})
    }));*/

    //console.log(TestRouter);

    //jest.spyOn(wtf, 'useHistory').returnValue({push: mockHistoryPush});

    //jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });

  it ('redirects', async () => {
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

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    await wait(3000);

    expect(mockHistoryPush).toHaveBeenCalled();
    //expect(mockHistoryPush).not.toHaveBeenCalled();
  });

  /*it('should load the appropriate cuisine', () => {
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
  });*/
});