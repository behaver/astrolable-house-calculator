'use strict';

const CommonGeoEclipticHouse = require('./CommonGeoEclipticHouse');
const { MarsCoordinate } = require('@behaver/solar-star-coordinate');

/**
 * MarsGeoEclipticHouse
 *
 * MarsGeoEclipticHouse 为火星地心黄道宫位计算器
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class MarsGeoEclipticHouse extends CommonGeoEclipticHouse {

  /**
   * 获取原始值计算器
   *
   * @return {Number} 原始值计算器
   */
  get RawCalculator() {
    if (this.private.RawCalculator === undefined) {
      this.private.RawCalculator = new MarsCoordinate(this.private.time);
    }

    return this.private.RawCalculator;
  }
}

module.exports = MarsGeoEclipticHouse;
