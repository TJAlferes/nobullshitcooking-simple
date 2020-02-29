import { shallow } from 'enzyme';
import React from 'react';
//import routeData from 'react-router';
//import * as ReactRouterDom from 'react-router-dom';

import { TestingRouter } from '../../../../../test/testUtils';

import { Cuisine } from './Cuisine';

/*const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};*/

describe('Cuisine Redirects', () => {
  it('should redirect to /food/cuisines if given no cuisine', () => {
    const givenProps = {
      match: {params: {id: undefined}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };
    const container = render(
      <TestingRouter
        ComponentWithRedirection={() => <Cuisine {...givenProps} />}
        RedirectUrl={'/food/cuisines'}
      />
    );
    expect(container[0].children[0].data).toEqual('/food/cuisines');
  });

  it('should redirect to /food/cuisines if given a non-existent/invalid cuisine', () => {
    const givenProps = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };
    const container = render(
      <TestingRouter
        ComponentWithRedirection={() => <Cuisine {...givenProps} />}
        RedirectUrl={'/food/cuisines'}
      />
    );
    expect(container[0].children[0].data).toEqual('/food/cuisines');
  });
});

describe('Cuisine', () => {
  // wrong approach!
  /*beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({companyId: 'company-id1', teamId: 'team-id1'}),
      useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
    }));

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({push: jest.fn()})
    }));

    jest.spyOn(ReactRouterDom, 'useHistory').returnValue({push: mockHistoryPush});

    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });*/

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

    expect(wrapper.state("cuisine")).not.toBeNull();  // insufficient
  });
});