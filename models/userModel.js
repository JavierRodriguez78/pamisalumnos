const MysqlConnection = require('../helpers/mysqlConnection');

class UserModel{

    constructor(){
        this.Conn = MysqlConnection.getConnection();
    }
    insert(user){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'INSERT INTO user SET ?';
            this.Conn.query(SQL,[user],(err, result)=>{
                if(err) return rej(err);
                else return res(result.id);
            })
        })
    }
}

module.exports= UserModel;