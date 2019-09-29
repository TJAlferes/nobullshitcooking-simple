/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

/*function getHighlight(hit, fieldName) {
  if (hit._source.title === )
}*/

function buildResults(hits) {
  const addEachKeyValueToObject = (acc, [key, value]) => ({...acc, [key]: value});
  const toObject = (value, snippet) => ({raw: value, ...(snippet && {snippet})});
  return hits.map(record =>
    Object.entries(record._source).map(([fieldName, fieldValue]) =>
      [fieldName, toObject(fieldValue, getHighlight(record, fieldName))]
    ))
    .reduce(addEachKeyValueToObject, {});
}

function buildTotalPages(resultsPerPage, totalResults) {
  if (!resultsPerPage) return 0;
  if (totalResults === 0) return 1;
  return Math.ceil(totalResults / resultsPerPage);
}

function getValueFacet(aggregations, fieldName) {
  if (
   aggregations &&
   aggregations[fieldName] &&
   aggregations[fieldName].buckets &&
   aggregations[fieldName].buckets.length > 0
  ) {
    return [{
      field: fieldName,
      type: "value",
      data: aggregations[fieldName].buckets.map(bucket => ({
        // boolean & date require key_as_string
        value: bucket.key_as_string || bucket.key,
        count: bucket.doc_count
      }))
    }];
  }
}

function buildStateFacets(aggregations) {
  const recipe_types = getValueFacet(aggregations, "recipe_types");
  const cuisines = getValueFacet(aggregations, "cuisines");
  const facets = {...(recipe_types && {recipe_types}), ...(cuisines && {cuisines})};
  if (Object.keys(facets).length > 0) return facets;
}

export default function buildState(response, resultsPerPage) {
  const results = buildResults(response.hits.hits);
  const totalResults = response.hits.total.value;
  const totalPages = buildTotalPages(resultsPerPage, totalResults);
  //const facets = buildStateFacets(response.aggregations);
  return {results, totalPages, totalResults, ...(facets && {facets})};
}