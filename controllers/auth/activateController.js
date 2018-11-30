const Controller = require('../controller');
const UserModel = require('../../models/userModel');

class activateController extends Controller{
    constructor(req, res,next){
        super(req,res,next);
    }

    async activated(){
        let hash = this.req.params.hash;
        let userModel = new UserModel();
        try {
            let resultUser = await userModel.getUserByHash(hash);
            if(resultUser.length > 0){
                let result = await userModel.setActiveUser(resultUser[0].id);
                this.res.render('activate');
            }else{
                this.res.render('activate', {error:"El hash no existe"});
            }
        }catch(error){
            this.res.render('activate',{error: error});
        }
    }
}

module.exports= activateController;