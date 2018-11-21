var mongoose = require('mongoose');
var User = require('./user.model.js');

var projectSchema = mongoose.Schema({
    projectName: String,
    projectDesc: String,
    teamMembers: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    currentSprintNo: Number,
    projectOngoing: Boolean
});

module.exports = mongoose.model('Project',projectSchema);