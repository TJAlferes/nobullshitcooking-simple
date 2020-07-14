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

  const changeSearchIndex = (e: React.ChangeEvent<HTMLSelectElement>) => {  // useEffect? useLayoutEffect?
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
    <div className={`search ${theme}`} id="search_form">

      <div id="search_category">
        <div id="search_facade">
          <span id="facade_text">{facadeText}</span>
          <img id="facade_arrow" src={DownArrowGray} />
        </div>
        <select
          name="search_prefilter"
          id="search_prefilter"
          //type="select-one" ?
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
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            titleField: field as string,
            urlField: field as string,
            shouldTrackClickThrough: true
          }}
          autocompleteView={(props: any): JSX.Element => (
            <div className="sui-search-box__autocomplete">
              <ul className="sui-search-box__results-list">
                {props.autocompletedResults.map((res: any) => (
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
                  ))}
              </ul>
            </div>
          )}
          inputProps={{placeholder: ""}}
          onSubmit={handleSubmit}
        />
      </div>

    </div>
  );
}

//useAutocomplete={true}

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