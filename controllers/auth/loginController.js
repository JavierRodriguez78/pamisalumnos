const Controller = require('../controller');
const UserModel = require('../../models/userModel');


class loginController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
    }

    index(){
        this.res.render('login',{title:"Login"});
    }

    async login()
    {
        let user = this.req.body;
        console.log(user);
    }

}

module.exports = loginController;