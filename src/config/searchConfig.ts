import axios from 'axios';

import buildAutocompleteState from '../utils/search/buildAutocompleteState';
import buildSearchRequest from '../utils/search/buildSearchRequest';
import applyDisjunctiveFaceting from '../utils/search/applyDisjunctiveFaceting';
import buildSearchState from '../utils/search/buildSearchState';

import { store } from '../index';

import { NOBSCBackendAPIEndpointOne } from './NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

// TO DO: put currentIndex on window?

/*function getSearchState() {
  const { search } = store.getState();
  return search;
}

function getFacetsConfig() {
  if (getSearchState().currentIndex === "recipes") {
    return {
      recipeTypeName: {type: "value", size: 12},
      cuisineName: {type: "value", size: 24},
      //methods,
      //ingredientTypes (for allergies)
    };
  } else if (getSearchState().currentIndex === "ingredients") {
    return {ingredientTypeName: {type: "value", size: 18}};
  }
}

function getDisjunctiveFacetsConfig() {
  if (getSearchState().currentIndex === "recipes") {
    return ["recipeTypeName", "cuisineName"];
  } else if (getSearchState().currentIndex === "ingredients") {
    return ["ingredientTypeName"];
  }
}*/

const searchConfig = {
  //debug: true,
  trackUrlState: false,  // ?
  onResultClick: function() {
    //console.log('clicked!');
  },
  onAutocompleteResultClick: function() {
    //console.log('clicked!');
  },
  onAutocomplete: async function({ searchTerm }) {  // JSON.stringify()?
    const { search } = store.getState();
    const res = await axios.post(
      `${endpoint}/search/autocomplete/${search.currentIndex}`,
      {searchTerm},
      {withCredentials: true}
    );
    const newState = buildAutocompleteState(res.data.found, search.currentIndex);
    return {autocompletedResults: newState.results};
  },
  onSearch: async function(state) {  // JSON.stringify()?
    const { search } = store.getState();

    if (search.currentIndex === "recipes") {

      const res = await axios.post(
        `${endpoint}/search/find/recipes`,
        {body: buildSearchRequest(state, "recipes")},
        {withCredentials: true}
      );
      const resWithDisjunctiveFacetCounts = await applyDisjunctiveFaceting(
        res.data.found,
        state,
        ["recipeTypeName", "cuisineName"],
        "recipes"
      );
      const newState = buildSearchState(
        resWithDisjunctiveFacetCounts,
        state.resultsPerPage,
        "recipes"
      );
      return newState;

    } else if (search.currentIndex === "ingredients") {

      const res = await axios.post(
        `${endpoint}/search/find/ingredients`,
        {body: buildSearchRequest(state, "ingredients")},
        {withCredentials: true}
      );
      const resWithDisjunctiveFacetCounts = await applyDisjunctiveFaceting(
        res.data.found,
        state,
        ["ingredientTypeName"],
        "ingredients"
      );
      const newState = buildSearchState(
        resWithDisjunctiveFacetCounts,
        state.resultsPerPage,
        "ingredients"
      );
      return newState;

    } else if (search.currentIndex === "equipment") {

      const res = await axios.post(
        `${endpoint}/search/find/equipment`,
        {body: buildSearchRequest(state, "equipment")},
        {withCredentials: true}
      );
      const resWithDisjunctiveFacetCounts = await applyDisjunctiveFaceting(
        res.data.found,
        state,
        ["equipmentTypeName"],
        "equipment"
      );
      const newState = buildSearchState(
        resWithDisjunctiveFacetCounts,
        state.resultsPerPage,
        "equipment"
      );
      return newState;
      
    }
  },
  searchQuery: {
    facets: {
      recipeTypeName: {type: "value", size: 12},
      cuisineName: {type: "value", size: 24},
      //methods,
      //ingredientTypes (for allergies)
    },
    disjunctiveFacets: ["recipeTypeName", "cuisineName"]  // "ingredientTypeName", "equipmentTypeName"
  }
};

export default searchConfig;