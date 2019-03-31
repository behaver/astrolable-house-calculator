'use strict';

const { JDateHouse } = require('../index');
const { JDateRepository } = require('@behaver/jdate');
const expect = require("chai").expect;

describe('#JDateHouse', () => {
  describe('#constructor(time, options)', () => {
    it('The param time should be an instance of JDateRepository.', () => {
      let jdate = new JDateRepository(new Date(1992, 7, 15, 8, 25), 'date');
      
      expect(() => {
        let JDH = new JDateHouse(jdate);
      }).not.to.throw();

      expect(() => {
        let JDH = new JDateHouse(123);
      }).to.throw();
    });
  });

  describe('#get time()', () => {
    it('The return of method should be an instance of JDateRepository.', () => {

    });
  });

  describe('#set time(value)', () => {
    it('The param value should be an instance of JDateRepository.', () => {

    });
  });

  describe('get originPoint()', () => {
    it('The return of method should be a Number.', () => {

    });
  });

  describe('set originPoint(value)', () => {
    it('The param value should be a Number.', () => {

    });
  });

  describe('get sectionLength()', () => {
    it('The return of method should be a Number.', () => {

    });
  });

  describe('set sectionLength(value)', () => {
    it('The param value should be a Number.', () => {

    });
  });

  describe('get indexDeflection()', () => {
    it('The return of method should be a Number.', () => {

    });
  });

  describe('set indexDeflection(value)', () => {
    it('The param value should be a Number.', () => {

    });
  });

  describe('get cycle()', () => {
    it('The return of method should be a Number.', () => {

    });
  });

  describe('set cycle(value)', () => {
    it('The param value should be a Number.', () => {

    });
  });

  describe('#Verify', () => {
    it('1992/08/15 08:25 癸亥 丙辰', () => {
      let jdate = new JDateRepository(new Date(1992, 7, 15, 8, 25), 'date');
      let JDH = new JDateHouse(jdate, {
        originPoint: 0.5 + 8 / 24,
        sectionLength: 1,
        indexDeflection: 11,
        cycle: 60
      });

      expect(JDH.index).to.equal(59);

      JDH.originPoint = 1 / 24;
      JDH.sectionLength = 1 / 12;
      JDH.indexDeflection = 2;

      expect(JDH.index).to.equal(52);
    });

    it('2000/09/25 07:53 丙戌 壬辰', () => {
      let jdate = new JDateRepository(new Date(2000, 8, 25, 7, 53), 'date');
      let JDH = new JDateHouse(jdate, {
        originPoint: 0.5 + 8 / 24,
        sectionLength: 1,
        indexDeflection: 11,
        cycle: 60
      });

      expect(JDH.index).to.equal(22);

      JDH.originPoint = 1 / 24;
      JDH.sectionLength = 1 / 12;
      JDH.indexDeflection = 2;

      expect(JDH.index).to.equal(28);
    });

    it('1994/09/7 01:27 丙申 己丑', () => {
      let jdate = new JDateRepository(new Date(1994, 8, 7, 1, 27), 'date');
      let JDH = new JDateHouse(jdate, {
        originPoint: 0.5 + 8 / 24,
        sectionLength: 1,
        indexDeflection: 11,
        cycle: 60
      });

      expect(JDH.index).to.equal(32);

      JDH.originPoint = 1 / 24;
      JDH.sectionLength = 1 / 12;
      JDH.indexDeflection = 2;

      expect(JDH.index).to.equal(25);
    });
  });
});