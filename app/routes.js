module.exports = function(app, passport) {

	// HOME PAGE ===========================
	app.get('/', function(req, res) {
		res.render('pages/index.jade', { user: req.user, message: req.flash('loginMessage') }); 
	});

	// LOGIN ===============================
	app.get('/login', function(req, res) {
		res.render('pages/login.jade', { message: req.flash('loginMessage') }); 
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// SIGNUP ==============================
	app.get('/signup', function(req, res) {
		res.render('pages/signup.jade', { message: req.flash('signupMessage') });
	});

	// PROCESS SIGNUP ======================
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// PROFILE SECTION =====================
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('pages/profile.jade', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// MTGDECKS ============================
	app.get('/mtgdecks', function(req, res) {
		res.render('pages/mtg/mtgdecks.jade', { user: req.user, message: req.flash('loginMessage') });
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}