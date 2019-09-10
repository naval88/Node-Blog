exports.showLogin = (req,res) => {
	console.log("in admin");
    //res.render('view/index',data);
    res.render('admin/login');
};

exports.checkLogin = (req,res) => {	
	console.log(req.body);
	res.redirect('/dashboard');
};
