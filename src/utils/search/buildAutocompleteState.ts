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

function buildResults(hits: any, currentIndex: string) {
  let builtResults: any = [];

  hits.map((record: any) => {
    let field;
    if (currentIndex === "recipes") field = record._source.title;
    if (currentIndex === "ingredients") field = record._source.ingredientName;
    if (currentIndex === "equipment") field = record._source.equipmentName;

    let fieldString;
    if (currentIndex === "recipes") fieldString = "title";
    if (currentIndex === "ingredients") fieldString = "ingredientName";
    if (currentIndex === "equipment") fieldString = "equipmentName";

    let snippet = getHighlight(record, fieldString as string);

    builtResults.push({id: {raw: field, ...(snippet && {snippet})}});
  });

  return builtResults;
}

export function buildAutocompleteState(response: any, currentIndex: string) {
  const results = buildResults(response.hits.hits, currentIndex);
  return {results};
}