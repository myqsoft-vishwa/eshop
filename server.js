var express = require('express')
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
var routes = require('./routes/Routes'); 
routes(app);
app.listen(5000)