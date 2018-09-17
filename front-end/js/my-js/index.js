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