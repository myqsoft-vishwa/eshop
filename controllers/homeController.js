exports.index = function(req,res){
   res.render('home/index.ejs');
};
exports.login = function(req,res){
   res.render('home/login.ejs');
};
exports.checklogin= function(req,res){
    console.log(req.body)
};