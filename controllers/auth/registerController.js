const Controller = require('../controller');

class registerController extends  Controller{

    constructor (req, res ,next){
        super(req, res ,next)
    }

    index(){
        this.res.render('register',{title:"register"});
    }
}

module.exports = registerController;