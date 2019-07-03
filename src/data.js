// /* Manejo de data */
// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window

const datos = POKEMON.pokemon;

// const POKEMON = () => {
//   return 'pokemon_results';
// };


// window.POKEMON = POKEMON;
// //window.leer_data_POKEMON = leer_data_POKEMON;

for (let i=0; i<POKEMON.pokemon.length; i++){
for(let x=0; x<POKEMON.pokemon[i].type.length; x++){
if(POKEMON.pokemon[i].type[x]==="Fire"){
console.log(POKEMON.pokemon[i].type[x])}}}


for (let i=0; i<POKEMON.pokemon.length; i++){ 
for(let x=0; x<POKEMON.pokemon[i].type.length; x++){ 
console.log("pokemon: "+ POKEMON.pokemon[i].name); 
if(!(POKEMON.pokemon[i].type[x].localeCompare("Fire")))
{ console.log(POKEMON.pokemon[i].type[x])}}} 

for (let i=0; i<ArrayVacio.length; i++){ 
console.log("pokemon: "+ ArrayVacio[i].name); 
for (let x=0; x<ArrayVacio[i].type.length; x++) { 
console.log(ArrayVacio[i].type[x]) } } 

