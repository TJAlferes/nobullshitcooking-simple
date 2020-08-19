import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { NewContent } from './NewContent';

const data = {

};
const editorClearWork = jest.fn();
const editorSetCreating = jest.fn();
const editorSetEditingId = jest.fn();
const editorSetValue = jest.fn();
const staffCreateNewContent = jest.fn();
const staffEditContent = jest.fn();
const userCreateNewContent = jest.fn();
const userEditContent = jest.fn();

const initialProps = {
  oneColumnATheme: "light",
  staffMessage: "",
  userMessage: "",
  dataContentTypes: [
    {id: 1, parent_id: 0, name: "Page", path: "/page"}
  ],
  value: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}],
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue,
  staffCreateNewContent,
  staffEditContent,
  userCreateNewContent,
  userEditContent
};

window.getSelection = jest.fn();
window.scrollTo = jest.fn();

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, useHistory: () => ({push: mockHistoryPush})};
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockReturnValueOnce(Promise.resolve({data}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewContent', () => {

  describe('when creating', () => {

    describe('when staff is authenticated', () => {
      it('should not redirect to /staff-dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewContent
              creating={true}
              editingId={null}
              editing={false}
              staffIsAuthenticated={true}
              {...initialProps}
            />
          </MemoryRouter>
        );
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });

    describe('when user is authenticated', () => {
      it('should not redirect to /dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewContent
              creating={true}
              editingId={null}
              editing={false}
              staffIsAuthenticated={false}
              {...initialProps}
            />
          </MemoryRouter>
        );
        expect(mockHistoryPush).not.toHaveBeenCalled();
      });
    });

  });

  describe('when editing', () => {

    describe('when staff is authenticated', () => {
      it('should redirect to /staff-dashboard if given no id', () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        mount(
          <MemoryRouter>
            <NewContent
              creating={false}
              editingId={5}
              editing={true}
              staffIsAuthenticated={true}
              {...initialProps}
            />
          </MemoryRouter>
        );
        expect(mockHistoryPush).toHaveBeenCalledWith("/staff-dashboard");
      });
    });

    describe('when user is authenticated', () => {
      it('should redirect to /dashboard if given no id', async () => {
        jest.mock('react-router-dom', () => {
          const originalModule = jest.requireActual('react-router-dom');
          return {...originalModule, useParams: () => ({})};
        });
        const wrapper = mount(
          <MemoryRouter>
            <NewContent
              creating={false}
              editingId={5}
              editing={true}
              staffIsAuthenticated={false}
              {...initialProps}
            />
          </MemoryRouter>
        );
        await act(async () => {
          Promise.resolve(() => {
            setImmediate(() => wrapper.update());
            expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
          });
        });
      });
    });

  });

});