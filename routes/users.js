var db = require("../models");
var passport = require("../config/passport");
var router = require('express').Router();

router.post("/api/login", function(req, res, next) {
    passport.authenticate('local',function(err, user, info){
        if (err) { return res.json(err); }
        if (!user) { 
            return res.status(404).json({message: 'No user found'}); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json(user);
        });
    })(req,res,next)
    // Sending back a password, even a hashed password, isn't a good idea
    // res.json("logged in");
  });

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", function(req, res) {
db.User.create({
    email: req.body.email,
    password: req.body.password
})
    .then(function() {
    res.redirect(307, "/api/login");
    })
    .catch(function(err) {
    res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function(req, res) {
req.logout();
res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function(req, res) {
if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
} else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
    email: req.user.email,
    id: req.user.id
    });
}
});

module.exports = router;