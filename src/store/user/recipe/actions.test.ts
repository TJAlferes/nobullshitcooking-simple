import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE_FAILED,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE_FAILED,
  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE_FAILED,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE_FAILED,
} from './types';

import {
  userCreateNewPrivateRecipe,
  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipe,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipe,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,
  userCreateNewPublicRecipe,
  userCreateNewPublicRecipeSucceeded,
  userCreateNewPublicRecipeFailed,
  userEditPublicRecipe,
  userEditPublicRecipeSucceeded,
  userEditPublicRecipeFailed,
  userDisownPublicRecipe,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed
} from './actions';

describe('the userCreateNewPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipe({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPrivateRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipeSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipeFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipe({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPrivateRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipeSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipeFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipe(7).type;
    const expected = USER_DELETE_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = userDeletePrivateRecipe(7).recipeId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipeSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipeFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userCreateNewPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipe({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPublicRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipeSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipeFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipe({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPublicRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipeSucceeded('OK.').type;
    const expected = USER_EDIT_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipeFailed('Try again.').type;
    const expected = USER_EDIT_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDisownPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipe(7).type;
    const expected = USER_DISOWN_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userDisownPublicRecipe(7).recipeId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDisownPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipeSucceeded('OK.').type;
    const expected = USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDisownPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDisownPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipeFailed('Try again.').type;
    const expected = USER_DISOWN_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDisownPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});