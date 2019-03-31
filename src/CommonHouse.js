'use strict';

const { JDateRepository, CacheSpaceOnJDate } = require('@behaver/jdate');

/**
 * CommonHouse
 * 
 * CommonHouse 为宫位计算公共类
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class CommonHouse {

  /**
   * 构造函数
   * 
   * @param {JDateRepository} time                    计算儒略时间对象
   * @param {Number}          options.originPoint     周期起始点
   * @param {Number}          options.sectionLength   节长度
   * @param {Number}          options.indexDeflection 宫位索引偏移量
   * @param {Number}          options.cycle           周期
   */
  constructor(time, {
    originPoint,
    sectionLength,
    indexDeflection,
    cycle,
  } = {}) {
    this.private = {};
    this.time = time;

    this.originPoint = originPoint || 0;
    this.sectionLength = sectionLength || 30;
    this.indexDeflection = indexDeflection || 0;
    this.cycle = cycle || 12;
  }

  /**
   * 获取儒略时间对象
   * 
   * @return {JDateRepository} 儒略时间对象
   */
  get time() {
     return new JDateRepository(this.private.time.JD);
  }

  /**
   * 设置儒略时间对象
   * 
   * @param {JDateRepository} value 儒略时间对象
   */
  set time(value) {
    // 参数检验
    if (!(value instanceof JDateRepository)) throw Error('The param value should be an instance of JDateRepository.');

    this.private.time = value;

    // 清空缓存内容
    this.cache = new CacheSpaceOnJDate(value);
  }

  /**
   * 获取周期起始点
   * 
   * @return {Number} 周期起始点
   */
  get originPoint() {
    return this.private.originPoint;
  }

  /**
   * 设置周期起始点
   * 
   * @param {Number} value 周期起始点
   */
  set originPoint(value) {
    if (typeof(value) !== 'number') throw Error('The param value should be a Number.');

    this.private.originPoint = value;

    this.cache.remove('rate');
  }

  /**
   * 获取节长度
   * 
   * @return {Number} 节长度
   */
  get sectionLength() {
    return this.private.sectionLength;
  }

  /**
   * 设置节长度
   * 
   * @param {Number} value 节长度
   */
  set sectionLength(value) {
    if (typeof(value) !== 'number') throw Error('The param value should be a Number.');

    this.private.sectionLength = value;

    this.cache.remove('rate');
  }

  /**
   * 获取宫位索引偏移量
   * 
   * @return {Number} 宫位索引偏移量
   */
  get indexDeflection() {
    return this.private.indexDeflection;
  }

  /**
   * 设置宫位索引偏移量
   * 
   * @param {Number} value 宫位索引偏移量
   */
  set indexDeflection(value) {
    if (typeof(value) !== 'number') throw Error('The param value should be a Number.');

    this.private.indexDeflection = value;

    this.cache.remove('rate');
  }

  /**
   * 获取周期
   * 
   * @return {Number} 周期
   */
  get cycle() {
    return this.private.cycle;
  }

  /**
   * 设置周期
   * 
   * @param {Number} value 周期
   */
  set cycle(value) {
    if (typeof(value) !== 'number') throw Error('The param value should be a Number.');

    this.private.cycle = value;

    this.cache.remove('rate');
  }

  /**
   * 获取周期内比率
   * 
   * @return {Number} 周期内比率
   */
  get rate() {
    if (!this.cache.has('rate')) {
      let rate = ((this.raw + this.originPoint) / this.sectionLength - this.indexDeflection) % this.cycle;

      this.cache.set('rate', (rate < 0) ? (rate + this.cycle) : rate);
    }

    return this.cache.get('rate');
  }

  /**
   * 获取周期内索引
   * 
   * @return {Number} 周期内索引
   */
  get index() {
    return Math.floor(this.rate);
  }
}

module.exports = CommonHouse;
