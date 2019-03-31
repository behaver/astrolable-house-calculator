'use strict';

const CommonGeoEclipticHouse = require('./CommonGeoEclipticHouse');
const { UranusCoordinate } = require('@behaver/solar-star-coordinate');

/**
 * UranusGeoEclipticHouse
 *
 * UranusGeoEclipticHouse 为天王星地心黄道宫位计算器
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class UranusGeoEclipticHouse extends CommonGeoEclipticHouse {

  /**
   * 获取原始值计算器
   *
   * @return {Number} 原始值计算器
   */
  get RawCalculator() {
    if (this.private.RawCalculator === undefined) {
      this.private.RawCalculator = new UranusCoordinate(this.private.time);
    }

    return this.private.RawCalculator;
  }
}

module.exports = UranusGeoEclipticHouse;
