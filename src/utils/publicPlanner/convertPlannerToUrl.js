const convertPlannerToUrl = recipeListsInsideDays => {
  // TO DO: validate here too
  let plannerString = '';
  Object.keys(recipeListsInsideDays).map(list => {
    let plannerSubString = `d${list}_`;
    recipeListsInsideDays[[list]].map(recipe => {
      plannerSubString += `${recipe.id}-`;
    });
    plannerSubString = plannerSubString.slice(0, -1);  // This removes the last '-'
    plannerSubString += '!';
    plannerString += plannerSubString;
  });
  plannerString = plannerString.slice(0, -1);  // This removes the last '!'
  return plannerString;
};

export default convertPlannerToUrl;