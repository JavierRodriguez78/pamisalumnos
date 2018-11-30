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
            console.log(resultUser);
            let result = await userModel.setActiveUser(resultUser[0].id);
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
}

module.exports= activateController;