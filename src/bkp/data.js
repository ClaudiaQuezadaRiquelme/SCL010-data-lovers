// /* Manejo de data */
// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window
const pokeData = window.POKEMON.pokemon;


// var arrayDataType = [];
// var pokePercentage = ;

window.pokeObject = {


arrayDataType: (stringType) => {//Función que retorna arreglo con los pokemones del tipo ingresado
  let typeArray = [];//Crear array vacío donde se guardarán pokemones del tipo ingresado.
  for (let i=0; i<pokeData.length; i++) { //recorrer arreglo de pokemones y guardar pokemones en array vacio
    for(let x=0; x<pokeData[i].type.length; x++) {// recorre el arreglo de tipos de cada pokemon para saber cuál guardar.
      if (!(pokeData[i].type[x].localeCompare(stringType))) {//si el pokemon es del tipo ingresado,
        typeArray.push(pokeData[i]);//guarda el pokemon en el arreglo de pokemones de ese tipo
      }
    }
  }
  return typeArray;
 },
 

amountOfPokesByType: (stringType) => { //Retorna cantidad de pokemones por tipo indicado en stringType
  let typeArray = window.pokeObject.arrayDataType(stringType);
  return typeArray.length;
},

pokePercentage: (stringType) => {
  return (100 * window.pokeObject.amountOfPokesByType(stringType)) / pokeData.length;
},

pokeWeaknesses: (stringPokeName) => {//Retorna string con Weaknesses del poke. Recibe el nombre del poke del cual queremos conocer sus debilidades.
  let arrayWeaknesses = [];
  let stringWeaknesses = "";
  for (let i=0; i<pokeData.length; i++) {//recorro el array de todos los pokes
    if (stringPokeName === pokeData[i].name) {//busco al poke que me interesa
      arrayWeaknesses = pokeData[i].weaknesses;//y guardo su arreglo de debilidades
    }
  }
  for (let i=0; i<arrayWeaknesses.length; i++) {//recorro el arreglo de debilidades del poke que me interesa para escribir el stringWeaknesses
    if (arrayWeaknesses.length === 1){//si tiene 1 debilidad sola
      stringWeaknesses += arrayWeaknesses[i];//la escribe sola
      //si tiene 2 o más debilidades:
    } else if (i===0) {//si es la primera debilidad del recorrido
      stringWeaknesses += arrayWeaknesses[i];//la escribe sola
    } else if (i === (arrayWeaknesses.length-1)){//si es la última debilidad del recorrido
      stringWeaknesses += (" y " + arrayWeaknesses[i]);//concatena con "y "
    } else {//si es una debilidad al medio del recorrido
      stringWeaknesses += (", " + arrayWeaknesses[i]);//concatena con ", " y " "
    }
  }
  return stringWeaknesses;
}


}



// window.arrayDataType = arrayDataType;
// window.arrayPokeType = arrayPokeType;
// window.amountOfPokesByType = amountOfPokesByType;
window.pokeData= pokeData;
// window.pokePercentage = pokePercentage;
// window.pokeWeaknesses = pokeWeaknesses;

// {
//   "env": {
//     "browser": true
//   },
//   "parserOptions": {
//     "ecmaVersion": 6
//   },
//   "extends": "eslint:recommended",
//   "globals": {
//     "pokeData": false,
//     "arrayDataType": false,
//     "pokeWeaknesses": false,
//     "pokePercentage": false, 
//     "amountOfPokesByType": false,
//     "pokeObject": false, 
//   }
// }
