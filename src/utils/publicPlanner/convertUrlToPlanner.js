import axios from 'axios';
const uuidv4 = require('uuid/v4');

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

/*
We could have done the following with one large regex,
but have for now decided to use a few smaller regexes
in combination with some string splitting.

The urlString is split up into its parts,
and those parts are tested against the respective regex.
*/

async function convertUrlToPlanner(urlString) {
  // 1. Check if the provided url is okay
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
    if (typeof toAdd[1] !== "undefined") recipesStrings.push(toAdd[1]);
    else recipesStrings.push("none");
  });
  dayStrings.map(dayString => {
    if (!allowedCharactersInDay.test(dayString)) notOkay = true;
  });
  recipesStrings.map(recipesString => {
    if (recipesString !== "none") {
      if (!allowedCharactersInRecipes.test(recipesString)) notOkay = true;
    }
  });
  if (notOkay) return 'not okay';

  // 2. The provided url is okay, so let's turn it into a plan
  let toMerge = {};

  let dayStringsCleaned = [];
  dayStrings.map(str => {
    dayStringsCleaned.push(Number(str.substring(1)));
  });
  dayStringsCleaned.map(str => {
    toMerge[[str]] = [];
  });

  /*
  This would turn
  ['2-44-345', '33', '543-1-10']
  into
  [[2, 44, 345], [33], [543, 1, 10]]
  */
  let recipesStringsSplitToNum = [];
  recipesStrings.map(str => {
    let toNum = [];
    if (str !== "none") {
      if (str.includes('-')) {
        let split = str.split('-');
        split.map(str => {
          toNum.push(Number(str));
        });
      } else {
        toNum.push(Number(str));
      }
    }
    recipesStringsSplitToNum.push(toNum);
  });

  recipesStringsSplitToNum.flat();
  const theValues = recipesStringsSplitToNum.values();
  //console.log("recipesStringsSplitToNum: ", recipesStringsSplitToNum);
  //console.log("theValues: ", theValues);
  const res = await axios.post(
    `${endpoint}/recipe/titles`,
    {recipeIds: [1, 2, 3]}
  );  // change

  Object.keys(toMerge).map((key, i) => {
    if (recipesStrings[i] === "none") {
      toMerge[key] = [];
    } else {
      toMerge[key] = recipesStringsSplitToNum[i].map(num => ({
        key: uuidv4(),
        id: num,
        text: res.data.filter(data => data.recipe_id === num)[0].title
      }));
    }
  });

  return toMerge;
};

export default convertUrlToPlanner;