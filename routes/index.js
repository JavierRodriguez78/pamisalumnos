var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');

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
module.exports = router;
