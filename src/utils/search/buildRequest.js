/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

function buildMatch(searchTerm) {
  // multi_match? (more than just title (description, methodNames, ingredientNames, etc.))
  //{multi_match: {query: searchTerm, fields: ["title"]}}
  //{match: {title: {query: searchTerm, operator: "and"}}}
  return searchTerm
  ? {match: {title: {query: searchTerm}}}
  : {match_all: {}}
}

function buildFrom(current, resultsPerPage) {
  if (!current || !resultsPerPage) return;
  return (current - 1) * resultsPerPage;
}

function getTermFilterValue(field, fieldValue) {
  if (fieldValue === "false" || fieldValue === "true") {
    return {[field]: fieldValue === "true"};
  }  // ?
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
    // TO DO: also add methodNames, allergy ingredients, etc. (index them first)
    if (["recipeTypeName", "cuisineName"].includes(filter.field)) { 
      return [...acc, getTermFilter(filter)];
    }
  }, []);
  if (filters.length < 1) return;
  return filters;
}

export default function buildRequest(state) {
  const { searchTerm, filters, current, resultsPerPage } = state;
  //console.log('filters', filters);
  const match = buildMatch(searchTerm);
  const filter = buildRequestFilter(filters);
  //console.log('filter', filter);
  const from = buildFrom(current, resultsPerPage);  // starting
  const size = resultsPerPage;  // limit
  const body = {
    highlight: {
      fragment_size: 200,  // less?
      number_of_fragments: 1,
      fields: {title: {}}
    },
    //_source: ["title", "recipeTypeName", "cuisineName"],
    aggs: {
      recipeTypeName: {terms: {field: "recipeTypeName.keyword"}},
      cuisineName: {terms: {field: "cuisineName.keyword"}},
      //ingredientTypes: {terms: {fields: "ingredientTypes"}},
      //methods: {terms: {fields: "methodNames"}}
    },
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