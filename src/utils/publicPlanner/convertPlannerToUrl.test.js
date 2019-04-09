import convertPlannerToUrl from './convertPlannerToUrl';

describe('convertPlannerToUrl', () => {
  it('should correctly convert plan object to url string', () => {
    const plan = {
      1: [
        {id: 15},
        {id: 226}
      ],
      22: [
        {id: 3}
      ]
    };
    const actual = convertPlannerToUrl(plan);
    const expected = 'd1_15-226.d22_3';
    expect(actual).toEqual(expected);
  });
});