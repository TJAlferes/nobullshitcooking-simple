import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { buildSearchRequest } from './buildSearchRequest';

/*
This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch
*/

const endpoint = NOBSCBackendAPIEndpointOne;

function combineAggregationsFromResponses(responses) {
  return responses.reduce(
    (acc, response) => ({...acc, ...response.aggregations}),
    {}
  );
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

async function getDisjunctiveFacetCounts(
  state,
  disjunctiveFacetNames,
  currentIndex
) {
  let responses = [];

  // TO DO: don't make request if "not" filter is currently applied
  disjunctiveFacetNames.map(async facetName => {
    let newState = removeFilterByName(state, facetName);
    let body = buildSearchRequest(newState, currentIndex);
    body = changeSizeToZero(body);
    body = removeAllFacetsExcept(body, facetName);
    const res = await axios.post(
      `${endpoint}/search/find/${currentIndex}`,
      {body},
      {withCredentials: true}
    );
    responses.push(res.data.found);
  });

  return combineAggregationsFromResponses(responses);
}

export async function applyDisjunctiveFaceting(
  json,
  state,
  disjunctiveFacetNames,
  currentIndex
) {
  const disjunctiveFacetCounts = await getDisjunctiveFacetCounts(
    state,
    disjunctiveFacetNames,
    currentIndex
  );

  return {
    ...json,
    aggregations: {
      ...json.aggregations,
      ...disjunctiveFacetCounts
    }
  };
}