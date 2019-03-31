'use strict';

const CommonGeoEclipticHouse = require('./CommonGeoEclipticHouse');
const { NeptuneCoordinate } = require('@behaver/solar-star-coordinate');

/**
 * NeptuneGeoEclipticHouse
 *
 * NeptuneGeoEclipticHouse 为海王星地心黄道宫位计算器
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class NeptuneGeoEclipticHouse extends CommonGeoEclipticHouse {

  /**
   * 获取原始值计算器
   *
   * @return {Number} 原始值计算器
   */
  get RawCalculator() {
    if (this.private.RawCalculator === undefined) {
      this.private.RawCalculator = new NeptuneCoordinate(this.private.time);
    }

    return this.private.RawCalculator;
  }
}

module.exports = NeptuneGeoEclipticHouse;
