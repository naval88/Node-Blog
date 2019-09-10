var User = require('../../models/user.model.js');

exports.showHome = (req,res) => {	
	console.log(req.body);
	res.render('admin/home');
};

exports.getUsers = (req,res) => {
	User.listUser(function(err, user) {
		if (err) {
			res.send(err);
		}
		let data = {'data':user};
		res.render('admin/user.ejs',data);
	});			
};