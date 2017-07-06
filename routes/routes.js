//route handler loginPageHandler
exports.loginPageHandler(req, res){
	res.session.destroy();
	res.render('login.handlebars', {});
};
//route handler landingPageHandler
exports.landingPageHandler(req, res){
	var person;
	if(req.session.userName){
		person = req.session.userName;
	}else{
		person = req.query.nm;
		req.session.userName = person;
	}
	
	res.render('landingpage.handlebars', {welcomeMessage: person});
};
//route handler for cityPageHandler
exports.cityPageHandler(req, res){
	var interestValue = req.body.interest;
	var personName = req.session.userName;
	var taglineValue, cityNameValue;
	
	
	
	if(interestValue === 'fashion'){
		cityNameValue = "Paris";
		taglineValue = "Fashion city of the World";
	}else if(interestValue === 'history'){
		cityNameValue = "Rome";
		taglineValue = "Early civilisation";
	}else if(interestValue === 'finance'){
		cityNameValue = "New York";
		taglineValue = "Business capital of the World";
	}
	res.render('city.handlebars', {cityName:cityNameValue,
							tagline:taglineValue});
};


module.exports.homeFn = homeR;
module.exports.cityFn = cityR;

