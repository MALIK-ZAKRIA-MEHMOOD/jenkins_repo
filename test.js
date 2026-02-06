'use strict';

const { expect } = require('chai');
const { add } = require('../src/math');

describe('Math Utilities', () => {

  describe('Addition', () => {

    it('should correctly add two positive numbers', () => {
      const result = add(2, 2);
      expect(result).to.equal(4);
    });

    it('should correctly add negative numbers', () => {
      const result = add(-2, -3);
      expect(result).to.equal(-5);
    });

    it('should throw error if inputs are not numbers', () => {
      expect(() => add(2, '2')).to.throw(TypeError, 'Inputs must be numbers');
    });

  });

});
