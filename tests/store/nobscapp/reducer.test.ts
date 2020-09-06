import { nobscappReducer } from '../../../src/store/nobscapp/reducer';
import { NOBSCAPP_WINDOW_FOCUSED } from '../../../src/store/nobscapp/types';

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