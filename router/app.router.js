// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/admin');
        res.end();
    }    
};

module.exports = function(app) {
	const user = require('../controller/users.controller.js');
	const post = require('../controller/posts.controller.js');
	app.get('/', user.listUser);	
	app.get('/users', user.listUser);
	app.post('/sign-up', user.createUser);
	app.put('/users/:userId', user.updateUser);
	app.delete('/users/:userId', user.deleteUser);
	app.post('/sign-in', user.signIn);
	app.post('/posts', post.createPost);
	app.get('/posts', post.listPost);	
	app.get('/posts/:limitId', post.listPostAsPerPage);
	app.get('/popular-posts', post.popularPosts);

	// admin route start from here
	const login = require('../controller/admin/login.controller.js');
	app.get('/admin', login.showLogin);
	app.post('/login', login.checkLogin);

	//dashboard route
	const home = require('../controller/admin/home.controller.js');
	app.get('/dashboard', sessionChecker , home.showHome);
	app.get('/dashboard/managers', sessionChecker, home.getManagers);
	app.post('/dashboard/save-managers', user.createUser);

}