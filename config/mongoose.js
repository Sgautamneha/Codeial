const mongoose = require('mongoose');
const Post = require('../models/post');

mongoose.connect('mongodb://localhost/codenial_development');
const db =mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to mongodb"));
db.once('open',function(){
    console.log('connected to database::mongodb');

});

// Post.find({})
//     .populate('user')
//     .exec(function(err, posts){
//         return resizeBy.render('home',{
//             title: "codeial | home",
//             posts: posts
//         })
//     })
module.exports=db;