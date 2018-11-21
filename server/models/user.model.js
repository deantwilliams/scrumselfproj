var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Project = require('./project.model.js');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    //image: String,
    role: String,
    currentProj: {type:mongoose.Schema.Types.ObjectId,ref:'Project'}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);