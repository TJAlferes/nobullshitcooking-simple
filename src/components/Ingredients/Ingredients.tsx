import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facet,
  PagingInfo,
  Paging,
  ResultsPerPage,
  withSearch,
} from '@elastic/react-search-ui';

import { ExpandCollapse } from '../ExpandCollapse/ExpandCollapse';
import './ingredients.css';

function listResults(results: any) {
  if (results && results[0] && results[0].ingredient_id) {
    return results.map((ing: any) => (
      <div className="search-result-ingredient" key={ing.ingredient_id.raw}>
        <Link
          className="search-result-ingredient-link"
          to={`/ingredient/${ing.ingredient_id.raw}`}
        >
          <div className="search-result-ingredient-text">
            <div className="search-result-ingredient-text__name">
              {ing.ingredient_brand.raw && ing.ingredient_brand.raw}
              {' '}
              {ing.ingredient_variety.raw && ing.ingredient_variety.raw}
              {' '}
              {ing.ingredient_name.raw}
            </div>
            <div className="search-result-ingredient-text__type">
              {ing.ingredient_type_name.raw}
            </div>
          </div>
          <img
            className="search-result-ingredient-image"
            src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ing.ingredient_image.raw}.jpg`}
          />
        </Link>
      </div>
    ));
  } else {
    return <div>Loading...</div>;
  }
}

export function SearchResultsIngredients({
  twoColumnBTheme,
  facets,  // ?
  filters,  // ?
  results,
  wasSearched
}: Props) {
  return (
    <div className={`search-results two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <h1>Ingredients</h1>

        <ExpandCollapse
          headingWhileCollapsed="Filter Results (Click here to expand)"
        >
          <div className="search-results-filters">
            <span className="search-results-filter-title">
              Filter ingredients by:
            </span>
            <Facet
              field="ingredient_type_name"
              label="Ingredient Types"
              filterType="any"
              show={18}
              facets={{
                ingredient_type_name: [
                  {
                    data: [
                      {count: 1, value: "Fish"},
                      {count: 1, value: "Shellfish"},
                      {count: 1, value: "Beef"},
                      {count: 1, value: "Pork"},
                      {count: 1, value: "Poultry"},
                      {count: 1, value: "Egg"},
                      {count: 1, value: "Dairy"},
                      {count: 1, value: "Oil"},
                      {count: 1, value: "Grain"},
                      {count: 1, value: "Bean"},
                      {count: 1, value: "Vegetable"},
                      {count: 1, value: "Fruit"},
                      {count: 1, value: "Nut"},
                      {count: 1, value: "Seed"},
                      {count: 1, value: "Spice"},
                      {count: 1, value: "Herb"},
                      {count: 1, value: "Acid"},
                      {count: 1, value: "Product"}
                    ],
                    field: "ingredient_type_name",
                    type: "value"
                  }
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

export default withSearch(mapContextToProps)(SearchResultsIngredients);