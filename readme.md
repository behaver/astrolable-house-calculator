# AstrolableHouseCalculator

[![GitHub license](https://img.shields.io/badge/license-ISC-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/astrolable-house-calculator) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

AstrolableHouseCalculator 是一个被构建用来计算星盘宫位的计算组件。其中包含的子组件有：

* `JDateHouse` 儒略日宫位计算
* `SunGeoEclipticHouse` 太阳地心黄道宫位计算
* `MoonGeoEclipticHouse` 月亮地心黄道宫位计算
* `MercuryGeoEclipticHouse` 水星地心黄道宫位计算
* `VenusGeoEclipticHouse` 金星地心黄道宫位计算
* `MarsGeoEclipticHouse` 火星地心黄道宫位计算
* `JupiterGeoEclipticHouse` 木星地心黄道宫位计算
* `SaturnGeoEclipticHouse` 土星地心黄道宫位计算
* `UranusGeoEclipticHouse` 天王星地心黄道宫位计算
* `NeptuneGeoEclipticHouse` 海王星地心黄道宫位计算

## 安装

通过 npm 安装，在你的 node 项目目录下执行：

`npm install @behaver/astrolable-house-calculator`

安装完成后，调用即可：

`const { SunGeoEclipticHouse, 子组件 } = require('@behaver/astrolable-house-calculator');`

## 用例

```js
const { SunGeoEclipticHouse } = require('@behaver/astrolable-house-calculator');
const { JDateRepository } = require('@behaver/jdate');

let jdate = new JDateRepository(new Date(1992, 7, 15, 8, 25), 'date');

// 生成太阳地心黄道宫位计算组件实例
let SGEH = new SunGeoEclipticHouse(jdate, {
  originPoint: 255, // 起始点
  sectionLength: 360, // 节长度
  indexDeflection: 46, // 索引偏移量
  cycle: 60 // 周期
});

// 输出周期节索引
console.log(SGEH.index);

// 输出周期内比
console.log(SGEH.rate);
```

## API

`constructor(time, options)`

构造函数

* time 儒略时间对象
* options.originPoint 周期起始点，缺省：0
* options.sectionLength 节长度，缺省：30
* options.indexDeflection 宫位索引偏移量，缺省：0
* options.cycle 周期，缺省：12

`get time()`

获取儒略时间对象

`set time(value)`

设置儒略时间对象

* value 儒略时间对象

`get originPoint()`

获取周期起始点

`set originPoint(value)`

设置周期起始点

* value 周期起始点

`get sectionLength()`

获取节长度

`set sectionLength(value)`

设置节长度

* value 节长度

`get indexDeflection()`

获取宫位索引偏移量

`set indexDeflection(value)`

设置宫位索引偏移量

* value 宫位索引偏移量

`get cycle()`

获取周期

`set cycle(value)`

设置周期

* value 周期

`get rate()`

获取周期内比率

`get index()`

获取周期内索引

`get raw()`

获取原始值

## 许可证书

The ISC license.