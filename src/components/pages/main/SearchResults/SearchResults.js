import React, { useEffect, useState } from 'react';
import { withSearch, Results, Facet, PagingInfo, Paging, ResultsPerPage } from '@elastic/react-search-ui';
import { MultiCheckboxFacet } from '@elastic/react-search-ui-views';

import './searchResults.css';

const SearchResults = props => {
  return (
    <div className="results">
      <h1>Results</h1>
      <Facet
        field="recipeType"
        label="Recipe Type"
        view={MultiCheckboxFacet}
      />
      <Facet
        field="cuisine"
        label="Cuisine"
        view={MultiCheckboxFacet}
      />
      <Results />
      {props.wasSearched && <PagingInfo />}
      {props.wasSearched && <ResultsPerPage />}
      <Paging />
    </div>
  );
};

const mapContextToProps = ({ wasSearched }) => ({wasSearched});

export default withSearch(mapContextToProps)(SearchResults);