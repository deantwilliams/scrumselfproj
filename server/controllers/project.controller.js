var Project = require('../models/project.model.js');

exports.create = (req,res) => {
    console.log('project.controller - create');
    var proj = new Project({
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        teamMembers: req.body.teamMembers,
        currentSprintNo: 0,
        projectOngoing: true
    });

    proj.save().then(proj =>{
        console.log("project saved");
    }).catch(err => {
        console.log(err);
    });

    res.json({'message':'project saved'});
};

exports.retrieve = async (req,res) => {
    let proj = await Project.findOne({'_id':req.params.id}).populate('teamMembers').exec();
    res.json(proj);
};

exports.update = (req,res) => {
    Project.findByIdAndUpdate(req.params.id, { $set: req.body }, {new:true}, (err,proj) => {
        if(err)
        {
            res.json({'message':err.message});
        }
        res.json(proj);
    });
};