import { SearchBox, withSearch } from '@elastic/react-search-ui';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';

import DownArrowGray from '../../../../../assets/images/header/down-arrow-gray.png';
import { searchSetIndex } from '../../../../../store/search/actions';
import { AutocompleteView } from './views/AutocompleteView';
import './search.css';

export function Search({
  currentIndex,
  searchSetIndex,
  searchTerm,
  setSearchTerm,
  theme
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

  const handleSelectAutocomplete = (selection: any) => {
    setSearchTerm(selection[field as string].raw);
    history.push(`/${currentIndex}`);
  };

  const handleSubmit = () => {
    setSearchTerm(searchTerm);
    redirectToSearchPage();
  };

  const redirectToSearchPage = () => {
    history.push(`/${currentIndex}`);
  };

  const facadeText =
    currentIndex.charAt(0).toUpperCase() + currentIndex.slice(1);

  let field: string | undefined;

  if (currentIndex === "recipes") field = "title";
  if (currentIndex === "ingredients") field = "ingredient_fullname";
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

      <div className="search-insert">
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
          autocompleteView={AutocompleteView}
          //className=""
          inputProps={{placeholder: ""}}
          onSelectAutocomplete={handleSelectAutocomplete}
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
  searchTerm: string;
  setSearchTerm: any;
  theme: string;
};

const mapContextToProps = ({ searchTerm, setSearchTerm }: RootContext) => ({
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