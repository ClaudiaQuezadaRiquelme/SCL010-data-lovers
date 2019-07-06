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
		document.getElementsByTagName("OPTION")[i].setAttribute("value", ArrayType[i]); //Asigna value a cada <option> igual al tipo que alberga
	}
	$("#dropdownType").change(function(){//que pase algo cuando elegimos una opcion del menú desplegable
	  alert("Esto lo cambiamos por lo que queremos que pase cuando seleccionemos un tipo.");
	});

});



/*
let dropdownMenuOption = (stringType) => {
	let optionType = document.getElementById(stringType);
	optionType.addEventListener("change", () => {
		let typeArray = arrayDataType(stringType);
		for (let i=0; i< typeArray.length; i++) {
			let node = document.createElement("DIV");
			let textNode = document.createTextNode(typeArray[i].name);
			node.appendChild(textNode);
			document.getElementById("pokes").appendChild(node);
			document.getElementsByTagName("DIV")[i].setAttribute("id", typeArray[i].name);
		}
	}
)};
*/
