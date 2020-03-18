/*
This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch
*/

function buildMatch(searchTerm, currentIndex) {
  if (currentIndex === "recipes") {
    return searchTerm
    ? {match: {title: {query: searchTerm}}}
    : {match_all: {}};
  } else if (currentIndex === "ingredients") {
    return searchTerm
    ? {match: {ingredientName: {query: searchTerm}}}
    : {match_all: {}};
  } else if (currentIndex === "equipment") {
    return searchTerm
    ? {match: {equipmentName: {query: searchTerm}}}
    : {match_all: {}};
  }
}

function buildFrom(current, resultsPerPage) {
  if (!current || !resultsPerPage) return;
  return (current - 1) * resultsPerPage;
}

function getTermFilterValue(field, fieldValue) {
  /*if (fieldValue === "false" || fieldValue === "true") {
    return {[field]: fieldValue === "true"};
  }*/
  return {[`${field}`]: fieldValue};
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

function buildRequestFilter(filters, currentIndex) {
  if (!filters) return;
  filters = filters.reduce((acc, filter) => {
    if (currentIndex === "recipes") {
      // TO DO: also add methodNames, allergy ingredients, etc. (index them first)
      if (["recipeTypeName", "cuisineName"].includes(filter.field)) { 
        return [...acc, getTermFilter(filter)];
      }
    } else if (currentIndex === "ingredients") {
      if (["ingredientTypeName"].includes(filter.field)) { 
        return [...acc, getTermFilter(filter)];
      }
    } else if (currentIndex === "equipment") {
      if (["equipmentTypeName"].includes(filter.field)) { 
        return [...acc, getTermFilter(filter)];
      }
    }
  }, []);
  if (filters.length < 1) return;
  return filters;
}

export default function buildSearchRequest(state, currentIndex) {
  const { searchTerm, filters, current, resultsPerPage } = state;

  const match = buildMatch(searchTerm, currentIndex);
  const filter = buildRequestFilter(filters, currentIndex);
  const from = buildFrom(current, resultsPerPage);  // starting
  const size = resultsPerPage;  // limit

  let highlightFields;
  let aggs;
  if (currentIndex === "recipes") {
    highlightFields = {title: {}};
    aggs = {
      recipeTypeName: {terms: {field: "recipeTypeName"}},
      cuisineName: {terms: {field: "cuisineName"}},
      //ingredientTypes: {terms: {fields: "ingredientTypes"}},
      //methodName: {terms: {fields: "methodNames"}}  ???
      //methodName: {terms: {fields: ["methodName"]}}
    };
  } else if (currentIndex === "ingredients") {
    highlightFields = {ingredientName: {}};
    aggs = {ingredientTypeName: {terms: {field: "ingredientTypeName"}}};
  } else if (currentIndex === "equipment") {
    highlightFields = {equipmentName: {}};
    aggs = {equipmentTypeName: {terms: {field: "equipmentTypeName"}}};
  }

  const body = {
    highlight: {
      fragment_size: 200,  // less?
      number_of_fragments: 1,
      fields: highlightFields
    },
    aggs,
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