import { mainOne, mainTwo, getNumbers, findTheTwoNumbersThatTotal, findTheThreeNumbersThatTotal } from './index';

test('should load numbers', async () => {
  const theNumbers = await getNumbers()
  expect(theNumbers.length).toBe(200);
});

test('return first two numbers that add up to 10', () => {
  const theNumbers = [10, 4, 50, 13, 6];
  expect(findTheTwoNumbersThatTotal(theNumbers, 10)).toEqual([4, 6]);
});

test('return first three numbers that add up to 10', () => {
  const theNumbers = [10, 1, 7, 13, 2];
  expect(findTheThreeNumbersThatTotal(theNumbers, 10)).toEqual([1, 7, 2]);
});

test('the answer part 1', async () => {
  expect(await mainOne()).toBe(927684);
});

test('the answer part 2', async () => {
  expect(await mainTwo()).toBe(292093004);
});
