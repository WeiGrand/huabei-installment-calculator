import { roundHalfEven, round } from '../src';

describe('Test src/utils.js', () => {
  describe('Test roundHalfEven', () => {
    test('1 to be 1', () => {
      expect(roundHalfEven(1)).toBe(1);
    });

    test('1.2 to be 1', () => {
      expect(roundHalfEven(1.2)).toBe(1);
    });

    test('1.5 to be 2', () => {
      expect(roundHalfEven(1.5)).toBe(2);
    });

    test('2.5 to be 2', () => {
      expect(roundHalfEven(2.5)).toBe(2);
    });

    test('3.24 to be 3.2', () => {
      expect(roundHalfEven(3.24, 1)).toBe(3.2);
    });

    test('3.25 to be 3.2', () => {
      expect(roundHalfEven(3.25, 1)).toBe(3.2);
    });

    test('3.26 to be 3.3', () => {
      expect(roundHalfEven(3.26, 1)).toBe(3.3);
    });

    test('9.234 to be 9.23', () => {
      expect(roundHalfEven(9.234, 2)).toBe(9.23);
    });

    test('9.235 to be 9.24', () => {
      expect(roundHalfEven(9.235, 2)).toBe(9.24);
    });

    test('9.236 to be 9.24', () => {
      expect(roundHalfEven(9.236, 2)).toBe(9.24);
    });
  });

  describe('Test round', () => {
    test('12.34 to be 12.3', () => {
      expect(round(12.34, 1)).toBe(12.3);
    });

    test('12.343 to be 12.35', () => {
      expect(round(12.343, 2, 'ceil')).toBe(12.35);
    });

    test('12.36 to be 12.3', () => {
      expect(round(12.36, 1, 'floor')).toBe(12.3);
    });
  });
});
