import { shallow } from 'enzyme';
import React from 'react';
import routeData from 'react-router';

import { Cuisine } from './Cuisine';

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

describe('Cuisine', () => {
  beforeEach(() => {
    /*jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
      useParams: () => ({
        companyId: 'company-id1',
        teamId: 'team-id1',
      }),
      useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
    }));*/
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });

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

    expect(wrapper.state("cuisine")).not.toBeNull();  // insufficient?
  });

  it('should redirect to /food/cuisines if given no cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);


  });

  it('should redirect to /food/cuisines if given a non-existent/invalid cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);


  });
});