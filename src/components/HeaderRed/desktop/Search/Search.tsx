import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';

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

  const changeSearchIndex = (e: ) => {  // useEffect? useLayoutEffect?
    const sInsert = document
    .getElementsByClassName("sui-search-box__wrapper")[1].firstChild;
    searchSetIndex(e.target.value);
    sInsert.focus();
  }

  const redirectToSearchPage = () => {
    history.push(`/${currentIndex}`);
  };

  const handleSubmit = () => {
    setSearchTerm(searchTerm);
    redirectToSearchPage();
  };

  let capitalizedFirstLetter = `${currentIndex}`.slice(0, 1).toUpperCase();
  let otherLetters = `${currentIndex}`.slice(1, currentIndex.length).toLowerCase();
  let facadeText = `${capitalizedFirstLetter}${otherLetters}`;
  let field;

  if (currentIndex === "recipes") field = "title";
  if (currentIndex === "ingredients") field = "ingredientName";
  if (currentIndex === "equipment") field = "equipmentName";

  return (
    <div className={`search ${theme}`} id="search_form">

      <div id="search_category">
        <div id="search_facade">
          <span id="facade_text">{facadeText}</span>
          <img id="facade_arrow" src={DownArrowGray} />
        </div>
        <select
          name="search_prefilter"
          id="search_prefilter"
          type="select-one"
          onChange={changeSearchIndex}
        >
          {/*
          <option id="search_all" value="search-filter-none">
            All
          </option>
          */}
          <option id="search_recipes" value="recipes">
            Recipes
          </option>
          <option id="search_ingredients" value="ingredients">
            Ingredients
          </option>
          <option id="search_kitchen_equipment" value="equipment">
            Equipment
          </option>
          {/*
          <option id="search_nutrients" value="search-filter-nutrients">
            Nutrients
          </option>
          <option id="search_fitness_gear" value="search-filter-fitness-gear">
            Fitness Gear
          </option>
          <option id="search_exercises" value="search-filter-exercises">
            Exercises
          </option>
          */}
        </select>
      </div>

      <div className="search-insert">
        <SearchBox
          onSubmit={handleSubmit}
          inputProps={{
            placeholder: ""
          }}
          useAutocomplete={true}
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            titleField: field,
            urlField: field,
            shouldTrackClickThrough: true
          }}
          autocompleteView={props => {
            return (
              <div className="sui-search-box__autocomplete">
                <ul className="sui-search-box__results-list">
                  {props.autocompletedResults.map(res => {
                    return (
                      <li
                        key={res.id.raw}
                        dangerouslySetInnerHTML={{__html: res.id.snippet}}
                        onClick={() => {
                          props.setSearchTerm(res.id.raw);
                          props.closeMenu();
                          redirectToSearchPage();
                        }}
                      >
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }}
          /*inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
            <>
              <div className="desktop-sui-search-box__wrapper">
                <input
                  {...getInputProps()}
                />
                {getAutocomplete()}
              </div>
              <button className="sui-search-box__submit" {...getButtonProps()}>
                Search
              </button>
            </>
          )}*/
        />
      </div>

    </div>
  );
}

interface RootState {
  search: {
    currentIndex: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  theme: string;
  //searchTerm,
  //setSearchTerm
};

const mapContextToProps = ({ searchTerm, setSearchTerm }) => ({
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

export default connector(withSearch(mapContextToProps)(Search));