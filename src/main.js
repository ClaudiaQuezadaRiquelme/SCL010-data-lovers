const btnType = document.getElementById("type");
btnType.addEventListener("click", ()=> {
	document.getElementById("select_type").style.display = "block";
	document.getElementById("searchBar").style.display = "block";
	document.getElementById("select_type").addEventListener("change", ()=> {
		showPercentage(document.getElementById("select_type").value);
		document.getElementById("info").style.display = "block";
		document.getElementById("info").style.color= "#ff8000";
		dropdownMenuOption(document.getElementById("select_type").value);
	});	

});

let dropdownMenuOption = (stringType) => {
	
		let arrayPoke = window.pokeObject.arrayDataType(stringType);
		document.getElementById("pokes").innerHTML="";
		for (let j=0; j<arrayPoke.length; j++) { 
		let node2 = document.createElement("div")
		
		let node = document.createElement("li");

    let img=document.createElement("img");
		img.src=arrayPoke[j].img;
		img.id="picture"
		node.appendChild(img);
		
		node.appendChild(document.createElement("br"));

		let textNode = document.createTextNode("id: "+arrayPoke[j].id);
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Nombre: "+arrayPoke[j].name);
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Numero: " + arrayPoke[j].num + "");
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Tipo: "+arrayPoke[j].type);
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Altura: "+arrayPoke[j].height + "");
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Peso: "+arrayPoke[j].weight + "");
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("Huevos: "+ arrayPoke[j].egg + "");
		node.appendChild(textNode);
		node.appendChild(document.createElement("br"));

		let phrase = document.createElement("P");
			phrase.id="phrase"+arrayPoke[j].name;
		let textPhrase = document.createTextNode("Hola, soy "+arrayPoke[j].name + ". Los pokemon tipo "+ window.pokeObject.pokeWeaknesses(arrayPoke[j].name) + " me hacen mucho daño. Aparezco a las "+ arrayPoke[j].spawn_time);
		phrase.appendChild(textPhrase);
		node.appendChild(phrase);
		node.appendChild(document.createElement("br"));

		node2.appendChild(node);


		document.getElementById("pokes").appendChild(node2);
		node2.setAttribute("id", arrayPoke[j].name);
    
		document.getElementById("phrase"+arrayPoke[j].name).style.display = "none";
		document.getElementById(arrayPoke[j].name).addEventListener("mouseover", ()=> {
			document.getElementById("phrase"+arrayPoke[j].name).style.display = "block";
		});
		document.getElementById(arrayPoke[j].name).addEventListener("mouseout", ()=> {
			document.getElementById("phrase"+arrayPoke[j].name).style.display = "none";
		});
		document.getElementById("phrase" + arrayPoke[j].name).style.color= "#ff8000";
	}
}

let showPercentage = (stringType) => {
	document.getElementById("info").innerHTML="";
	let node = document.createElement("DIV");
	let textNode = document.createTextNode("El porcentaje de los pokémon tipo "+stringType+ " es " + 
		window.pokeObject.pokePercentage(stringType).toFixed(2) + "%. (" + window.pokeObject.amountOfPokesByType(stringType) + " de " + 
		window.pokeData.length + ").");
	node.appendChild(textNode);
	document.getElementById("info").appendChild(node);
}


