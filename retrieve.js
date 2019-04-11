function Get(url){
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET",url,false);
	Httpreq.send(null);
	return Httpreq.responseText;
}
var json_obj = JSON.parse(Get("http://api.ethplorer.io/getTokenInfo/0xcDe3Ef6CACF84Ad36d8A6eCcc964f25351296D36?apiKey=freekey"));
document.write(json_obj.totalSupply);
