function startChapter(chapterCode) 
{
		document.getElementById("startGame").remove();
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				var elements = JSON.parse(this.responseText);
				prepareScreen(elements);
			}
		};
		xmlhttp.open("GET", "../history/chapters-class/startChapter.php?name=" + chapterCode + "&currentScreen=" + 01, true);
		xmlhttp.send();
	}

function prepareScreen(elements){

	//Clean dialogue area
	dialogueArea = document.getElementById("dialogue-area");
	while (dialogueArea.firstChild) {
		dialogueArea.removeChild(dialogueArea.firstChild);
	}
	dialogueArea.removeAttribute("onclick");
	dialogueArea.classList.remove("hasPointer");
	createDialogue();
	
	if (elements[3] == null){
		createNextIcon();
	} else {
		createQuestion(elements);
	}

	document.getElementById("speaking-character").src = "../front-end/Images/" + elements[0];
	document.getElementById("dialogue").innerHTML=elements[1];
	document.getElementById("background").style.backgroundImage = "url(../front-end/Images/background/" + elements[2] + ")";
	document.getElementById("main-container").style.visibility = "visible";
}

function createDialogue(){
	//create dialogue div
	var div = document.createElement("div");
	div.setAttribute("class", "dialogue col-11");
	//create dialogue text
	var dialogue = document.createElement("p");
	dialogue.setAttribute("id", "dialogue");
	//append text indo dialogue div
	div.appendChild(dialogue);

	dialogueArea.appendChild(div);
}

function createNextIcon() {
	//Create clickToNext IMG tag
	var clickToNext = document.createElement("IMG");
	clickToNext.setAttribute("alt", "Click here!");
	clickToNext.setAttribute("class", "clickToNext");

	dialogueArea.appendChild(clickToNext);
	clickToNext.src = "../front-end/Images/click-gif-3.gif";

	dialogueArea.setAttribute("onclick", "next()");
	dialogueArea.classList.add("hasPointer");
}

function createQuestion(elements){
	//create buttons
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	var button3 = document.createElement("button");
	button1.setAttribute("class", "dialogue col-3 option-button hasPointer");
	button2.setAttribute("class", "dialogue col-3 option-button hasPointer");
	button3.setAttribute("class", "dialogue col-3 option-button hasPointer");
	button1.setAttribute("onclick", "checkAnswer()");
	button2.setAttribute("onclick", "checkAnswer()");
	button3.setAttribute("onclick", "checkAnswer()");
 
	dialogueArea.appendChild(button1);
	dialogueArea.appendChild(button2);
	dialogueArea.appendChild(button3);

	var option1 = document.createElement("p");
	var option2 = document.createElement("p");
	var option3 = document.createElement("p");
	option1.innerHTML=elements[3][0];
	option2.innerHTML=elements[3][1];
	option3.innerHTML=elements[3][2];

	button1.appendChild(option1);
	button2.appendChild(option2);
	button3.appendChild(option3);
}

function next(){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var elements = JSON.parse(this.responseText);
			prepareScreen(elements);
		}
	};
	xmlhttp.open("GET", "../history/chapters-class/nextScreen.php?", true);
	xmlhttp.send();
}