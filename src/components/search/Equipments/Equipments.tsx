import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facet,
  PagingInfo,
  Paging,
  ResultsPerPage,
  withSearch
} from '@elastic/react-search-ui';  // Jason should release typings soon

import { ExpandCollapse } from '../../ExpandCollapse/ExpandCollapse';
import './equipments.css';

// TO DO: finish typing and styling

export function SearchResultsEquipment({
  twoColumnBTheme,
  facets,  // ?
  filters,  // ?
  results,
  wasSearched
}: Props) {
  if (!results) return false;
  return (
    <div className={`search-results two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <h1>Equipment</h1>

        <ExpandCollapse headingWhileCollapsed="Filter Results (Click here to expand)">
          <div className="search-results-filters">

            <span className="search-results-filter-title">Filter equipment by:</span>

            <Facet
              field="equipmentTypeName"
              label="Equipment Types"
              filterType="any"
              isFilterable={true}
              show={5}
              facets={{
                equipmentTypeName: [
                  {
                    data: [
                      {count: 1, value: "Cleaning"},
                      {count: 1, value: "Preparing"},
                      {count: 1, value: "Cooking"},
                      {count: 1, value: "Dining"},
                      {count: 1, value: "Storage"}
                    ],
                    field: "equipmentTypeName",
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
              <div className="search-result-equipment" key={rows[0][1].raw}>
                <Link
                  className="search-result-equipment-link"
                  to={`/equipment/${rows[0][1].raw}`}
                >
                  <div className="search-result-equipment-text">
                    <div className="search-result-equipment-text__name">{rows[2][1].raw}</div>
                    <div className="search-result-equipment-text__type">{rows[1][1].raw}</div>
                  </div>
                  <img
                    className="search-result-equipment-image"
                    src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${rows[3][1].raw}.jpg`}
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

export default withSearch(mapContextToProps)(SearchResultsEquipment);