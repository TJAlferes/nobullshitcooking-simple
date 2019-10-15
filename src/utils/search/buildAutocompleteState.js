/*

This module was adapted from code written by Jason Stoltz & team at Elastic:
https://github.com/elastic/search-ui/tree/master/examples/elasticsearch

*/

function getHighlight(hit, fieldName) {
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
  let builtResults = [];

  hits.map(record => {
    function getField() {
      if (currentIndex === "recipes") return record._source.title;
      if (currentIndex === "ingredients") return record._source.ingredientName;
      if (currentIndex === "equipment") return record._source.equipmentName;
    }

    function getFieldString() {
      if (currentIndex === "recipes") return "title";
      if (currentIndex === "ingredients") return "ingredientName";
      if (currentIndex === "equipment") return "equipmentName";
    }

    let snippet = getHighlight(record, getFieldString());

    builtResults.push({id: {raw: getField, ...(snippet && {snippet})}});
  });

  return builtResults;
}

export default function buildAutocompleteState(response, currentIndex) {
  const results = buildResults(response.hits.hits, currentIndex);
  return {results};
}