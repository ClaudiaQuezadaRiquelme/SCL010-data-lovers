global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('arrayDataType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayDataType, 'function');
  });

  it('debería retornar "object"', () => {
    assert.equal(arrayDataType(), 'object');
  });
});

describe('arrayPokeType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayPokeType, 'function');
  });

  it('debería retornar "object"', () => {
    assert.equal(arrayPokeType(), 'object');
  });
})
