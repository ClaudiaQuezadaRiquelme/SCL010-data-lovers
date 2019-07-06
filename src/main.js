/* Manejo del DOM */
const btnType = document.getElementById("type");

btnType.addEventListener("click", ()=> { // mostrar menu desplegable
	dropdownMenu.innerHTML = `<select id="dropdownType"></select>`//creo menú desplegable
	let ArrayType = arrayPokeType(); //arreglo de tipos
	for (let i=0; i< ArrayType.length; i++) { // recorro el arreglo de tipos para escribir en 'dropdownType' los <option> con tipos pokemon
		let node = document.createElement("OPTION");
		let textNode = document.createTextNode(ArrayType[i]);
		node.appendChild(textNode);
		document.getElementById("dropdownType").appendChild(node);
		document.getElementsByTagName("OPTION")[i].setAttribute("id", ArrayType[i]); //Asigna id a cada <option> igual al tipo que alberga
	}
});
