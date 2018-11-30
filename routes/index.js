var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');
const ActivateController = require('../controllers/auth/activateController');
const LoginController = require('../controllers/auth/loginController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
