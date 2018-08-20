function startArg1810()
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				//var dadosRecibidos = JSON.parse(this.responseText);
                //document.getElementById("provinciaInfo").innerHTML = cityInfoParsed.descripcion;
			}
		}
		xmlhttp.open("POST", "startArg1810.php?name=" + "arg1810", "currentScreen=" + 0, true);
		xmlhttp.send();
	}