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
  const addEachKeyValueToObject = (
    acc: any,
    [key, value]: (Default|string)[]
  ) => ({
    ...acc,
    [key as string]: value
  });

  const toObject = (value: any, snippet: any) => {
    return {raw: value, ...(snippet && {snippet})};
  };

  let idValue: string;
  if (currentIndex === "recipes") idValue = "id";
  if (currentIndex === "ingredients") idValue = "id";
  if (currentIndex === "equipment") idValue = "id";

  return hits.map((record: any) => ({
    id: {raw: record._source[idValue]},
    ...(
      Object.entries(record._source).map(([fieldName, fieldValue]) => [
        fieldName,
        toObject(fieldValue, getHighlight(record, fieldName))
      ])
      .reduce(addEachKeyValueToObject, {})
    )
  }));
}

export function buildAutocompleteState(response: any, currentIndex: string) {
  const results = buildResults(response.hits.hits, currentIndex);
  return {results};
}

// rename and finish
type Default = {
  raw: any;
  snippet: any;
};