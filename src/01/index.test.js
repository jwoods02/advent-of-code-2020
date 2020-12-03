import { getNumbers, findTheTwoNumbersThatTotal, main } from './index';

test('should load numbers', async () => {
  expect(await getNumbers()).toBe(10);
});

test('return first two numbers that add up to 10', () => {
  const theNumbers = [10, 4, 50, 13, 6];
  expect(findTheTwoNumbersThatTotal(theNumbers, 10)).toEqual([4, 6]);
});

test('the answer', async () => {
  expect(await main()).toBe(927684);
});
