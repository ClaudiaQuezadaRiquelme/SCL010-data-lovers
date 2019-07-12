const pokeData = window.POKEMON.pokemon;

window.pokeObject = {

arrayDataType: (stringType) => {
  let typeArray = [];
  for (let i=0; i<pokeData.length; i++) { 
    for(let x=0; x<pokeData[i].type.length; x++) {
      if (!(pokeData[i].type[x].localeCompare(stringType))) {
        typeArray.push(pokeData[i]);
      }
    }
  }
  return typeArray;
 },
 

amountOfPokesByType: (stringType) => { 
  let typeArray = window.pokeObject.arrayDataType(stringType);
  return typeArray.length;
},

pokePercentage: (stringType) => {
  return (100 * window.pokeObject.amountOfPokesByType(stringType)) / pokeData.length;
},

pokeWeaknesses: (stringPokeName) => {
  let arrayWeaknesses = [];
  let stringWeaknesses = "";
  for (let i=0; i<pokeData.length; i++) {
    if (stringPokeName === pokeData[i].name) {
      arrayWeaknesses = pokeData[i].weaknesses;
    }
  }
  for (let i=0; i<arrayWeaknesses.length; i++) {
    if (arrayWeaknesses.length === 1){
      stringWeaknesses += arrayWeaknesses[i];
      
    } else if (i===0) {
      stringWeaknesses += arrayWeaknesses[i];
    } else if (i === (arrayWeaknesses.length-1)){
      stringWeaknesses += (" y " + arrayWeaknesses[i]);
    } else {
      stringWeaknesses += (", " + arrayWeaknesses[i]);
    }
  }
  return stringWeaknesses;
}

}

window.pokeData= pokeData;


