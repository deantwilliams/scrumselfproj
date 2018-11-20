var User = require('../models/user.model.js');
const passport = require('passport');

exports.create = (req,res) => {

    console.log('user.controller - create');
    User.findOne({username: req.body.username},(err,user) =>{
        if(err)
        {
            res.json({"error":err.message});
        }
        if(user)
        {
            res.json({"message":"user already exists"});
        }

        User.register(new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                role: req.body.role
            }),
            req.body.password, (err, user) => {
                if(err)
                {
                    console.log(err);
                    return res.render('register');
                }
                passport.authenticate("local")(req,res, () => {
                    res.redirect('/user/login');
                });
            });
    });
};

exports.logout = (req,res) => {

    console.log('user.controller - logout');
  req.logout();
  res.redirect("/");
};
