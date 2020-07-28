import { mount } from 'enzyme';
import React from 'react';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import MultiBackend, { DndProvider } from 'react-dnd-multi-backend';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import { rootReducer } from '../../../../../store/rootReducer';
import Day from './Day';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const store = storeFactory();

/*

Note (July 27th 2020):
We use a fragment in mount because of a bug in Enzyme
https://github.com/enzymejs/enzyme/issues/1852

*/

const plannerClickDay = jest.fn();
const plannerAddRecipeToDay = jest.fn();
const beginProps = {
  day: 1,
  list: [],
  expanded: false,
  expandedDay: null,
  plannerAddRecipeToDay,
  plannerClickDay,
  canDrop: false,
  isOver: false
};

describe('Day', () => {
  it('does something', async () => {
    mount(
      <DndProvider options={HTML5toTouch}>
        <Provider store={store}>
          <Day {...beginProps} />
        </Provider>
      </DndProvider>
    );
    expect(1).toEqual(1);
  });
});