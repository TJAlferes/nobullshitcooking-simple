import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSearch, SearchBox } from '@elastic/react-search-ui';
 
import './search.css';
import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';
import { searchSetIndex } from '../../../store/actions/index';

const Search = props => {
  const changeSearchIndex = e => {  // useEffect? useLayoutEffect?
    const sInsert = document.getElementsByClassName("sui-search-box__wrapper")[0].firstChild;
    props.searchSetIndex(e.target.value);
    sInsert.focus();
  }

  const redirectToSearchPage = () => {
    props.history.push(`/search-results-${props.currentIndex}`);
  };

  const handleSubmit = () => {
    props.setSearchTerm(props.searchTerm);
    redirectToSearchPage();
  };

  const getField = () => {
    if (props.currentIndex === "recipes") return "title";
    if (props.currentIndex === "ingredients") return "ingredientName";
    if (props.currentIndex === "equipment") return "equipmentName";
  };

  let capitalizedFirstLetter = `${props.currentIndex}`.slice(0, 1).toUpperCase();
  let otherLetters = `${props.currentIndex}`.slice(1, props.currentIndex.length).toLowerCase();
  let facadeText = `${capitalizedFirstLetter}${otherLetters}`;

  return (
    <div className={`search ${props.theme}`} id="search_form">

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
          inputProps={{placeholder: ""}}
          useAutocomplete={true}
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            titleField: getField(),
            urlField: getField(),
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