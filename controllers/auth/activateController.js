const Controller = require('../controller');
const UserModel = require('../../models/userModel');

class activateController extends Controller{
    constructor(req, res,next){
        super(req,res,next);
    }
    async activated(){
        let hash = this.req.params.hash;
        let userModel = new UserModel();
        let resultUser = await userModel.getUserByHash(hash);
        console.log(resultUser);
    }
}

module.exports= activateController;