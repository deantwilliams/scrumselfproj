exports.home = (req, res) => {
    console.log('home.controller - home');
    if(req.user)
    {
        //get all user info, whatever is required for home page
        var user = req.user;
        res.json(user);
    }
    else
    {
        //return the home page not logged in
        res.json({'message':'user could not be found'});
    }
};
