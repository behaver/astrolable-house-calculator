'use strict';

const { SunGeoEclipticHouse } = require('../index');
const { JDateRepository } = require('@behaver/jdate');
const expect = require("chai").expect;

describe('#SunGeoEclipticHouse', () => {
  describe('#Verify', () => {
    it('1992/08/15 08:25 岁干支历为：壬申/戊申', () => {
      let jdate = new JDateRepository(new Date(1992, 7, 15, 8, 25), 'date');
      let JDH = new SunGeoEclipticHouse(jdate, {
        originPoint: 255,
        sectionLength: 360,
        indexDeflection: 46,
        cycle: 60
      });

      expect(JDH.index).to.equal(8);

      JDH.originPoint = 15;
      JDH.sectionLength = 30;
      JDH.indexDeflection = 57;

      expect(JDH.index).to.equal(44);
    });

    it('1994/09/07 01:27 岁干支历为：甲戌/壬申', () => {
      let jdate = new JDateRepository(new Date(1994, 8, 7, 1, 27), 'date');
      let JDH = new SunGeoEclipticHouse(jdate, {
        originPoint: 255,
        sectionLength: 360,
        indexDeflection: 46,
        cycle: 60
      });

      expect(JDH.index).to.equal(10);

      JDH.originPoint = 15;
      JDH.sectionLength = 30;
      JDH.indexDeflection = 57;

      expect(JDH.index).to.equal(8);
    });

    it('2000/09/25 07:53 岁干支历为：庚辰/乙酉', () => {
      let jdate = new JDateRepository(new Date(2000, 8, 25, 7, 53), 'date');
      let JDH = new SunGeoEclipticHouse(jdate, {
        originPoint: 255,
        sectionLength: 360,
        indexDeflection: 46,
        cycle: 60
      });

      expect(JDH.index).to.equal(16);

      JDH.originPoint = 15;
      JDH.sectionLength = 30;
      JDH.indexDeflection = 57;

      expect(JDH.index).to.equal(21);
    });

    it('1949/10/01 14:00 岁干支历为：己丑/癸酉', () => {
      let jdate = new JDateRepository(new Date(1949, 9, 1, 14), 'date');
      let JDH = new SunGeoEclipticHouse(jdate, {
        originPoint: 255,
        sectionLength: 360,
        indexDeflection: 46,
        cycle: 60
      });

      expect(JDH.index).to.equal(25);

      JDH.originPoint = 15;
      JDH.sectionLength = 30;
      JDH.indexDeflection = 57;

      expect(JDH.index).to.equal(9);
    });
  });
});