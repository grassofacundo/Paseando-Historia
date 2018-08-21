function startArg1810()
	{
		window.location.href = "dialog-screen.html";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				var elements = JSON.parse(this.responseText);
				prepareScreen(elements);
			}
		};
		xmlhttp.open("GET", "../history/chapter-list/arg1810.php?name=arg1810" + "&currentScreen=" + 01, true);
		xmlhttp.send();
	}

function prepareScreen(elements){
	var image = document.getElementsById("speaking-character");
	image.src = "../front-end/Images/" + elements[0];
	var dialogue = document.getElementsById("dialogue").innerHTML=elements[1];
	
}