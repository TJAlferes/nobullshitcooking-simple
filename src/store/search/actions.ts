import { SEARCH_SET_INDEX } from './types';

export const searchSetIndex = (index: string) => ({
  type: SEARCH_SET_INDEX,
  index
});