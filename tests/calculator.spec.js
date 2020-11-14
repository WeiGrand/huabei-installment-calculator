import calculator from '../src/calculator';

describe('Test src/calculator.js', () => {
  test('Pay amount 1111.11', () => {
    const result = calculator(1111.11);

    expect(result).toMatchObject([
      { fee: 8.52,
        principalAndFee: 378.89,
        total: 1136.67 },
      { fee: 8.33,
        principalAndFee: 193.51,
        total: 1161.11 },
      { fee: 6.94,
        principalAndFee: 99.53,
        total: 1194.44 }
    ]);
  });

  test('Pay amount 1', () => {
    const result = calculator(1);

    expect(result).toMatchObject([
      { fee: 0.01,
        principalAndFee: 0.33,
        total: 1.02 },
      { fee: 0.01,
        principalAndFee: 0.16,
        total: 1.04 },
      { fee: 0.01,
        principalAndFee: 0.08,
        total: 1.08 }
    ]);
  });

  test('Pay amount 1.02', () => {
    const result = calculator(1.02);

    expect(result).toMatchObject([
      { fee: 0.01,
        principalAndFee: 0.34,
        total: 1.04 },
      { fee: 0.01,
        principalAndFee: 0.17,
        total: 1.07 },
      { fee: 0.01,
        principalAndFee: 0.08,
        total: 1.10 }
    ]);
  });

  test('Pay amount 13', () => {
    const result = calculator(13);

    expect(result).toMatchObject([
      { fee: 0.1,
        principalAndFee: 4.43,
        total: 13.30 },
      { fee: 0.1,
        principalAndFee: 2.25,
        total: 13.58 },
      { fee: 0.08,
        principalAndFee: 1.16,
        total: 13.98 }
    ]);
  });

  test('Pay amount 0.22', () => {
    const result = calculator(0.22);

    expect(result).toMatchObject([
      { fee: 0,
        principalAndFee: 0.07,
        total: 0.23 },
      { fee: 0,
        principalAndFee: 0.03,
        total: 0.23 },
      { fee: 0,
        principalAndFee: 0.01,
        total: 0.24 }
    ]);
  });

  test('Pay amount 27', () => {
    const result = calculator(27);

    expect(result).toMatchObject([
      { fee: 0.21,
        principalAndFee: 9.2,
        total: 27.62 },
      { fee: 0.2,
        principalAndFee: 4.7,
        total: 28.22 },
      { fee: 0.17,
        principalAndFee: 2.41,
        total: 29.02 }
    ]);
  });
});
