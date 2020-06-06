/*
This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch
*/

function getHighlight(hit: any, fieldName: string) {
  if (
    !hit.highlight ||
    !hit.highlight[fieldName] ||
    hit.highlight[fieldName].length < 1
  ) {
    return;
  }
  return hit.highlight[fieldName][0];
}

// this is a damn mess... re do this...
function buildResults(hits: any) {
  const addEachKeyValueToObject = (
    acc: any,
    [key, value]: (string | { snippet: any; raw: any; })[]
  ) => ({
    ...acc,
    [key as string]: value
  });

  const toObject = (value: any, snippet: any) => {
    return {raw: value, ...(snippet && { snippet })};
  };

  return hits.map((record: any) =>
    Object.entries(record._source).map(([fieldName, fieldValue]) => [
      fieldName,
      toObject(fieldValue, getHighlight(record, fieldName))
    ])
    .reduce(addEachKeyValueToObject, {})
  );
}

function buildTotalPages(resultsPerPage: number, totalResults: number) {
  if (!resultsPerPage) return 0;
  if (totalResults === 0) return 1;
  return Math.ceil(totalResults / resultsPerPage);
}

function getValueFacet(aggregations: any, fieldName: string) {
  if (
   aggregations &&
   aggregations[fieldName] &&
   aggregations[fieldName].buckets  // remove also?
   //aggregations[fieldName].buckets.length > 0
  ) {
    return [{
      field: fieldName,
      type: "value",
      data: aggregations[fieldName].buckets.map((bucket: any) => ({ 
        // Note: boolean & date require key_as_string
        value: bucket.key_as_string || bucket.key,
        count: bucket.doc_count
      }))
    }];
  }
}

function buildStateFacets(aggregations: any, currentIndex: string) {
  if (currentIndex === "recipes") {
    const recipeTypeName = getValueFacet(aggregations, "recipeTypeName");
    const cuisineName = getValueFacet(aggregations, "cuisineName");
    const facets = {
      ...(recipeTypeName && {recipeTypeName}),
      ...(cuisineName && {cuisineName})
    };
    if (Object.keys(facets).length > 0) return facets;
  } else if (currentIndex === "ingredients") {
    const ingredientTypeName = getValueFacet(aggregations, "ingredientTypeName");
    const facets = {...(ingredientTypeName && {ingredientTypeName})};
    if (Object.keys(facets).length > 0) return facets;
  } else if (currentIndex === "equipment") {
    const equipmentTypeName = getValueFacet(aggregations, "equipmentTypeName");
    const facets = {...(equipmentTypeName && {equipmentTypeName})};
    if (Object.keys(facets).length > 0) return facets;
  }
}

export function buildSearchState(
  response: any,
  resultsPerPage: number,
  currentIndex: string
) {
  const results = buildResults(response.hits.hits);
  const totalResults = response.hits.total.value;
  const totalPages = buildTotalPages(resultsPerPage, totalResults);
  const facets = buildStateFacets(response.aggregations, currentIndex);
  return {
    results,
    totalPages,
    totalResults,
    ...(facets && {facets})
  };
}