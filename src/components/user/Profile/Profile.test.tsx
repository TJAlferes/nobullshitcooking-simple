import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import { Profile } from './Profile';
//import { ProfileView } from './ProfileView';

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
}));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Profile', () => {
  it('should redirect to /home if given no username', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({})
    }));
    mount(
      <MemoryRouter>
        <Profile
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
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({username: "Timmy"})
      }));
      mount(
        <MemoryRouter>
          <Profile
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
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({username: "Timmy Timmy Timmy Timmy"})
      }));
      mount(
        <MemoryRouter>
          <Profile
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
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({username: "TimJim"})
    }));
    const wrapper = mount(
      <MemoryRouter>
        <Profile
          oneColumnATheme="light"
          message=""
          isAuthenticated={false}
          authname=""
          dataMyFriendships={[]}
          userRequestFriendship={userRequestFriendship}
        />
      </MemoryRouter>
    );
    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      })
    });
  });
});