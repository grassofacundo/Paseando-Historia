function goToEraMenu() {
    window.location.href = "EraMenu.html";
}

function getObject() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
            elements = JSON.parse(this.responseText);
            updateFinishScreen(elements);
		}
	};
    xmlhttp.open("POST","/server-logic/userInfo.php");
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send();
}

function updateFinishScreen() {
    document.getElementById("congratulations").innerHTML = "¡Felicitaciones " . elements[0];
    document.getElementById('trophy-object').src=elements[2];
}