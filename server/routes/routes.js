const user = require('../controllers/user.controller.js');
const home = require('../controllers/home.controller');

const passport = require('passport');
const router = require('express').Router();

router.get('/',home.home);
router.post('/user/register',user.create);
router.get('/user/login',passport.authenticate('local',{ successRedirect: '/', failureRedirect: '/'}));
router.get('/user/logout',user.logout);

module.exports = router;