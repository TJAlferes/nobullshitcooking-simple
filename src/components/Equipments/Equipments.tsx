import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facet,
  PagingInfo,
  Paging,
  ResultsPerPage,
  withSearch
} from '@elastic/react-search-ui';

import { ExpandCollapse } from '../ExpandCollapse/ExpandCollapse';
import './equipments.css';

function listResults(results: any) {
  if (results && results[0] && results[0].equipment_id) {
    return results && results.map((equ: any) => (
      <div className="search-result-equipment" key={equ.equipment_id.raw}>
        <Link
          className="search-result-equipment-link"
          to={`/equipment/${equ.equipment_id.raw}`}
        >
          <div className="search-result-equipment-text">
            <div className="search-result-equipment-text__name">
              {equ.equipment_name.raw}
            </div>
            <div className="search-result-equipment-text__type">
              {equ.equipment_type_name.raw}
            </div>
          </div>
          <img
            className="search-result-equipment-image"
            src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equ.equipment_image.raw}.jpg`}
          />
        </Link>
      </div>
    ));
  } else {
    return <div>Loading...</div>;
  }
}

export function SearchResultsEquipment({
  twoColumnBTheme,
  facets,  // ?
  filters,  // ?
  results,
  wasSearched
}: Props) {
  return (
    <div className={`search-results two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">

        <h1>Equipment</h1>

        <ExpandCollapse
          headingWhileCollapsed="Filter Results (Click here to expand)"
        >
          <div className="search-results-filters">
            <span className="search-results-filter-title">
              Filter equipment by:
            </span>
            <Facet
              field="equipment_type_name"
              label="Equipment Types"
              filterType="any"
              show={5}
              facets={{
                equipment_type_name: [
                  {
                    data: [
                      {count: 1, value: "Cleaning"},
                      {count: 1, value: "Preparing"},
                      {count: 1, value: "Cooking"},
                      {count: 1, value: "Dining"},
                      {count: 1, value: "Storage"}
                    ],
                    field: "equipment_type_name",
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

export default withSearch(mapContextToProps)(SearchResultsEquipment);