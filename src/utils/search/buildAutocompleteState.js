/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

function getHighlight(hit, fieldName) {
  console.log(hit);
  console.log(fieldName);
  if (
    !hit.highlight ||
    !hit.highlight[fieldName] ||
    hit.highlight[fieldName].length < 1
  ) {
    return;
  }
  return hit.highlight[fieldName][0];
}

function buildResults(hits, currentIndex) {
  let fieldString = currentIndex === "recipes" ? "title" : "ingredientName";
  let builtResults = [];
  hits.map(record => {
    let field = currentIndex === "recipes" ? record._source.title : record._source.ingredientName;
    let snippet = getHighlight(record, fieldString);
    builtResults.push({
      id: {raw: field, ...(snippet && {snippet})},
      //
    });
  });
  return builtResults;
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
   aggregations[fieldName].buckets.length > 0  // ?
  ) {
    return [{
      field: fieldName,
      type: "value",
      data: aggregations[fieldName].buckets.map(bucket => ({ 
        // Note: boolean & date require key_as_string
        value: bucket.key_as_string || bucket.key,
        count: bucket.doc_count
      }))
    }];
  }
}

function buildStateFacets(aggregations, currentIndex) {
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
  }
}

export default function buildAutocompleteState(response, currentIndex) {
  const results = buildResults(response.hits.hits, currentIndex);
  console.log(results);
  const totalResults = response.hits.total.value;
  //const totalPages = buildTotalPages(resultsPerPage, totalResults);
  const facets = buildStateFacets(response.aggregations, currentIndex);
  return {
    results,
    //totalPages,
    totalResults,
    ...(facets && {facets})
  };
}