import React from 'react';
import { withSearch, Facet, PagingInfo, Paging, ResultsPerPage } from '@elastic/react-search-ui';
import { Link } from 'react-router-dom';

import './searchResultsRecipes.css';
import ExpandCollapse from '../../../ExpandCollapse/ExpandCollapse';

export const SearchResultsRecipes = ({
  twoColumnBTheme,
  wasSearched,
  facets,  // ?
  filters,  // ?
  results
}) => {
  return (
    <div className={`search-results two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <h1>Recipes</h1>

        {/* Note to self: the `facets` props below are set incorrectly, fix them */}
        {/*<p>{"props.facets: "}{JSON.stringify(props.facets)}</p>*/}

        <ExpandCollapse headingWhileCollapsed="Filter Results (Click here to expand)">
          <div className="search-results-filters">

            <span className="search-results-filter-title">Filter recipes by:</span>

            <Facet
              field="recipeTypeName"
              label="Recipe Types"
              filterType="any"
              isFilterable={true}
              showSearch={false}
              show={12}
              facets={{
                recipeTypeName: [
                  {
                    data: [
                      {count: 1, value: "Drink"},
                      {count: 1, value: "Appetizer"},
                      {count: 1, value: "Main"},
                      {count: 1, value: "Side"},
                      {count: 1, value: "Dessert"},
                      {count: 1, value: "Soup"},
                      {count: 1, value: "Salad"},
                      {count: 1, value: "Stew"},
                      {count: 1, value: "Casserole"},
                      {count: 1, value: "Sauce"},
                      {count: 1, value: "Dressing"},
                      {count: 1, value: "Condiment"}
                    ],
                    field: "recipeTypeName",
                    type: "value"
                  }
                ]
              }}
            />

            <Facet
              field="cuisineName"
              label="Cuisines"
              filterType="any"
              isFilterable={true}
              showSearch={false}
              show={24}
              facets={{
                cuisineName: [
                  {
                    data: [
                      {count: 1, value: "Russian"},
                      {count: 1, value: "German"},
                      {count: 1, value: "Turkish"},
                      {count: 1, value: "French"},
                      {count: 1, value: "Italian"},
                      {count: 1, value: "Mexican"},
                      {count: 1, value: "Greek"},
                      {count: 1, value: "Irish"},
                      {count: 1, value: "Chinese"},
                      {count: 1, value: "Indian"},
                      {count: 1, value: "Japanese"},
                      {count: 1, value: "Iranian"},
                      {count: 1, value: "Spanish"},
                      {count: 1, value: "Thai"},
                      {count: 1, value: "Vietnamese"},
                      {count: 1, value: "Korean"},
                      {count: 1, value: "Swedish"},
                      {count: 1, value: "Norwegian"},
                      {count: 1, value: "Polish"},
                      {count: 1, value: "Hungarian"},
                      {count: 1, value: "Brazilian"},
                      {count: 1, value: "Argentinian"},
                      {count: 1, value: "Nigerian"},
                      {count: 1, value: "Other"}
                    ],
                    field: "cuisineName",
                    type: "value"
                  },
                ]
              }}
            />

            <Facet
              field="methodNames"
              label="Methods"
              filterType="any"
              isFilterable={true}
              showSearch={false}
              show={24}
              facets={{
                methodNames: [
                  {
                    data: [
                      {count: 1, value: "No-Cook"},
                      {count: 1, value: "Chill"},
                      {count: 1, value: "Freeze"},
                      {count: 1, value: "Microwave"},
                      {count: 1, value: "Toast"},
                      {count: 1, value: "Steam"},
                      {count: 1, value: "Poach"},
                      {count: 1, value: "Simmer"},
                      {count: 1, value: "Boil"},
                      {count: 1, value: "Blanch"},
                      {count: 1, value: "Stew"},
                      {count: 1, value: "Braise"},
                      {count: 1, value: "Bake"},
                      {count: 1, value: "Roast"},
                      {count: 1, value: "Broil"},
                      {count: 1, value: "Saute"},
                      {count: 1, value: "Pan-Fry"},
                      {count: 1, value: "Shallow-Fry"},
                      {count: 1, value: "Deep-Fry"},
                      {count: 1, value: "Stir-Fry"},
                      {count: 1, value: "Glaze"},
                      {count: 1, value: "BBQ"},
                      {count: 1, value: "Grill"},
                      {count: 1, value: "Smoke"}
                    ],
                    field: "methodNames",
                    type: "value"
                  },
                ]
              }}
            />

          </div>
        </ExpandCollapse>

        {wasSearched && <ResultsPerPage />}

        {wasSearched && <PagingInfo />}
        <Paging />

        <div className="search-results-list">
          {results.map(result => {
            let rows = Object.entries(result);
            return (
              <div className="search-result-recipe" key={rows[0][1].raw}>
                <Link
                  className="search-result-recipe-link"
                  to={`/recipes/${rows[0][1].raw}`}
                >
                  <div className="search-result-recipe-text">
                    <div className="search-result-recipe-text__title">
                      {rows[4] && rows[4][1].raw}
                    </div>
                    <div className="search-result-recipe-text__author">
                      {rows[1][1].raw}
                    </div>

                    <div className="search-result-recipe-text__types">
                      <div className="search-result-recipe-text__types-cuisine">
                        {rows[3][1].raw}
                      </div>
                      <div className="search-result-recipe-text__types-recipe-type">
                        {rows[2][1].raw}
                      </div>
                    </div>

                    <div className="search-result-recipe-text__tags">
                      <div className="search-result-recipe-text__tags-methods">
                        {rows[8] && rows[8][1].raw.map(method => (
                          <span
                            className="search-result-recipe-text__tags-method"
                            key={method}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                      <div className="search-result-recipe-text__tags-ingredients">
                        {rows[10] && rows[10][1].raw.map(ingredient => (
                          <span
                            className="search-result-recipe-text__tags-ingredient"
                            key={ingredient}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {
                    (rows[7] && (rows[7][1].raw !== "nobsc-recipe-default"))
                    ? (
                      <img
                        className="search-result-recipe-image"
                        src={`https://s3.amazonaws.com/nobsc-user-recipe/${rows[7] && rows[7][1].raw}-thumb`}
                      />
                    )
                    : <div className="image-default-100-62"></div>
                  }
                </Link>
              </div>
            );
          })}
        </div>

        {wasSearched && <PagingInfo />}
        <Paging />

      </div>

      <div className="right-column">
      </div>
      
    </div>
  );
};

const mapContextToProps = ({ wasSearched, facets, filters, results }) => ({
  wasSearched,
  facets,
  filters,
  results
});

export default withSearch(mapContextToProps)(SearchResultsRecipes);