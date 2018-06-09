'use strict';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import getIngredientsReducer from './ingredients';

describe('the get ingredients reducer', () => {

  it('returns initial state', () => {
    const state = getIngredientsReducer(undefined, {});

    expect(state).toEqual({});
  });

  it('handles actions of type INGREDIENTS_REQUEST', () => {
    
  });

  it('handles actions of type INGREDIENTS_SUCCESS', () => {
    
  });

  it('handles actions of type INGREDIENTS_FAIL', () => {
    
  });

});