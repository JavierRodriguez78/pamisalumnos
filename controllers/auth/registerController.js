const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UserModel = require('../../models/userModel');
const UUidHelper = require('../../helpers/UUidHelper');
const EmailService = require('../../services/emailService');
class registerController extends  Controller{

    constructor (req, res ,next){
        super(req, res ,next)
    }

    index(){
        if(this.req.flash.error){
            this.res.render('register',{error: this.req.flash.error});
            this.req.flash.error=null;

        }
        this.res.render('register',{title:"register"});
    }

    async register(){
        this.req.flash.error=null;
        let user = {};
        user['username'] = this.req.body.username;
        user.email = this.req.body.email;
        user.pass = EncryptService.encryptPass(this.req.body.pass);
        user.active = 0;
        user.hash=UUidHelper.getUUid(3,4);
        try {

            let userModel = new UserModel();

            let resultUserByEmail = await userModel.getUserByEmail(user.email);
            let resultUserByUserName = await userModel.getUserByUserName(user.username);

            if((resultUserByEmail.length > 0)&&(resultUserByUserName.length >0) ){
                this.req.flash.error="El email o username ya existe";
                this.index();
             }else {
                let result = await userModel.insert(user);
                let emailService = new EmailService();
                let resultEmail = await emailService.sendRegisterEmail(user);
                this.res.render('/');
            }

        }catch(error){
            this.req.flash.error= error;
           //return this.res.redirect('/register');
        }


    }
}

module.exports = registerController;
