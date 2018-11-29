var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',(req, res, next)=>{
  res.render('login',{title: "login"});
})

router.get('/register',(req, res ,next)=>{

  res.render('register',{title: "register"});
})

router.post('/register',(req, res, next)=>{
    console.log(JSON.stringify(req.body));

})
module.exports = router;
