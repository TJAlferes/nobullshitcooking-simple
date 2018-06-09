'use strict';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import colorsReducer from './ingredients';

describe('the colors reducer', () => {

  it('returns initial state', () => {
    const state = getIngredientsReducer(undefined, {});

    expect(state).toEqual({});
  });

  it('handles actions of type ADD_COLOR', () => {
    
  });

  it('handles actions of type RATE_COLOR', () => {
    
  });

  it('handles actions of type REMOVE_COLOR', () => {
    
  });

});