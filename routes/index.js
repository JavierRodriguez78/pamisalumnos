var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');
const ActivateController = require('../controllers/auth/activateController');
const LoginController = require('../controllers/auth/loginController');
const HomeController = require('../controllers/homeController');
const SessionController = require('../controllers/auth/sessionController');


/* GET home page. */
router.get('/', function(req, res, next) {
  let homeController = new HomeController(req,res,next);
  homeController.index();
});

router.get('/register',(req, res ,next)=>{
  let registerController = new RegisterController(req, res ,next);
  registerController.index();
})

router.post('/register',(req, res, next)=>{
    let registerController = new RegisterController(req, res ,next);
    registerController.register();

})

router.get('/activate/:hash',(req, res,next)=>{
    let activateController = new ActivateController(req, res ,next);
    activateController.activated();
})

router.get('/login',(req, res ,next)=>{
    let loginController = new LoginController(req, res, next);
    loginController.index();
})

router.post('/login',(req, res, next)=>{
    let loginController = new LoginController(req, res ,next);
    loginController.login();
})

router.get('/closeSession',(req, res ,next)=>{
    let sessionController = new SessionController(req, res ,next);
    sessionController.closeSession();
})
module.exports = router;
