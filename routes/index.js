var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');
const ActivateController = require('../controllers/auth/activateController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',(req, res, next)=>{
  res.render('login',{title: "login"});
})

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
module.exports = router;
