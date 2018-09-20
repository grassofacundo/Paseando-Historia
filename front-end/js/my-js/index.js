function startChapter(info) {
    if (typeof info !== 'undefined') {

    } else {
        info = "intro";
    }
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			window.location.href = "/HTML/history-main.html";
		}
	};
    xmlhttp.open("POST","/history/chapters-class/prepareChapter.php");
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("info=" + info);
}

// Execute a function when the user releases a key on the keyboard
document.getElementById("username-input").addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element
    document.getElementById("myBtn").onblur();
  }
});

function updateName(name) {
	if (name === undefined || name === null || name === "undefined"){
		return;
	}

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			document.getElementById("username").innerHTML="¡Hola " + name + "!";
			document.getElementById("username-input-wrapper").classList.remove("show")
			document.getElementById("username-input-wrapper").classList.add("hide")
		}
	};
    xmlhttp.open("POST","/server-logic/userInfo.php");
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("name=" + name);
}