import validRecipeInfo from './validRecipeInfo';

const setFeedback = jest.fn();

window.scrollTo = jest.fn();

jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});

describe('validRecipeInfo', () => {
  describe('when given valid recipe info', () => {
    let actual;
    beforeEach(() => {
      actual = validRecipeInfo({
        ownership: "private",
        recipeTypeId: 1,
        cuisineId: 1,
        title: "Sweet Potatoes Roasted With Olive Oil",
        description: "Very tasty!",
        methods: [],
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
    let actual;
    beforeEach(() => {
      actual = validRecipeInfo({
        ownership: "",  // <-- !
        recipeTypeId: 1,
        cuisineId: 1,
        title: "Sweet Potatoes Roasted With Olive Oil",
        description: "Very tasty!",
        methods: [],
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