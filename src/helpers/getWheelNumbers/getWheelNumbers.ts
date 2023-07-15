import { Type } from '../../types';

import { getRandomArrayItem } from '../../utills';

export const getWheelNumbers = (type: Type) => {
  // 1st step
  const staticWheelNumbers: string[] = []; // without 0 and 00

  for (let i = 1; i <= 36; i += 1) {
    staticWheelNumbers.push(`${i}`);
  }

  // 2nd step
  const randomNumbers: string[] = [];

  for (let i = 0; i < staticWheelNumbers.length; i += 1) {
    const availableNumbers = staticWheelNumbers.filter(
      (number) => randomNumbers.includes(number) === false
    );
    const randomNumber = getRandomArrayItem(availableNumbers);

    randomNumbers.push(randomNumber);
  }

  // 3rd step
  const finalArray: string[] = [];

  randomNumbers.forEach((number, index) => {
    if (type === 'American' && index === 18) {
      finalArray.push('00');
    }

    if (type === 'European' && index === 18) {
      finalArray.push('0');
    }

    finalArray.push(number);
  });

  // finalArray.push('0');
  if (type === 'American') {
    finalArray.push('0');
  }

  return finalArray;
};
