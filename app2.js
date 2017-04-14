var exp = require("express");

var app = exp();

app.get("/players/:name/:lang", function(req, res){
	//console.log("query is here" +JSON.stringify(query));
	//var query = req.query;
	res.write("name=" + req.params.name);
	res.write("  lang=" + req.params.lang);
	res.end(JSON.stringify(req.params));
});
var port = process.env.PORT || 4000;

app.listen(port, function(){
	console.log("port is running on 4000");
});