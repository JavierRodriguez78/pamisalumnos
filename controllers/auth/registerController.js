const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UserModel = require('../../models/userModel');

class registerController extends  Controller{

    constructor (req, res ,next){
        super(req, res ,next)
    }

    index(){
        this.res.render('register',{title:"register"});
    }

    register(){
        let pass = this.req.body.pass;
        let passEnc = EncryptService.encryptPass(pass);
        let userModel = new UserModel();
        userModel.insert('djkdlj');

        console.log("password ->" + pass, " Encryptado ->" + passEnc);
    }
}

module.exports = registerController;