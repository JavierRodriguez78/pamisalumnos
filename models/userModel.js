const MysqlConnection = require('../helpers/mysqlConnection');

class UserModel{

    constructor(){
        this.Conn = MysqlConnection.getConnection();
    }
    insert(user){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'INSERT INTO users SET ?';
            this.Conn.query(SQL,[user],(err, result)=>{
                if(err) return rej(err);
                else return res(result);
            })
        })
    }
    getUserByEmail(email){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'SELECT * from users where email="'+ email +'"';
            this.Conn.query(SQL,(err, result)=>{
                if(err) return rej(err);
                else return res(result);
            })
        })
    }

    getUserByUserName(username){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej ("No se ha podido crear la conexión");
            let SQL = 'SELECT * from users where username="'+username+'"';
            this.Conn.query(SQL,(error, result)=>{
                if(error) return rej(error);
                else return res(result);
            })
        })
    }

    getUserByHash(hash){
        return new Promise((res,rej)=>{
            if(!this.Conn) rej ("No se ha podido crear la conexión");
            let SQL= 'SELECT * FROM users where hash="'+hash+'"';
            this.Conn.query(SQL, (error, result)=>{
                if(error) return rej(error);
                else return res(result);
            })
        })
    }

    setActiveUser(id){
        return new Promise((res,rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexión");
            let SQL= 'UPDATE users set active = 1, hash = "" where id ='+id;
            this.Conn.query(SQL, (error, result)=>{
                if(error) return rej(error);
                else return res(result);
            })
        })
    }
}

module.exports= UserModel;