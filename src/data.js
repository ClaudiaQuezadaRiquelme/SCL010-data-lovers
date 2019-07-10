// /* Manejo de data */
// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window

const pokeData = window.POKEMON.pokemon;

const arrayDataType = (stringType) => {//Función que retorna arreglo con los pokemones del tipo ingresado
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

const arrayPokeType = () => {
  let ArrayType = []; //Array vacío donde guardaremos los tipos de pokemon

  for(let i=0; i < pokeData.length; i++) {//recorremos el arreglo de pokes

    if (ArrayType.length === 0){ //si el arreglo de tipos ya está vacío
    ArrayType.push(pokeData[i].type[0]); //guarda el primer tipo de ese pokemon en el arreglo de tipos
  }
    else { //si el arreglo de tipos no está vacío
      for (let x=0; x < pokeData[i].type.length; x++) { //recorremos el arreglo de tipos del pokemon
        let count = 0; //contador que nos ayudará a reconocer cuando guardar el tipo en el arreglo de tipos sin que se repitan.

        for (let z=0; z < ArrayType.length; z++) { //recorremos el arreglo de tipos
          if (!(pokeData[i].type[x].localeCompare(ArrayType[z]))) {//si el tipo del pokemon es igual a un tipo del arreglo de tipos
            continue; //continuar
          }
          else {
            count++; //si no, aumenta el contador
            if (count == ArrayType.length) { //si el contador es igual al largo del arreglo de tipos, significa que el tipo del pokemon no se ha guardado en el arreglo de tipos, por lo tanto, lo tenemos que guardar
              ArrayType.push(pokeData[i].type[x]);//guarda el tipo de ese pokemon en el arreglo de tipos
            }
          }
        }
      }
    }
  }
  return ArrayType;
}

const amountOfPokesByType = (stringType) => { //Retorna cantidad de pokemones por tipo indicado en stringType
  let typeArray = arrayDataType(stringType);
  return typeArray.length;
}

const pokePercentage = (stringType) => {
  return (100 * amountOfPokesByType(stringType)) / pokeData.length;
}

const pokeWeaknesses = (stringPokeName) => {//Retorna string con Weaknesses del poke. Recibe el nombre del poke del cual queremos conocer sus debilidades.
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


window.arrayDataType = arrayDataType;
window.arrayPokeType = arrayPokeType;
window.amountOfPokesByType = amountOfPokesByType;
window.pokeData= pokeData;
window.pokePercentage = pokePercentage;
window.pokeWeaknesses = pokeWeaknesses;
