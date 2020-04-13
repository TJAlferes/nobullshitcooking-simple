export const SEARCH_SET_INDEX = 'SEARCH_SET_INDEX' as const;

export interface ISearchState {
  currentIndex: string
}

export type ISearchActions = ISetSearchIndex;

interface ISetSearchIndex {
  type: typeof SEARCH_SET_INDEX
  index: string
}