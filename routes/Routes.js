module.exports = function(app) {
    var homeControllers = require(process.cwd() + '/controllers/homeController');


    app.route('/')
        .get(homeControllers.index);
    app.route('/login')
        .get(homeControllers.login);
    app.route('/checklogin')
        .post(homeControllers.checklogin);
};