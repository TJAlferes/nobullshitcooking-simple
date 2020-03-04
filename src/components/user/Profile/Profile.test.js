import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import ProfileView from './ProfileView';

import { Profile } from './Profile';

const userRequestFriendship = jest.fn();

const data = {
  avatar: "Person",
  favoriteRecipes: [],
  publicRecipes: []
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({push: mockHistoryPush}),
  //useParams: () => ({id: })
}));

jest.mock('axios');

axios.get.mockImplementation(() => Promise.resolve({data}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Profile', () => {
  it('should redirect to /home if given no username', () => {
    mount(
      <MemoryRouter>
        <Profile
          match={{params: {}}}
          oneColumnATheme="light"
          message=""
          isAuthenticated={false}
          authname=""
          dataMyFriendships={[]}
          userRequestFriendship={userRequestFriendship}
        />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it(
    'should redirect to /home if given a username less than six characters',
    () => {
      mount(
        <MemoryRouter>
          <Profile
            match={{params: {username: "Timmy"}}}
            oneColumnATheme="light"
            message=""
            isAuthenticated={false}
            authname=""
            dataMyFriendships={[]}
            userRequestFriendship={userRequestFriendship}
          />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    }
  );

  it(
    'should redirect to /home if given a username greater than 20 characters',
    () => {
      mount(
        <MemoryRouter>
          <Profile
            match={{params: {username: "Timmy Timmy Timmy Timmy"}}}
            oneColumnATheme="light"
            message=""
            isAuthenticated={false}
            authname=""
            dataMyFriendships={[]}
            userRequestFriendship={userRequestFriendship}
          />
        </MemoryRouter>
      );
      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    }
  );

  it('should not redirect if given a valid username', async () => {
    mount(
      <MemoryRouter>
        <Profile
          match={{params: {username: "TimJim"}}}
          oneColumnATheme="light"
          message=""
          isAuthenticated={false}
          authname=""
          dataMyFriendships={[]}
          userRequestFriendship={userRequestFriendship}
        />
      </MemoryRouter>
    );
    await act(async () => Promise.resolve(() => {
      setImmediate(() => wrapper.update());
      expect(mockHistoryPush).not.toHaveBeenCalled();
    }));
  });
});