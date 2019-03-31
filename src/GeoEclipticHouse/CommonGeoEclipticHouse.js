'use strict';

const CommonHouse = require('../CommonHouse');

/**
 * CommonGeoEclipticHouse
 *
 * CommonGeoEclipticHouse 为地心黄道宫位计算公共类
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class CommonGeoEclipticHouse extends CommonHouse {
	
  /**
   * 获取原始值
   * 
   * @return {Number} 原始值
   */
  get raw() {
    if (!this.cache.has('raw')) {
      let ECC = this.RawCalculator.get();

      ECC.isContinuous = true;

      ECC.on({
        withNutation: true,
      });

      let raw = ECC.l.getDegrees();

      this.cache.set('raw', raw);
    }

    return this.cache.get('raw');
  }
}

module.exports = CommonGeoEclipticHouse;
