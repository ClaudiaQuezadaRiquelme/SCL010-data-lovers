/* Manejo del DOM */
const btnType = document.getElementById("type");

btnType.addEventListener("click", ()=> {
	document.getElementById("select_type").style.display = "block";
	document.getElementById("searchBar").style.display = "block";
	$("#select_type").change( ()=> {//que pase algo cuando elegimos una opcion del menú desplegable
		showPercentage(document.getElementById("select_type").value);//Agrego información al article id="info"
		document.getElementById("info").style.display = "block";
	  dropdownMenuOption(document.getElementById("select_type").value);//toma el valor elegido en el menú desplegable. Ej.: "Fire"
	});
});

let dropdownMenuOption = (stringType) => {//RECONOCE EL TIPO ELEGIDO POR EL USUARIO Y ESCRIBE LOS NOMBRES DE POKEMONES DE ESE TIPO
	let arrayPoke = arrayDataType(stringType);//arreglo de pokes del tipo stringType
	document.getElementById("pokes").innerHTML="";//limpiar div en caso de que tenga pokes
	for (let j=0; j<arrayPoke.length; j++) { //recorro el arreglo de pokes
		let node = document.createElement("DIV");//creo el contenedor <div></div>
		let textNode = document.createTextNode(arrayPoke[j].name);//escribo el nombre del poke en la posición j
		node.appendChild(textNode);//agrego al poke en el contenedor <div></div>
		document.getElementById("pokes").appendChild(node);//agrego el nodo al contenedor con id="pokes"
		node.setAttribute("id", arrayPoke[j].name);//al nodo creado le asigno el id=arrayPoke[j]
	};
};

let showPercentage = (stringType) => {//MOSTRAR PORCENTAJE DE TIPOS POKEMON
	document.getElementById("info").innerHTML="";//limpiar article en caso de que tenga info
	let node = document.createElement("DIV");//creo el contenedor <div></div>
	let textNode = document.createTextNode("El porcentaje de los pokémon tipo "+stringType+ " es "+pokePercentage(stringType).toFixed(2));
	node.appendChild(textNode);//agrego el porcentaje al contenedor <div></div>
	document.getElementById("info").appendChild(node);//agrego el nodo al article con id="info"
}
