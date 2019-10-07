import axios from 'axios';

import buildSearchRequest from './buildSearchRequest';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

// TO DO: rename disjunctive to sticky?

function combineAggregationsFromResponses(responses) {
  let here = responses.reduce((acc, response) => ({...acc, ...response.aggregations}), {});
  console.log('HERE: ', here);
  return here;
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
  let responses = [];
  
  // TO DO: don't make request if "not" filter is currently applied
  disjunctiveFacetNames.map(async facetName => {
    let newState = removeFilterByName(state, facetName);
    let body = buildSearchRequest(newState);
    body = changeSizeToZero(body);
    body = removeAllFacetsExcept(body, facetName);
    const res = await axios.post(
      `${endpoint}/search/find/recipes`,
      {body},
      {withCredentials: true}
    );
    responses.push(res.data.found);
  });
  console.log('responses', responses);
  const combinedShit = combineAggregationsFromResponses(responses);
  console.log('combinedShit: ', combinedShit);
  return combinedShit;
}

export default async function applyDisjunctiveFaceting(json, state, disjunctiveFacetNames) {
  const disjunctiveFacetCounts = await getDisjunctiveFacetCounts(state, disjunctiveFacetNames);
  console.log('disjunctiveFacetCounts', disjunctiveFacetCounts);
  return {
    ...json,
    aggregations: {
      ...json.aggregations,
      ...disjunctiveFacetCounts
    }
  };
}