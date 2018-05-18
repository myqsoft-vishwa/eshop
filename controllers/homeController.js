var User = require(process.cwd() + "/models/User");
var md5 = require('md5');
exports.bootstrap = function(req, res, next) {

    res.locals.success_messages = req.flash('success_messages');
    res.locals.error_messages = req.flash('error_messages');

    next();

};
exports.index = function(req, res) {
    res.render('home/index.ejs');
};
exports.login = function(req, res) {
    res.render('home/login.ejs');
};
exports.checklogin = function(req, res) {
    var username = req.body.username;
    var password = md5(req.body.password);
    var condition = {
        "username": username,
        "password": password,
    }
    User.findOne(condition, function(err, result) {
        req.flash('success_messages', 'Login Successfully');
        res.redirect("/login")
    });

};
exports.signup = function(req, res) {
    var user = new User();
    user.password = md5(req.body.password);
    user.username = req.body.username;
    user.email = req.body.email;
    user.save();
    req.flash('success_messages', 'Signup Successfully');
    res.redirect("/login")
}