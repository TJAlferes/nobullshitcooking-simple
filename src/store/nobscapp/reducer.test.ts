import { nobscappReducer } from './reducer';
import { NOBSCAPP_WINDOW_FOCUSED } from './types';

describe('nobscapp reducer', () => {
  it('returns initial state', () => {
    expect(nobscappReducer(undefined, {
      type: NOBSCAPP_WINDOW_FOCUSED,
      condition: false
    })).toEqual({windowFocused: false});
  });

  it('handles actions of type NOBSCAPP_WINDOW_FOCUSED', () => {
    const initialState = {windowFocused: true};
    
    expect(nobscappReducer(initialState, {
      type: NOBSCAPP_WINDOW_FOCUSED,
      condition: false
    })).toEqual({windowFocused: false});
  });
});