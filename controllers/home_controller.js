module.exports.home=function(req,res){
   console.log(req.cookies)
   res.cookie('user_id',25)
   
    return res.render('home',{
        title:'home'
    });
    // res.end('<h1>xyz</h1>');
}
