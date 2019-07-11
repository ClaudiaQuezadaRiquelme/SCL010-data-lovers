global.window = global;
global.assert = require('chai').assert;
global.pokeData = global;
require('../src/data');
require('./data.spec.js');
// var arrayDataType = [];
// var amountOfPokesByType = 0;
// var pokePercentage = 0.0;
// var pokeWeaknesses = "";
// var arrayPokeType = "";

describe("window.pokeObject.arrayDataType", () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.pokeObject.arrayDataType, 'function');
  });

  it('debería retornar "object"', () => {
    assert.equal(typeof window.pokeObject.arrayDataType("Grass"), 'object');
  });
});



describe('window.pokeObject.amountOfPokesByType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.pokeObject.amountOfPokesByType, 'function');
  });

  it('debería retornar "number"', () => {
    assert.equal(typeof window.pokeObject.amountOfPokesByType("Grass"), 'number');
  });
});

describe('window.pokeData', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.pokeData, 'object');
  });
});

describe('window.pokeObject.pokePercentage', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.pokeObject.pokePercentage, 'function');
  });

  it('debería retornar "number"', () => {
    assert.equal(typeof window.pokeObject.pokePercentage("Grass"), 'number');
  });
});

describe('window.pokeObject.pokeWeaknesses', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.pokeObject.pokeWeaknesses, 'function');
  });

  it('debería retornar "string"', () => {
    assert.equal(typeof window.pokeObject.pokeWeaknesses("Victreebel"), 'string');
  });
});
