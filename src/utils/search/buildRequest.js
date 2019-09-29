/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

function buildMatch(searchTerm) {
  return searchTerm
  ? {match: {query: searchTerm}}
  : {match_all: {}}
}

function buildFrom(current, resultsPerPage) {
  if (!current || !resultsPerPage) return;
  return (current - 1) * resultsPerPage;
}

function getTermFilterValue(field, fieldValue) {
  if (fieldValue === "false" || fieldValue === "true") {
    return {[field]: fieldValue === "true"};  // ?
  }
  return {[`${field}.keyword`]: fieldValue};  // ?
}

function getTermFilter(filter) {
  if (filter.type === "any") {
    return {
      bool: {
        should: [
          filter.values.map(filterValue => ({
            term: getTermFilterValue(filter.field, filterValue)
          }))
        ],
        minimum_should_match: 1
      }
    };
  } else if (filter.type === "all") {
    return {
      bool: {
        filter: [
          filter.values.map(filterValue => ({
            term: getTermFilterValue(filter.field, filterValue)
          }))
        ]
      }
    };
  }
}

function buildRequestFilter(filters) {
  if (!filters) return;
  filters = filters.reduce((acc, filter) => {
    if (["recipeTypes", "cuisines"].includes(filter.field)) {
      return [...acc, getTermFilter(filter)];
    }
  }, []);  // ?
  if (filters.length < 1) return;
  return filters;
}

export default function buildRequest(state) {
  const { searchTerm, filters, current, resultsPerPage } = state;
  const match = buildMatch(searchTerm);
  const filter = buildRequestFilter(filters);
  const from = buildFrom(current, resultsPerPage);  // starting
  const size = resultsPerPage;  // limit
  const body = {
    //_source: ["title"],
    //highlight: {},
    //aggs: {},
    query: {
      bool: {
        must: [match],
        ...(filter && {filter})
      }
    },
    ...(from && {from}),
    ...(size && {size})
  };
  return body;
}