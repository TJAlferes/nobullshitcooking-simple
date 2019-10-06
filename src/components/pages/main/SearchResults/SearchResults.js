import React from 'react';
import { withSearch, Facet, Results, PagingInfo, Paging, ResultsPerPage } from '@elastic/react-search-ui';

import './searchResults.css';

const SearchResults = props => {
  return (
    <div className="results">

      <h1>Search Results</h1>

      <div>{JSON.stringify({...props})}</div>

      <Facet
        field="recipeTypeName"
        label="Recipe Types"
        filterType="any"
        isFilterable={true}
        //view={() => <div>{JSON.stringify({...props})}</div>}
        facets={{
          recipeTypeName: [
            {
              data: [{count: 1, value: "Main"}],
              field: "recipeTypeName",
              type: "value"
            }
          ],
          cuisineName: []
        }}

      />

      <Facet
        field="cuisineName"
        label="Cuisines"
        filterType="any"
        isFilterable={true}
      />

      {props.wasSearched && <ResultsPerPage />}

      {props.wasSearched && <PagingInfo />}
      <Paging />

      <Results />

      {props.wasSearched && <PagingInfo />}
      <Paging />
      
    </div>
  );
};

const mapContextToProps = ({ wasSearched, facets, filters }) => ({wasSearched, facets, filters});

export default withSearch(mapContextToProps)(SearchResults);