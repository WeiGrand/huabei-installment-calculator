# JavaScript 计算花呗分期费用

[官方文档](https://opendocs.alipay.com/open/277/105952)

## 用法

```javascript
import calculator from 'huabei-installment-calculator';

const result = calculator(1111.11)

console.log(result);

// result =>
// [ { principal: 370.37,
//   fee: 8.52,
//   principalAndFee: 378.89,
//   period: 3,
//   total: 1136.67 },
//   { principal: 185.18,
//     fee: 8.33,
//     principalAndFee: 193.51,
//     period: 6,
//     total: 1161.11 },
//   { principal: 92.59,
//     fee: 6.94,
//     principalAndFee: 99.53,
//     period: 12,
//     total: 1194.44 } ]
```

## API

### calculator(payAmount, feeRatesConfig)

#### Props

**payAmount**

Type: `String | Number`

Required: `true`

支付金额，支持到分

**feeRatesConfig**

Type: `Array`

Default: 
    ```
        [
          {
            period: 3,
            feeRate: 2.3,
          },
          {
            period: 6,
            feeRate: 4.5,
          },
          {
            period: 12,
            feeRate: 7.5,
          },
        ]
    ```

Required: `true`

花呗分期费率，默认取官方文档的 **用户承担手续费花呗分期费率**
