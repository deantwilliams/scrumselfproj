const user = require('../controllers/user.controller');
const home = require('../controllers/home.controller');
const project = require('../controllers/project.controller');

const passport = require('passport');
const router = require('express').Router();

router.get('/',home.home);

router.post('/user/register',user.create);
router.get('/user/login',passport.authenticate('local',{ successRedirect: '/', failureRedirect: '/'}));
router.get('/user/logout',user.logout);

router.post('/project/new',project.create);
router.get('/project/:id',project.retrieve);
router.patch('/project/:id',project.update);

module.exports = router;