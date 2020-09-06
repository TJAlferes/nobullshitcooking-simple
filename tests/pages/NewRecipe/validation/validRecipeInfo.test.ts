import { validRecipeInfo } from '../../../../src/pages/NewRecipe/validation/validRecipeInfo';

const methods = {
   1: false,  2: false,  3: false,  4: false,  5: false,  6: false,
   7: false,  8: false,  9: false, 10: false, 11: false, 12: false,
  13: false, 14: false, 15: false, 16: false, 17: false, 18: false,
  19: false, 20: false, 21: false, 22: false, 23: false, 24: false
};
const setFeedback = jest.fn();

window.scrollTo = jest.fn();

jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});

describe('validRecipeInfo', () => {
  describe('when given valid recipe info', () => {
    let actual: boolean;
    beforeEach(() => {
      actual = validRecipeInfo({
        ownership: "private",
        recipeTypeId: 1,
        cuisineId: 1,
        title: "Sweet Potatoes Roasted With Olive Oil",
        description: "Very tasty!",
        methods,
        equipmentRows: [],
        ingredientRows: [],
        subrecipeRows: [],
        directions: "Do this, then that.",
        setFeedback
      });
    });

    it('returns true', () => {
      expect(actual).toEqual(true);
    });

    it('does not set any feedback', () => {
      expect(setFeedback).not.toHaveBeenCalled();
    });

    it('does not set any timeout', () => {
      expect(window.setTimeout).not.toHaveBeenCalled();
    });

    it('does not scroll', () => {
      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('when given invalid recipe info', () => {
    let actual: boolean;
    beforeEach(() => {
      actual = validRecipeInfo({
        ownership: "",  // <-- !
        recipeTypeId: 1,
        cuisineId: 1,
        title: "Sweet Potatoes Roasted With Olive Oil",
        description: "Very tasty!",
        methods,
        equipmentRows: [],
        ingredientRows: [],
        subrecipeRows: [],
        directions: "Do this, then that.",
        setFeedback
      });
    });

    it('returns false', () => {
      expect(actual).toEqual(false);
    });

    it('sets feedback', () => {
      expect(setFeedback)
      .toHaveBeenCalledWith("You forgot to select the ownership...");
    });

    it('sets timeout', () => {
      expect(setTimeout)
      .toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });

    it('scrolls', () => {
      expect(window.scrollTo).toHaveBeenCalledWith(0,0);
    });
  });
});