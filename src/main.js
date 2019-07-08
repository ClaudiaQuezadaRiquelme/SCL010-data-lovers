/* Manejo del DOM */
const btnType = document.getElementById("select_type");

btnType.addEventListener("click", ()=> {
	$("#select_type").change( ()=> {//que pase algo cuando elegimos una opcion del menú desplegable
	  dropdownMenuOption(document.getElementById("select_type").value);//toma el valor elegido en el menú desplegable. Ej.: "Fire"
	});
});

let dropdownMenuOption = (stringType) => {
	let arrayPoke = arrayDataType(stringType);//arreglo de pokes del tipo stringType
	for (let j=0; j<arrayPoke.length; j++) { //recorro el arreglo de pokes
		let node = document.createElement("DIV");//creo el contenedor <div></div>
		let textNode = document.createTextNode(arrayPoke[j].name);//escribo el nombre del poke en la posición j
		node.appendChild(textNode);//agrego al poke en el contenedor <div></div>
		document.getElementById("pokes").appendChild(node);//agrego el nodo al contenedor con id="pokes"
		node.setAttribute("id", arrayPoke[j].name);//al nodo creado le asigno el id=arrayPoke[j]
	}
}
