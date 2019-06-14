const uuidv4 = require('uuid/v4');

/*
We could have done the following with one large regex,
but have for now decided to use a few smaller regexes
in combination with some string splitting.

The urlString is split up into its parts,
and those parts are tested against the respective regex.
*/
const convertUrlToPlannerv1 = urlString => {

  // Part 1: sanitize/validate the urlString
  // (DEV NOTE: Error for invalids)

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
  const allowedCharactersInUrl = /^([d][0-9_\-\.])+$/;  // test
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
  console.log(dayStrings);
  console.log(recipesStrings);

  return recipeListsInsideDays;
};



export const convertUrlToPlannerv2 = urlString => {
  if (typeof urlString !== 'string') return 'not a string';

  if (urlString.length < 4 || urlString.length > 1502) return 'invalid length';

  const allowedCharactersInUrl = /[d][0-9_\-\!]/;
  if (!allowedCharactersInUrl.test(urlString)) return 'invalid character(s)';

  const urlStringSplitOnDay = urlString.split('!', 28);
  if (!urlStringSplitOnDay) return 'not splittable on !s';

  const allowedCharactersInDay = /^[d]([1-9]|1[0-9]|2[0-8])$/;
  const allowedCharactersInRecipes = /[0-9\-]/;
  let dayStrings = [];
  let recipesStrings = [];
  let notOkay = false;
  urlStringSplitOnDay.map(substring => {
    let toAdd = substring.split('_');
    dayStrings.push(toAdd[0]);
    recipesStrings.push(toAdd[1]);  // WRITE CONDITIONAL HERE TO HAVE FALLBACK FOR UNDEFINED
  });
  console.log('dayStrings: ', dayStrings);
  console.log('recipesStrings: ', recipesStrings);  // GETTING UNDEFINIED FOR DAYS WITH NO RECIPES
  dayStrings.map(dayString => {
    if (!allowedCharactersInDay.test(dayString)) {
      console.log('dayString that wasnt okay: ', dayString);
      notOkay = true;
    }
    //continue;
  });
  recipesStrings.map(recipesString => {
    if (!allowedCharactersInRecipes.test(recipesString)) {
      console.log('recipesString that wasnt okay: ', recipesString);
      notOkay = true;
    }
    //continue;
  });
  if (notOkay) return 'not okay';

  let toMerge = {};
  let recipeListsInsideDays = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: [],
    24: [],
    25: [],
    26: [],
    27: [],
    28: []
  };

  let dayStringsCleaned = [];
  dayStrings.map(str => {
    dayStringsCleaned.push(Number(str.substring(1)));
  });
  dayStringsCleaned.map(str => {
    toMerge[[str]] = [];
  });

  //  ['2-44-345', '33', '543-1-10']  -->  [[2, 44, 345], [33], [543, 1, 10]]
  let recipesStringsSplitToNum = [];
  recipesStrings.map(str => {
    let split = str.split('-');
    let toNum = [];
    split.map(str => {
      toNum.push(Number(str));
    });
    recipesStringsSplitToNum.push(toNum);
  });

  // TO DO:
  // flatten recipesStringsSplitToNum 
  // put some recipes in MySQL
  // get backend api EB back online (and get ready to get redis online)
  // axios to backend api to get recipe titles/names from MySQL by those ids
  // iterate through results for the value for text key below
  // use async await function or * yield function to make sure it is executed in the right order
  // fix, test, and double check those regexes
  //let dbResults = await axios.get();

  Object.keys(toMerge).map((key, i) => {
    toMerge[key] = recipesStringsSplitToNum[i].map(num => ({
      key: uuidv4(),
      id: num,
      //text: dbResults[i]
    }));
  });

  // merge and return

  //return recipeListsInsideDays;

  return {
    "dayStrings": dayStrings,
    "recipesStrings": recipesStrings,
    "recipeListsInsideDays": recipeListsInsideDays,
    "recipesStringsSplitToNum": recipesStringsSplitToNum,
    "toMerge": toMerge
  };
};



//export default convertUrlToPlanner;