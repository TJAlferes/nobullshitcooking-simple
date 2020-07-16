function buildMatch(searchTerm: string, currentIndex: string) {
  if (currentIndex === "recipes") {
    return searchTerm
    ? {match: {title: {query: searchTerm}}}
    : {match_all: {}};
  }
  
  if (currentIndex === "ingredients") {
    return searchTerm
    ? {match: {ingredient_fullname: {query: searchTerm}}}
    : {match_all: {}};
  }
  
  if (currentIndex === "equipment") {
    return searchTerm
    ? {match: {equipment_name: {query: searchTerm}}}
    : {match_all: {}};
  }
}

/*
{
  multi_match: {
    fields: ["ingredient_brand", "ingredient_variety", "ingredient_name"],
    query: searchTerm
  }
}
*/

function buildFrom(current: number, resultsPerPage: number) {
  if (!current || !resultsPerPage) return;
  return (current - 1) * resultsPerPage;
}

function getTermFilterValue(field: any, fieldValue: any) {
  //if (fieldValue === "false" || fieldValue === "true") {
  //  return {[field]: fieldValue === "true"};
  //}
  return {[`${field}`]: fieldValue};
}

function getTermFilter(filter: any) {
  if (filter.type === "all") {
    return {
      bool: {
        filter: [
          filter.values.map((filterValue: any) => ({
            term: getTermFilterValue(filter.field, filterValue)
          }))
        ]
      }
    };
  }

  if (filter.type === "any") {
    return {
      bool: {
        should: [
          filter.values.map((filterValue: any) => ({
            term: getTermFilterValue(filter.field, filterValue)
          }))
        ],
        minimum_should_match: 1
      }
    };
  }
}

function buildRequestFilter(filters: any, currentIndex: string) {
  if (!filters) return;

  filters = filters.reduce((acc: any, filter: any) => {
    // also add methodNames, allergy ingredients, etc. (index them first)
    if (
      currentIndex === "recipes" &&
      ["recipe_type_name", "cuisine_name"].includes(filter.field)
    ) {
      return [...acc, getTermFilter(filter)];
    }
    
    if (
      currentIndex === "ingredients" &&
      ["ingredient_type_name"].includes(filter.field)
    ) {
      return [...acc, getTermFilter(filter)];
    }
    
    if (
      currentIndex === "equipment" &&
      ["equipment_type_name"].includes(filter.field)
    ) {
      return [...acc, getTermFilter(filter)];
    }
  }, []);

  if (filters.length < 1) return;

  return filters;
}

export function buildSearchRequest(state: any, currentIndex: string) {
  const { searchTerm, filters, current, resultsPerPage } = state;

  const match = buildMatch(searchTerm, currentIndex);
  const filter = buildRequestFilter(filters, currentIndex);
  const from = buildFrom(current, resultsPerPage);  // starting
  const size = resultsPerPage;  // limit

  let aggs;
  let highlightFields;

  if (currentIndex === "recipes") {
    aggs = {
      cuisine_name: {terms: {field: "cuisine_name"}},
      recipe_type_name: {terms: {field: "recipe_type_name"}},
      //ingredientTypes: {terms: {fields: "ingredientTypes"}},
      //methodName: {terms: {fields: "methodNames"}}  ???
      //methodName: {terms: {fields: ["methodName"]}}
    };
    highlightFields = {title: {}};
  }

  if (currentIndex === "ingredients") {
    aggs = {ingredient_type_name: {terms: {field: "ingredient_type_name"}}};
    highlightFields = {ingredient_fullname: {}};
  }

  if (currentIndex === "equipment") {
    aggs = {equipment_type_name: {terms: {field: "equipment_type_name"}}};
    highlightFields = {equipment_name: {}};
  }

  const body = {
    aggs,
    highlight: {
      fragment_size: 200,  // less?
      number_of_fragments: 1,
      fields: highlightFields
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