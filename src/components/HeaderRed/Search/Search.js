import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';

import './search.css';
import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';
import { searchSetIndex } from '../../../store/actions/index';

const Search = props => {
  const swapFacadeText = () => {
    var fT = document.getElementById("facade_text");
    var sInsert = document.getElementsByClassName("sui-search-box__text-input")[0];
    var sIndex = document.getElementById("search_prefilter").selectedIndex;
    var x = document.getElementById("search_prefilter").options[sIndex].text;
    let newSearchIndex = `${x}`.toLowerCase();
    props.searchSetIndex(newSearchIndex);  // tighter control here? fast enough?
    // innerHTML is an invitation XSS attacks! dompurify? dangerouslySetInnerHTML?
    fT.innerHTML = x;
    sInsert.focus();
  }

  const redirectToSearchPage = () => {
    props.history.push(`/search-results-${props.currentIndex}`);
  };

  const handleSubmit = () => {
    //await redirectToSearchPage();
    //props.setSearchTerm(props.searchTerm);

    props.setSearchTerm(props.searchTerm);
    redirectToSearchPage();
  };

  let titleField = props.currentIndex === "recipes" ? "title" : "ingredientName";
  let urlField = props.currentIndex === "recipes" ? "title" : "ingredientName";

  return (
    <div className={`search ${props.theme}`} id="search_form">

      <div id="search_category">
        <div id="search_facade">
          <span id="facade_text">Recipes</span>
          <img id="facade_arrow" src={DownArrowGray} />
        </div>
        {/* <Facet view={SingleSelectFacet} /> nested? combined? */}
        <select
          name="search_prefilter"
          id="search_prefilter"
          type="select-one"
          onChange={swapFacadeText}
        >
          {/*
          <option id="search_all" value="search-filter-none">
            All
          </option>
          */}
          <option id="search_recipes" value="search-filter-recipes">
            Recipes
          </option>
          <option id="search_ingredients" value="search-filter-ingredients">
            Ingredients
          </option>
          {/*
          <option id="search_nutrients" value="search-filter-nutrients">
            Nutrients
          </option>
          <option id="search_kitchen_equipment" value="search-filter-kitchen-equipment">
            Kitchen Equipment
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

      <div id="search_insert">
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
                          //await redirectToSearchPage();
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
      Search
    )
  )
);