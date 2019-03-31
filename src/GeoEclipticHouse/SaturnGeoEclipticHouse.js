'use strict';

const CommonGeoEclipticHouse = require('./CommonGeoEclipticHouse');
const { SaturnCoordinate } = require('@behaver/solar-star-coordinate');

/**
 * SaturnGeoEclipticHouse
 *
 * SaturnGeoEclipticHouse 为土星地心黄道宫位计算器
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class SaturnGeoEclipticHouse extends CommonGeoEclipticHouse {

  /**
   * 获取原始值计算器
   *
   * @return {Number} 原始值计算器
   */
  get RawCalculator() {
    if (this.private.RawCalculator === undefined) {
      this.private.RawCalculator = new SaturnCoordinate(this.private.time);
    }

    return this.private.RawCalculator;
  }
}

module.exports = SaturnGeoEclipticHouse;
