import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Profile } from '../../../src/pages/Profile/Profile';
//import { ProfileView } from '../../../src/pages/Profile/ProfileView';

const data = {
  avatar: "Person",
  favoriteRecipes: [],
  publicRecipes: []
};

const userRequestFriendship = jest.fn();

const initialProps = {
  authname: "",
  dataMyFriendships: [],
  isAuthenticated: false,
  message: "",
  oneColumnATheme: "light",
  userRequestFriendship
};

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockReturnValueOnce(Promise.resolve({data}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Profile', () => {
  it('should redirect to /home if given no username', () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({})};
    });

    mount(<MemoryRouter><Profile {...initialProps} /></MemoryRouter>);

    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  it(
    'should redirect to /home if given a username less than six characters',
    () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {...originalModule, useParams: () => ({username: "Timmy"})};
      });

      mount(<MemoryRouter><Profile {...initialProps} /></MemoryRouter>);

      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    }
  );

  it(
    'should redirect to /home if given a username greater than 20 characters',
    () => {
      jest.mock('react-router-dom', () => {
        const originalModule = jest.requireActual('react-router-dom');
        return {
          ...originalModule,
          useParams: () => ({username: "Timmy Timmy Timmy Timmy"})
        };
      });

      mount(<MemoryRouter><Profile {...initialProps} /></MemoryRouter>);

      expect(mockHistoryPush).toHaveBeenCalledWith("/home");
    }
  );

  it('should not redirect if given a valid username', async () => {
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {...originalModule, useParams: () => ({username: "TimJim"})};
    });

    const wrapper =
      mount(<MemoryRouter><Profile {...initialProps} /></MemoryRouter>);

    await act(async () => {
      Promise.resolve(() => {
        setImmediate(() => wrapper.update());
        expect(mockHistoryPush).not.toHaveBeenCalled();
      })
    });
  });
});