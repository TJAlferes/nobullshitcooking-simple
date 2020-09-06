import {  } from 'enzyme';

import { Search } from '../../../../../../src/components/App/Header/desktop/Search/Search';

const searchSetIndex = jest.fn();
const setSearchTerm = jest.fn();

const initialProps = {
  currentIndex: "recipes",
  searchSetIndex,
  searchTerm: "appl",
  setSearchTerm,
  theme: "light"
};

describe('Search', () => {
  it('needs testing', () => {
    
  });
});