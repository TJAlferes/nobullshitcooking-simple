import React, { Component } from 'react';
import { SearchBox } from '@elastic/react-search-ui';

import './search.css';
import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  // ?

  swapFacadeText = () => {  // edit this
    var fT = document.getElementById("facade_text");
    var sInsert = document.getElementsByClassName("sui-search-box__text-input")[0];
    var sIndex = document.getElementById("search_prefilter").selectedIndex;
    var x = document.getElementById("search_prefilter").options[sIndex].text;
    // don't use this, like, ever!
    // innerHTML is an invitation XSS attacks!
    // (OK if you use dompurify?)
    // dangerouslySetInnerHTML
    fT.innerHTML = x;
    sInsert.focus();
  }

  render() {
    return (
      <div className={`${this.props.theme}`} id="search_form" name="search_form">

        <div id="search_category">
          <div id="search_facade">
            <span id="facade_text">All</span>
            <img id="facade_arrow" src={DownArrowGray} />
          </div>
          <select name="search_prefilter" id="search_prefilter" type="select-one" onChange={this.swapFacadeText}>
            <option id="search_all" value="search-filter-none">All</option>
            <option id="search_recipes" value="search-filter-recipes">Recipes</option>
            <option id="search_ingredients" value="search-filter-ingredients">Ingredients</option>
            <option id="search_nutrients" value="search-filter-nutrients">Nutrients</option>
            <option id="search_kitchen_equipment" value="search-filter-kitchen-equipment">Kitchen Equipment</option>
            <option id="search_fitness_gear" value="search-filter-fitness-gear">Fitness Gear</option>
            <option id="search_exercises" value="search-filter-exercises">Exercises</option>
          </select>
        </div>

        <div id="search_insert">
          <SearchBox
            autocompleteMinimumCharacters={2}
            autocompleteResults={{
              titleField: "title",
              urlField: "title"
            }}
            autocompleteView={props => {
              console.log(props.autocompletedResults);
              return(
                <div className="sui-search-box__autocomplete">
                  <ul className="sui-search-box__results-list">
                    {
                      props.autocompletedResults.map(res => (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: res.id.snippet
                          }}
                        ></li>
                      ))
                    }
                  </ul>
                </div>
              );
            }}
          />
        </div>

      </div>
    );
  }
}

export default Search;