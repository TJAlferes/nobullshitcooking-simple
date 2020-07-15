import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facet,
  PagingInfo,
  Paging,
  ResultsPerPage,
  withSearch,
} from '@elastic/react-search-ui';

import { ExpandCollapse } from '../../ExpandCollapse/ExpandCollapse';
import './recipes.css';

function listResults(results: any) {
  if (results && results[0] && results[0].recipe_id) {
    return results.map((rec: any) => (
      <div className="search-result-recipe" key={rec.recipe_id.raw}>
        <Link
          className="search-result-recipe-link"
          to={`/recipe/${rec.recipe_id.raw}`}
        >
          <div className="search-result-recipe-text">
            <div className="search-result-recipe-text__title">
              {rec.title.raw}
            </div>
            <div className="search-result-recipe-text__author">
              {rec.author.raw}
            </div>

            <div className="search-result-recipe-text__types">
              <div className="search-result-recipe-text__types-cuisine">
                {rec.cuisine_name.raw}
              </div>
              <div className="search-result-recipe-text__types-recipe-type">
                {rec.recipe_type_name.raw}
              </div>
            </div>

            <div className="search-result-recipe-text__tags">
              <div className="search-result-recipe-text__tags-methods">
                {rec.method_names.raw.map((method: any) => (
                  <span
                    className="search-result-recipe-text__tags-method"
                    key={method}
                  >
                    {method}
                  </span>
                ))}
              </div>
              <div className="search-result-recipe-text__tags-ingredients">
                {rec.ingredient_names.raw.map((ingredient: any) => (
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
            (rec.recipe_image.raw !== "nobsc-recipe-default")
            ? (
              <img
                className="search-result-recipe-image"
                src={`https://s3.amazonaws.com/nobsc-user-recipe/${rec.recipe_image.raw}-thumb`}
              />
            )
            : <div className="image-default-100-62"></div>
          }
        </Link>
      </div>
    ));
  } else {
    return <div>Loading...</div>;
  }
}

export function SearchResultsRecipes({
  twoColumnBTheme,
  facets,  // ?
  filters,  // ?
  results,
  wasSearched
}: Props) {
  return (
    <div className={`search-results two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <h1>Recipes</h1>

        {/* Note to self: the `facets` props below are set incorrectly, fix them */}
        {/*<p>{"props.facets: "}{JSON.stringify(props.facets)}</p>*/}

        <ExpandCollapse
          headingWhileCollapsed="Filter Results (Click here to expand)"
        >
          <div className="search-results-filters">
            <span className="search-results-filter-title">
              Filter recipes by:
            </span>
            <Facet
              field="recipe_type_name"
              label="Recipe Types"
              filterType="any"
              show={12}
              facets={{
                recipe_type_name: [
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
                    field: "recipe_type_name",
                    type: "value"
                  }
                ]
              }}
            />
            <Facet
              field="cuisine_name"
              label="Cuisines"
              filterType="any"
              show={24}
              facets={{
                cuisine_name: [
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
                    field: "cuisine_name",
                    type: "value"
                  },
                ]
              }}
            />
            <Facet
              field="method_names"
              label="Methods"
              filterType="any"
              show={24}
              facets={{
                method_names: [
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
                    field: "method_names",
                    type: "value"
                  },
                ]
              }}
            />
          </div>
        </ExpandCollapse>

        {wasSearched && <ResultsPerPage options={[20, 50, 100]} />}
        {wasSearched && <PagingInfo />}
        <Paging />

        <div className="search-results-list">
          {listResults(results)}
        </div>

        {wasSearched && <PagingInfo />}
        <Paging />

      </div>

      <div className="right-column">
      </div>
      
    </div>
  );
}

type PropsFromContext = {
  facets: any;
  filters: any;
  results: any;
  wasSearched: boolean;
}

type Props = PropsFromContext & {
  twoColumnBTheme: string;
};

const mapContextToProps = ({
  facets,
  filters,
  results,
  wasSearched
}: PropsFromContext) => ({
  facets,
  filters,
  results,
  wasSearched
});

export default withSearch(mapContextToProps)(SearchResultsRecipes);