import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { buildSearchRequest } from './buildSearchRequest';

const endpoint = NOBSCBackendAPIEndpointOne;

function combineAggregationsFromResponses(responses: any) {
  return responses.reduce((acc: any, response: any) => ({
    ...acc,
    ...response.aggregations
  }), {});
}

function removeFilterByName(state: any, facetName: string) {
  return {
    ...state,
    filters: state.filters.filter((f: any) => f.field !== facetName)
  };
}

function removeAllFacetsExcept(body: any, facetName: string) {
  return {
    ...body,
    aggs: {
      [facetName]: body.aggs[facetName]
    }
  };
}

function changeSizeToZero(body: any) {
  return {...body, size: 0};
}

async function getDisjunctiveFacetCounts(
  state: any,
  disjunctiveFacetNames: any,
  currentIndex: string
) {
  let responses: any = [];

  // TO DO: don't make request if "not" filter is currently applied
  // TO DO: await Promise.all([])
  disjunctiveFacetNames.map(async (facetName: string) => {
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
  json: any,
  state: any,
  disjunctiveFacetNames: any,
  currentIndex: string
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