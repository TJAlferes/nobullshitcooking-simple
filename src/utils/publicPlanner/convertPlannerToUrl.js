const convertPlannerToUrl = recipeListsInsideDays => {
  let plannerString = '';
  recipeListsInsideDays.map(list => {
    let plannerSubString = `d${list.day}_`;
    list.map(recipe => {
      plannerSubString.push(`${recipe.recipeId}-`);
    });
    plannerSubString.slice(0, -1);  // This removes the last '-'
    plannerSubString.push('.');
    plannerString.push(plannerSubString);
  });
  plannerString.slice(0, -1);  // This removes the last '.'
  return plannerString;
};

export default convertPlannerToUrl;