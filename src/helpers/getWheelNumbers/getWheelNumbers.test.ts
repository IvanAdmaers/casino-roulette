import { getWheelNumbers } from '.';

describe('getWheelNumbers', () => {
  it('should return a correct array of wheel numbers for American roulette', () => {
    const numbers = getWheelNumbers('American');    

    expect(numbers.length).toBe(38);
    expect(numbers.includes('0')).toBe(true);
    expect(numbers.includes('00')).toBe(true);
    expect(numbers.includes(undefined as any)).toBe(false);
  });

  it('should return a correct array of wheel numbers for European roulette', () => {
    const numbers = getWheelNumbers('European');    

    expect(numbers.length).toBe(37);
    expect(numbers.includes('0')).toBe(true);
    expect(numbers.includes('00')).toBe(false);
    expect(numbers.includes(undefined as any)).toBe(false);
  });
});
