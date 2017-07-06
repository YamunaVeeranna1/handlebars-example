var exp = require("express");

var app = exp();

app.get("/players", function(req, res){
	console.log("query is here" +JSON.stringify(query));
	var query = req.query;
	res.write("name=" + query.name);
	res.write("  lang=" + query.lang);
	res.end(JSON.stringify(query));
});
var port = process.env.PORT || 4000;

app.listen(port, function(){
	console.log("port is running on 4000");
});