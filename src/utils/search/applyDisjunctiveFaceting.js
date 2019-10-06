import axios from 'axios';

import buildRequest from './buildRequest';

/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

// TO DO: rename disjunctive to sticky?

function combineAggregationsFromResponses(responses) {
  return responses.reduce((acc, response) => ({...acc, ...response.aggregations}), {});
}

function removeFilterByName(state, facetName) {
  return {...state, filters: state.filters.filter(f => f.field !== facetName)};
}

function removeAllFacetsExcept(body, facetName) {
  return {...body, aggs: {[facetName]: body.aggs[facetName]}};
}

function changeSizeToZero(body) {
  return {...body, size: 0};
}

async function getDisjunctiveFacetCounts(state, disjunctiveFacetNames) {
  const responses = await Promise.all(
    // TO DO: don't make request if "not" filter is currently applied
    disjunctiveFacetNames.map(facetName => {
      let newState = removeFilterByName(state, facetName);
      let body = buildRequest(newState);
      body = changeSizeToZero(body);
      body = removeAllFacetsExcept(body, facetName);
      return axios.post(
        `${endpoint}/search/find/recipes`,
        body,
        {withCredentials: true}
      );
    })
  );
  return combineAggregationsFromResponses(responses);
}

export default async function applyDisjunctiveFaceting(json, state, disjunctiveFacetNames) {
  const disjunctiveFacetCounts = await getDisjunctiveFacetCounts(state, disjunctiveFacetNames);
  return {
    ...json,
    aggregations: {
      ...json.aggregations,
      ...disjunctiveFacetCounts
    }
  };
}