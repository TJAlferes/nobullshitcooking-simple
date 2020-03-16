export const SEARCH_SET_INDEX = 'SEARCH_SET_INDEX';

export interface SearchState {
  currentIndex: string
}

export type SearchActions = SetSearchIndex;

interface SetSearchIndex {
  type: typeof SEARCH_SET_INDEX
  index: string
}