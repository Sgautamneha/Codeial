const User=require('../models/user');



module.exports.profile=function(req,res){
    return res.end('<h1>user profile</h1>')
    // if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('user_profile',{
                    title:"User profile",
                    user:user
                })
            }
            

        });
    // }else{
    //     return res.redirect('/users/sign-in');
    // }
    }


module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:'codeial|sign up'
    })
}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_in',{
        title:'codeial|sign in'
    })
}

module.exports.create=function(req,res){
    if (req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body,function(err,user){
             if(err){console.log('error in creating user while signing up');return}
             return res.redirect('/users/sign-in');   
            })

        }else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession=function(req,res){
        //   User.findOne({email:req.body.email},function(err,user){
        //     if(err){console.log('error in creating user while signing up');return}

        //     if (user){

        //         if (user.password!=req.body.password){
        //             return res.redirect('back');
        //         }
        //         res.cookie('user_id',user.id);
        //         return res.redirect('/user/profile')
        //     }else{
        //         return res.redirect('back');
        //          }
        //   });     
        return res.redirect('/');
                                     
}
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}