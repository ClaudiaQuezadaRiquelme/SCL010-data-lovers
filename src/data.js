// /* Manejo de data */
// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window

const pokeData = POKEMON.pokemon;

const arrayDataType = (stringType) => {//Función que retorna arreglo vacío de los pokemones del tipo ingresado
  let typeArray = [];//Crear array vacío donde se guardarán pokemones del tipo ingresado.
  for (let i=0; i<pokeData.length; i++) { //recorrer arreglo de pokemones y guardar pokemones en array vacio
    for(let x=0; x<pokeData[i].type.length; x++) {// recorre el arreglo de tipos de cada pokemon para saber cuál guardar.
      if (!(pokeData[i].type[x].localeCompare(stringType))) {//si el pokemon es del tipo ingresado,
        typeArray.push(pokeData[i]);//guarda el pokemon en el arreglo de pokemones de ese tipo
      }
    }
  }
  return typeArray;
 };

window.arrayDataType = arrayDataType;

// window.POKEMON = POKEMON;
// //window.leer_data_POKEMON = leer_data_POKEMON;
/*
for (let i=0; i<POKEMON.pokemon.length; i++){
for(let x=0; x<POKEMON.pokemon[i].type.length; x++){
if(POKEMON.pokemon[i].type[x]==="Fire"){
console.log(POKEMON.pokemon[i].type[x])}}}

let ArrayVacio = [];
for (let i=0; i<POKEMON.pokemon.length; i++){
for(let x=0; x<POKEMON.pokemon[i].type.length; x++){
console.log("pokemon: "+ POKEMON.pokemon[i].name);
if(!(POKEMON.pokemon[i].type[x].localeCompare("Fire")))
{ console.log(POKEMON.pokemon[i].type[x]);
ArrayVacio.push(POKEMON.pokemon[i]);}}}

for (let i=0; i<ArrayVacio.length; i++){
console.log("pokemon: "+ ArrayVacio[i].name);
for (let x=0; x<ArrayVacio[i].type.length; x++) {
console.log(ArrayVacio[i].type[x]) } }
*/
