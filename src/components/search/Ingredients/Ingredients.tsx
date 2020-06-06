import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facet,
  PagingInfo,
  Paging,
  ResultsPerPage,
  withSearch,
} from '@elastic/react-search-ui';  // Jason should release typings soon

import { ExpandCollapse } from '../../ExpandCollapse/ExpandCollapse';
import './ingredients.css';

// TO DO: finish typing and styling

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

        <ExpandCollapse headingWhileCollapsed="Filter Results (Click here to expand)">
          <div className="search-results-filters">

            <span className="search-results-filter-title">Filter ingredients by:</span>

            <Facet
              field="ingredientTypeName"
              label="Ingredient Types"
              filterType="any"
              isFilterable={true}
              showSearch={false}
              show={18}
              facets={{
                ingredientTypeName: [
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
                    field: "ingredientTypeName",
                    type: "value"
                  }
                ]
              }}
            />

          </div>
        </ExpandCollapse>

        {wasSearched && <ResultsPerPage />}

        {wasSearched && <PagingInfo />}
        <Paging />

        <div className="search-results-list">
          {results.map((result: any) => {
            const rows = Object.entries<any>(result);
            return (
              <div className="search-result-ingredient" key={rows[0][1].raw}>
                <Link
                  className="search-result-ingredient-link"
                  to={`/ingredients/${rows[0][1].raw}`}
                >
                  <div className="search-result-ingredient-text">
                    <div className="search-result-ingredient-text__name">{rows[2][1].raw}</div>
                    <div className="search-result-ingredient-text__type">{rows[1][1].raw}</div>
                  </div>
                  <img
                    className="search-result-ingredient-image"
                    src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${rows[3][1].raw}.jpg`}
                  />
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