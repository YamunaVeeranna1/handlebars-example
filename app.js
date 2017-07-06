var exp = require("express");

var app = exp();

var bodyParser = require("body-parser");
var session = require("express-session");
var routes = require("./routes/routes.js");
var hbars = require('express-handlebars');

app.use(exp.static(__dirname + "/public"));

//body parser
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));

//session handling
app.use(session({secret:"secret", resave: true, saveUninitialized: true}));

//handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({}));


app.get('/', routes.loginPageHandler);
app.get('/toLanding', routes.landingPageHandler);
app.post('/toCity', routes.cityPageHandler);


var port = process.env.PORT || 4000;

app.listen(port, function(){
	console.log("port is running on port" + port);
});