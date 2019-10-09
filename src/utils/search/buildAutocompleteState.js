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

export default function buildAutocompleteState(response, currentIndex) {
  const results = buildResults(response.hits.hits, currentIndex);
  return {results};
}