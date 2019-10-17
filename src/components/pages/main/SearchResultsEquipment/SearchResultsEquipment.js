import React from 'react';
import { withSearch, Facet, PagingInfo, Paging, ResultsPerPage } from '@elastic/react-search-ui';
import { Link } from 'react-router-dom';

import './searchResultsEquipment.css';
import ExpandCollapse from '../../../ExpandCollapse/ExpandCollapse';

const SearchResultsEquipment = props => {
  return (
    <div className={`search-results two-column-b ${props.twoColumnBTheme}`}>

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
              showSearch={false}
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

        {props.wasSearched && <ResultsPerPage />}

        {props.wasSearched && <PagingInfo />}
        <Paging />

        <div className="search-results-list">
          {props.results.map(result => {
            let rows = Object.entries(result);
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

        {props.wasSearched && <PagingInfo />}
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

export default withSearch(mapContextToProps)(SearchResultsEquipment);