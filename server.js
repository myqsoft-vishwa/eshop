var express = require('express')
var bodyParser = require("body-parser");
var session = require('express-session');
var flash=require('express-flash');
var app = express();
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'ssshhhhh', proxy: true, resave: true, saveUninitialized: true, cookie: { maxAge: 24 * 60 * 60 * 1000 } }));
var routes = require('./routes/Routes'); 
routes(app);
app.listen(5000)