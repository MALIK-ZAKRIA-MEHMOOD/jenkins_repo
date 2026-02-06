'use strict';

const { expect } = require('chai');
const { getTitle } = require('../public/app');

describe('Website Content Test', () => {
  it('should return correct website title', () => {
    expect(getTitle()).to.equal('Welcome to CI Website');
  });
});
