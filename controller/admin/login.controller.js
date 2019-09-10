var User = require('../../models/user.model.js');

exports.showLogin = (req,res) => {
    res.render('admin/login');
};

exports.checkLogin = (req,res) => {	
	let get_user = (req.body);	
	let error = false;
	let data = [];
	let count = 0;
	if(!get_user.email) {
		data[count] = ['Email field is empty'];
		error = true;
		count++;
	}

	if(!get_user.password) {
		data[count] = ['Password field is empty'];			
		error = true;			
	}

	if(error == true) {
		console.log("errors");
		res.redirect('/dashboard');
	}


	User.checkLogin(get_user,function(err, user) {
		if (err) {
			res.send(err);
		}
		if(user.length > 0) {
			req.session.user  = user;				
			res.redirect('/dashboard');
		} else {
			res.redirect('/admin?x=1');
		}		
	});
};
