import { defaultFeeRatesConfig } from './constants';
import { toFixed, roundHalfEven, round } from './utils';

const calculator = (payAmount, feeRatesConfig = defaultFeeRatesConfig) => {
  if (!feeRatesConfig || feeRatesConfig.length === 0) return [];

  if (typeof payAmount !== 'string') {
    payAmount = String(payAmount);
  }

  // 把金额单位转化成分 cent
  const payAmountInCent = toFixed(payAmount * 100, 0);

  return feeRatesConfig.map(config => {
    // 期数，费率
    const { period, feeRate } = config;

    // 每期本金 (按分取整)
    const principal = Math.floor(payAmountInCent / period);
    // 总手续费 （取整规则为 ROUND_HALF_EVEN）
    const totalFee = roundHalfEven(payAmountInCent * feeRate * 0.01);
    // 每期手续费
    const fee = toFixed(totalFee / period, 2);
    // 每期总费用
    const principalAndFee = toFixed(principal + fee, 2);
    const total = toFixed(payAmountInCent + totalFee, 2);

    return {
      principal: round(principal, 0) / 100,
      fee: round(fee, 0) / 100,
      principalAndFee: round(principalAndFee, 0, 'floor') / 100,
      period,
      total: round(total, 0) / 100,
    };
  });
};

export default calculator;
