global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('arrayDataType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayDataType, 'function');
  });

  it('debería retornar "object"', () => {
    assert.equal(typeof arrayDataType("Grass"), 'object');
  });
});

describe('arrayPokeType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayPokeType, 'function');
  });

  it('debería retornar "object"', () => {
    assert.equal(typeof arrayPokeType(), 'object');
  });
});

describe('amountOfPokesByType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof amountOfPokesByType, 'function');
  });

  it('debería retornar "number"', () => {
    assert.equal(typeof amountOfPokesByType("Grass"), 'number');
  });
});

describe('pokeData', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof pokeData, 'object');
  });
});

describe('pokePercentage', () => {

  it('debería ser una función', () => {
    assert.equal(typeof pokePercentage, 'function');
  });

  it('debería retornar "number"', () => {
    assert.equal(typeof pokePercentage("Grass"), 'number');
  });
});

describe('pokeWeaknesses', () => {

  it('debería ser una función', () => {
    assert.equal(typeof pokeWeaknesses, 'function');
  });

  it('debería retornar "string"', () => {
    assert.equal(typeof pokeWeaknesses("Victreebel"), 'string');
  });
});
