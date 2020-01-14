import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';

import { searchSetIndex } from '../../../../store/actions/index';

import DownArrowGray from '../../../../assets/images/header/down-arrow-gray.png';

import './mobileSearch.css';

const MobileSearch = ({
  theme,
  history,
  currentIndex,
  searchSetIndex,
  searchTerm,
  setSearchTerm
}) => {
  const changeSearchIndex = e => {  // useEffect? useLayoutEffect?
    const sInsert = document
    .getElementsByClassName("sui-search-box__wrapper")[0].firstChild;
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
    <div className={`mobile-search ${theme}`}>

      <div id="mobile-search-category">
        <div id="mobile-search-facade">
          <span id="mobile-search-facade__text">{facadeText}</span>
          <img id="mobile-search-facade__arrow" src={DownArrowGray} />
        </div>
        <select
          id="mobile-search-prefilter"
          name="search_prefilter"
          type="select-one"
          onChange={changeSearchIndex}
        >
          <option id="search_recipes" value="recipes">
            Recipes
          </option>
          <option id="search_ingredients" value="ingredients">
            Ingredients
          </option>
          <option id="search_kitchen_equipment" value="equipment">
            Equipment
          </option>
        </select>
      </div>

      <div className="mobile-search-insert">
        <SearchBox
          onSubmit={handleSubmit}
          inputProps={{
            placeholder: "",
            //className: "mobile-sui-search-box__text-input",
          }}
          buttonProps={{
            className: "mobile-sui-search-box__submit"
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
          /*inputView={({ getAutocomplete, getInputProps }) => (
            <>
              <div className="mobile-sui-search-box__wrapper">
                <input
                  {...getInputProps()}
                />
                {getAutocomplete()}
              </div>
              <button className="mobile-sui-search-box__submit">
                <span className="magnifying-glass"></span>
              </button>
            </>
          )}*/
        />
        <div className="magnifying-glass-holder" onClick={handleSubmit}>
          <span className="magnifying-glass"></span>
        </div>
      </div>

    </div>
  );
}

const mapContextToProps = ({ searchTerm, setSearchTerm }) => ({
  searchTerm,
  setSearchTerm
});

const mapStateToProps = state => ({currentIndex: state.search.currentIndex});

const mapDispatchToProps = dispatch => ({
  searchSetIndex: (index) => dispatch(searchSetIndex(index))
});

export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps
  )(
    withSearch(
      mapContextToProps
    )(
      MobileSearch
    )
  )
);