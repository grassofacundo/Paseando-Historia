function next(answer){
	if (answer === undefined || answer === null || answer === "undefined"){
		type = "next";
		infoToSend = "";
	} else {
		type= "answer";
		infoToSend = answer;
	}
	doAjax(type, infoToSend);
}

function doAjax(type, infoToSend) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			elements = JSON.parse(this.responseText);
			if (elements[0] == "finished") {
				window.location.href = "finish.html";
			}
			prepareScreen(elements);
		}
	};
	xmlhttp.open("POST", "/history/chapters-class/nextScreen.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("type=" + type + "&info=" + infoToSend);
}

function prepareScreen(){
	//Crea variables globales para accederlas desde la pregunta y desde el diálogo
	dialogueArea = document.getElementById("dialogue-area");

	//Acá tengo que borrar el contenido del recuadro.
	cleanDialogue();

	//Ahora tengo que completar todos los elementos que acompañan al diálogo (sin completar el diálogo)
	document.getElementById("speaking-character").src = "../front-end/Images/menu-characters/Arg1810/Arg1810H/" + elements[1];
	document.getElementById("speaking-character").style.visibility = "visible";
	document.getElementById("character-name-container").classList.add("toLeft");
	document.getElementById("character-name-container").classList.remove("toRight");
	document.getElementById("background").style.backgroundImage = "url(../front-end/Images/background/" + elements[4] + ")";
	document.getElementById("main-container").style.visibility = "visible";


	if (elements[0] == "question") {
		createQuestion();
	} else if (elements[0] == "dialogue"){
		createDialogue();
	}
}

function createQuestion(){

	//Crea la pregunta que acompaña a los cuadros
	createDialogue();
	document.getElementById("clickToNext").style.visibility = "hidden";

	//create buttons
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	var button3 = document.createElement("button");
	button1.setAttribute("class", "dialogue option-button hasPointer");
	button2.setAttribute("class", "dialogue option-button hasPointer");
	button3.setAttribute("class", "dialogue option-button hasPointer");
	/*Hack para que no haya screen de ayuda en la intro
	if (elements[2] == "Profe historia") {
		button1.setAttribute("onclick", "next()");
		button2.setAttribute("onclick", "next()");
		button3.setAttribute("onclick", "next()");
	} else { */
	button1.setAttribute("onclick", "showHelp(this,'" + elements[7][0][1] + "')");
	button2.setAttribute("onclick", "showHelp(this,'" + elements[7][1][1] + "')");
	button3.setAttribute("onclick", "showHelp(this,'" + elements[7][2][1] + "')");
	/*}*/

	var buttonContainer = document.createElement("div");
	buttonContainer.setAttribute("class", "button-container");
	dialogueArea.appendChild(buttonContainer);

	buttonContainer.appendChild(button1);
	buttonContainer.appendChild(button2);
	buttonContainer.appendChild(button3);

	var option1 = document.createElement("p");
	var option2 = document.createElement("p");
	var option3 = document.createElement("p");
	option1.innerHTML=elements[7][0][0];
	option2.innerHTML=elements[7][1][0];
	option3.innerHTML=elements[7][2][0];

	button1.appendChild(option1);
	button2.appendChild(option2);
	button3.appendChild(option3);
}

function showHelp(answer, helpText) {

	cleanDialogue();
	elements[0] = "dialogue";
	elements[3] = helpText;
	elements[2] = "Profe"
	elements[5] = "rgb(0, 123, 255, 0.6)";
	document.getElementById("speaking-character").style.visibility = "hidden";
	document.getElementById("character-name-container").classList.remove("toLeft");
	document.getElementById("character-name-container").classList.add("toRight");
	answer = answer.children["0"].innerHTML;
	document.getElementById("teacher").style.visibility = "visible";
	event.stopPropagation();
	createDialogue(answer);
}

function createDialogue(answer){

	//create dialogue div
	var div = document.createElement("div");
	div.setAttribute("class", "dialogue");
	dialogueArea.style.backgroundColor = elements[5];
	document.getElementById("character-name-container").style.backgroundColor = elements[5];

	//create dialogue text
	var dialogue = document.createElement("p");
	dialogue.setAttribute("id", "dialogue");
	//append text indo dialogue div
	div.appendChild(dialogue);

	dialogueArea.appendChild(div);
	document.getElementById("character-name").innerHTML=elements[2];
	document.getElementById("dialogue").innerHTML=elements[3];
	if (elements[0] != "question") {
		dialogueArea.setAttribute("onclick", "next('" + answer + "')");
		dialogueArea.classList.add("hasPointer");
	}
	createNextIcon();
}

function createNextIcon() {
	//Create clickToNext IMG tag
	var clickToNext = document.createElement("IMG");
	clickToNext.setAttribute("alt", "Click here!");
	clickToNext.setAttribute("id", "clickToNext");

	dialogueArea.appendChild(clickToNext);
	clickToNext.src = "../front-end/Images/click-gif-3.gif";
}

function cleanDialogue() {
	//Clean dialogue area
	while (dialogueArea.firstChild) {
		dialogueArea.removeChild(dialogueArea.firstChild);
	}
	dialogueArea.removeAttribute("onclick");
	dialogueArea.classList.remove("hasPointer");
	document.getElementById("teacher").style.visibility = "hidden";
}

function GoToMenu() {
    window.location.href = "../index.html";
}