global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('pokemon_results', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof POKEMON, 'function');
  });

  it('debería retornar "pokemon_results"', () => {
    assert.equal(POKEMON(), 'pokemon_results');
  });
})
