import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchBox, withSearch } from '@elastic/react-search-ui';

import { searchSetIndex } from '../../../../store/search/actions';
import DownArrowGray from '../../../../assets/images/header/down-arrow-gray.png';
import './search.css';

export function Search({
  theme,
  currentIndex,
  searchSetIndex,
  searchTerm,
  setSearchTerm
}: Props): JSX.Element {
  const history = useHistory();

  const changeSearchIndex = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // use responsive design instead of adaptive design?
    //.getElementsByClassName("sui-search-box__wrapper")[1]
    const sInsert = document
    .getElementsByClassName("sui-search-box__wrapper")[0]
    .firstChild as HTMLElement;
    searchSetIndex(e.target.value);
    sInsert.focus();
  }

  const redirectToSearchPage = () => {
    history.push(`/${currentIndex}`);
  };

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 40) return;
    const autocompletedResult = document
    .getElementsByClassName("sui-search-box__results-list")[0]
    .firstChild as HTMLElement;
    autocompletedResult.className = "sui-search-box__result-focused"
    autocompletedResult.focus();
  };

  const handleSubmit = () => {
    setSearchTerm(searchTerm);
    redirectToSearchPage();
  };

  const facadeText =
  currentIndex.charAt(0).toUpperCase() + currentIndex.slice(1);

  let field;
  if (currentIndex === "recipes") field = "title";
  if (currentIndex === "ingredients") field = "ingredient_name";
  if (currentIndex === "equipment") field = "equipment_name";

  return (
    <div className={`search ${theme}`}>

      <div className="search-category">
        <div className="search-facade">
          <span className="facade-text">{facadeText}</span>
          <img className="facade-arrow" src={DownArrowGray} />
        </div>
        <select className="search-prefilters" onChange={changeSearchIndex}>
          <option className="search-prefilter" value="recipes">
            Recipes
          </option>
          <option className="search-prefilter" value="ingredients">
            Ingredients
          </option>
          <option className="search-prefilter" value="equipment">
            Equipment
          </option>
        </select>
      </div>

      <div className="search-insert" onKeyUp={handleKeyNavigation}>
        <SearchBox
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            //clickThroughTags: string[],
            //linkTarget: "",
            //sectionTitle: "",
            shouldTrackClickThrough: true,
            titleField: field as string,
            urlField: field as string
          }}
          //className=""
          inputProps={{placeholder: ""}}
          //onSelectAutocomplete={}
          onSubmit={handleSubmit}
        />
      </div>

    </div>
  );
}

interface RootContext {
  searchTerm: string;
  setSearchTerm: any;
}

interface RootState {
  search: {
    currentIndex: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  theme: string;
  searchTerm: string;
  setSearchTerm: any;
};

const mapContextToProps = ({
  searchTerm,
  setSearchTerm
}: RootContext) => ({
  searchTerm,
  setSearchTerm
});

const mapStateToProps = (state: RootState) => ({
  currentIndex: state.search.currentIndex
});

const mapDispatchToProps = {
  searchSetIndex: (index: string) => searchSetIndex(index)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withSearch(mapContextToProps)(connector(Search));