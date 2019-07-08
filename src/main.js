/* Manejo del DOM */
const btnType = document.getElementById("type");

btnType.addEventListener("click", ()=> { // mostrar menu desplegable
	dropdownMenu.innerHTML = `<select id="dropdownType"></select>
														<div id="pokes"></div>`//creo menú desplegable
	let ArrayType = arrayPokeType(); //arreglo de tipos
	for (let i=0; i< ArrayType.length; i++) { // recorro el arreglo de tipos para escribir en 'dropdownType' los <option> con tipos pokemon
		let node = document.createElement("OPTION");// creo <option></option>
		let textNode = document.createTextNode(ArrayType[i]);// creo lo que quiero poner dentro de <option></option>
		node.appendChild(textNode);//lo pongo dentro
		document.getElementById("dropdownType").appendChild(node);//en <select id="dropdownType"></select> agrego el <option></option> creado
		node.setAttribute("value", ArrayType[i]);
		//document.getElementsByTagName("OPTION")[i].setAttribute("value", ArrayType[i]); //Asigna value a cada <option> igual al tipo que alberga
	}
	$("#dropdownType").change( ()=> {//que pase algo cuando elegimos una opcion del menú desplegable
	  dropdownMenuOption(document.getElementById("dropdownType").value);//toma el valor elegido en el menú desplegable. Ej.: "Fire"

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
