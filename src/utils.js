export const toFixed = (n, digit) => {
  return Number(n.toFixed(digit));
}

export const roundHalfEven = (n, digit = 0) => {
  const s = String(n);
  const ss = s.split('.');
  const isFloat = ss.length > 1;
  // 非浮点数直接返回
  if (!isFloat) {
    return n;
  }
  const integerPart = ss[0];
  const decimalPart = ss[1];
  const { length } = decimalPart;

  // 小数位小于需要取整的位数直接返回
  if (length < digit) {
    return n;
  }

  const right = decimalPart[digit];
  const intRight = Number(right);

  if (intRight !== 5) {
    return round(n, digit);
  }

  // 5 后（后面所有小数）非 0 就进 1
  if (length > digit) {
    if (n > Number(`${integerPart}.${decimalPart.slice(0, digit)}5`)) {
      return round(n, digit, 'ceil');
    }
  }

  const left = digit - 1 < 0 ? integerPart[integerPart.length - 1] : decimalPart[digit - 1];
  const intLeft = Number(left);

  // 奇数进
  if (intLeft % 2) {
    return round(n, digit, 'ceil');
  }

  // 偶数舍
  return round(n, digit, 'floor');
};

export const round = (n, digit = 0, type = 'round') => {
  const base = Math.pow(10, digit);
  return Number((Math[type](n * base) / base).toFixed(digit));
};
