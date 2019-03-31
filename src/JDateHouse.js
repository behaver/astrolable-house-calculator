'use strict';

const CommonHouse = require('./CommonHouse');

/**
 * JDateHouse
 * 
 * JDateHouse 为儒略日宫位计算器
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class JDateHouse extends CommonHouse {

  /**
   * 获取原始值
   * 
   * @return {Number} 原始值
   */
  get raw() {
    return this.private.time.JD;
  }
}

module.exports = JDateHouse;
