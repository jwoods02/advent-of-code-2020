/* eslint-disable no-plusplus */
import { createInterface } from 'readline';
import { createReadStream } from 'fs';
import { once } from 'events';

export const getNumbers = async () => {
  const fileStream = createReadStream('src/01/input.txt');
  const readInterface = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const numbers = [];

  readInterface.on('line', (line) => {
    numbers.push(parseInt(line, 10));
  });

  await once(readInterface, 'close');

  return numbers;
};

export const findTheTwoNumbersThatTotal = (numbers, total) => {
  let thePair = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    for (let n = i + 1; n < numbers.length; n++) {
      if (currentNum + numbers[n] === total) {
        thePair = [currentNum, numbers[n]];
        break;
      }
    }
  }
  return thePair;
};

export const findTheThreeNumbersThatTotal = (numbers, total) => {
  let theThree = [];
  for (let i = 0; i < numbers.length; i++) {
    const numOne = numbers[i];
    for (let n = i + 1; n < numbers.length; n++) {
      const numTwo = numbers[n];
      for (let x = n + 1; x < numbers.length; x++) {
        if (numOne + numTwo + numbers[x] === total) {
          theThree = [numOne, numTwo, numbers[x]];
          break;
        }
      }
    }
  }
  return theThree;
};

export const mainOne = async () => {
  const numbersFromFile = await getNumbers();
  const numbersToMultiply = findTheTwoNumbersThatTotal(numbersFromFile, 2020);
  return numbersToMultiply[0] * numbersToMultiply[1];
};


export const mainTwo = async () => {
  const numbersFromFile = await getNumbers();
  const numbersToMultiply = findTheThreeNumbersThatTotal(numbersFromFile, 2020);
  return numbersToMultiply[0] * numbersToMultiply[1] * numbersToMultiply[2];
};