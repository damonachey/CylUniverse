import { Utilities } from "./utilities";

it("should limit the range", () => {
  const actual = Utilities.random(0, 1);

  expect(actual).toBe(0);
});

it("should be less than the 'to'", () => {
  const actual = Utilities.random(0, 5);

  expect(actual).toBeLessThan(5);
});

it("should be greater than or equal to the 'from'", () => {
  const actual = Utilities.random(2, 5);

  expect(actual).toBeGreaterThanOrEqual(2);
});

it("should shuffle the array", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const actual = Utilities.shuffle(arr.concat());

  expect(actual).not.toEqual(arr);
});
