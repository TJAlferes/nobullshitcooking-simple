import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';

import './search.css';
import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';

const Search = props => {
  const swapFacadeText = () => {
    var fT = document.getElementById("facade_text");
    var sInsert = document.getElementsByClassName("sui-search-box__text-input")[0];
    var sIndex = document.getElementById("search_prefilter").selectedIndex;
    var x = document.getElementById("search_prefilter").options[sIndex].text;
    // innerHTML is an invitation XSS attacks! dompurify? dangerouslySetInnerHTML?
    fT.innerHTML = x;
    sInsert.focus();
  }

  const redirectToSearchPage = async () => props.history.push('/search-results');

  const handleSubmit = async () => {
    await redirectToSearchPage();
    props.setSearchTerm(props.searchTerm);
  };

  return (
    <div className={`search ${props.theme}`} id="search_form">

      <div id="search_category">
        <div id="search_facade">
          <span id="facade_text">All</span>
          <img id="facade_arrow" src={DownArrowGray} />
        </div>
        <select
          name="search_prefilter"
          id="search_prefilter"
          type="select-one"
          onChange={swapFacadeText}
        >
          <option id="search_all" value="search-filter-none">
            All
          </option>
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
            titleField: "title",
            urlField: "title",
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
                        onClick={async () => {
                          await redirectToSearchPage();
                          props.setSearchTerm(res.id.raw);
                          props.closeMenu();
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

export default withRouter(withSearch(mapContextToProps)(Search));