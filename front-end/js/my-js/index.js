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
			window.location.href = "/paseando-historia/Paseando-Historia/HTML/history-main.html";
		}
	};
    xmlhttp.open("POST","/paseando-historia/Paseando-Historia/history/chapters-class/prepareChapter.php");
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//C:/wamp64/www/Paseando-Historia/Paseando-Historia/history/chapters-class/nextScreen.php
	xmlhttp.send("info=" + info);
}