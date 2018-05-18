var mongoose = require("mongoose");
mongoose.connect('mongodb://root:123456@ds227740.mlab.com:27740/eshop');
module.exports = mongoose;