import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';

import './mobileSearch.css';
import DownArrowGray from '../../../../assets/images/header/down-arrow-gray.png';
import { searchSetIndex } from '../../../../store/actions/index';

const MobileSearch = props => {
  const swapFacadeText = () => {  // useEffect? useLayoutEffect?  RENAME NOW
    const sInsert = document.getElementsByClassName("mobile-sui-search-box__wrapper")[0].firstChild;
    const sIndex = document.getElementById("mobile-search-prefilter").selectedIndex;
    const x = document.getElementById("mobile-search-prefilter").options[sIndex].text;
    const newSearchIndex = `${x}`.toLowerCase();
    props.searchSetIndex(newSearchIndex);  // tighter control here? fast enough?
    // innerHTML is an invitation XSS attacks! dompurify? dangerouslySetInnerHTML?
    sInsert.focus();
  }

  const redirectToSearchPage = () => {
    props.history.push(`/search-results-${props.currentIndex}`);
  };

  const handleSubmit = () => {
    props.setSearchTerm(props.searchTerm);
    redirectToSearchPage();
  };

  let capitalizedFirstLetter = `${props.currentIndex}`.slice(0, 1).toUpperCase();
  let otherLetters = `${props.currentIndex}`.slice(1, props.currentIndex.length).toLowerCase();
  let facadeText = `${capitalizedFirstLetter}${otherLetters}`;
  let titleField = props.currentIndex === "recipes" ? "title" : "ingredientName";
  let urlField = props.currentIndex === "recipes" ? "title" : "ingredientName";

  return (
    <div className={`mobile-search ${props.theme}`}>

      <div id="mobile-search-category">
        <div id="mobile-search-facade">
          <span id="mobile-search-facade__text">{facadeText}</span>
          <img id="mobile-search-facade__arrow" src={DownArrowGray} />
        </div>
        <select
          id="mobile-search-prefilter"
          name="search_prefilter"
          type="select-one"
          onChange={swapFacadeText}
        >
          <option id="search_recipes" value="recipes">
            Recipes
          </option>
          <option id="search_ingredients" value="ingredients">
            Ingredients
          </option>
        </select>
      </div>

      <div className="mobile-search-insert">
        <SearchBox
          onSubmit={handleSubmit}
          inputProps={{placeholder: ""}}
          useAutocomplete={true}
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            titleField,
            urlField,
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
          inputView={({ getAutocomplete, getInputProps }) => (
            <>
              <div className="mobile-sui-search-box__wrapper">
                <input {...getInputProps()} />
                {getAutocomplete()}
              </div>
              <button className="mobile-sui-search-box__submit">
                <span className="magnifying-glass"></span>
              </button>
            </>
          )}
        />
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