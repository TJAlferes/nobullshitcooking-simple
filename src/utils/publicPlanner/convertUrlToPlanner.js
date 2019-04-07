/*
We could have done the following with one large regex,
but have for now decided to use a few smaller regexes
in combination with some string splitting.

The urlString is split up into its parts,
and those parts are tested against the respective regex.
*/
const convertUrlToPlanner = urlString => {

  // Part 1: sanitize/validate the urlString

  if (typeof urlString !== 'string') return;

  if (urlString.length < 4 || urlString.length > 1502) return;

  /*
  This regex does not thoroughly test if the urlString conforms to the allowed possible patterns
  (see comment above this function for why we're not doing that now),
  it simply tests if the characters in the urlString conform to the allowed possible characters,
  which are:
  d            (the letter d)
  0 through 9  (any digit)
  _            (underscore)
  -            (dash)
  .            (period)
  If any character other than those is present, we don't continue and exit out.
  */
  const allowedCharactersInUrl = /^[d][0-9_\-\.]+$/;  // test
  if (!allowedCharactersInUrl.test(urlString)) return;

  /*
  Now we split it up by day
  so "d7_15-8.d10_3.d17_8-147-96" becomes "d7_15-8" and "d10_3" and "d17_8-147-96"
  */
  const urlStringSplitOnDay = urlString.split('.', 28);
  if (!urlStringSplitOnDay) return;

  /*
  Checks if only following characters are present:
  d
  1 through 28
  Also checks proper format:
  d followed by 1 through 28;
  d at start, 1 through 28 at end
  */
  const allowedCharactersInDay = /^[d]([1-9]|1[0-9]|2[0-8])$/;  // test

  /*
  checks if only following characters are present:
  0 through 9
  -
  Also partially checks proper format:
  number at start, number at end
  (TO DO: edit/finish this regex so that it fully checks proper format)
  */
  const allowedCharactersInRecipes = /^[0-9]+[\-]*[0-9]+$/;  // TEST

  /*
  Now we further split each day substring up by day marker and recipes list
  so "d7_15-8" becomes "d7" and "15-8"
  Again, any fails, and we don't continue and exit out.
  */
  let dayStrings = [];
  let recipesStrings = [];
  let notOkay = false;
  urlStringSplitOnDay.map(subString => {
    let toAdd = substring.split('_');
    dayStrings.push(toAdd[0]);
    recipesStrings.push(toAdd[1]);
  });
  dayStrings.map(dayString => {
    if (!allowedCharactersInDay.test(dayString)) notOkay = true;
  });
  recipesStrings.map(recipesString => {
    if (!allowedCharactersInRecipes.test(recipesString)) notOkay = true;
  });
  if (notOkay) return;

  // Part 2: Since all seems clean and valid, convert string to object

  let recipeListsInsideDays = {};
  
  // TO DO: FINISH

  return recipeListsInsideDays
};

export default convertUrlToPlanner;