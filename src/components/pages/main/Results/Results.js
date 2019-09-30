import React, { useEffect, useState } from 'react';
import { withSearch, Results, Facet, PagingInfo, Paging, ResultsPerPage } from '@elastic/react-search-ui';

import './results.css';

const Results = props => {
  return (
    <div className="results">
      <h1>Results</h1>
      <Facet
        field="recipe_type"
        label="Recipe Type"
        view={SingleSelectFacet}
      />
      <Facet
        field="cuisine"
        label="Cuisine"
        view={SingleSelectFacet}
      />
      <Results />
      {props.wasSearched && <PagingInfo />}
      {props.wasSearched && <ResultsPerPage />}
      <Paging />
    </div>
  );
};

const mapContextToProps = ({ wasSearched }) => ({wasSearched});

export default withSearch(mapContextToProps)(Results);