const Mysql = require('mysql');

class mysqlConnection
{
    static getConnection(){
        return Mysql.createConnection({
            host:'localhost',
            user: 'root',
            password:'44865710',
            database:'pruebacon'
        })
    }
}

module.exports=mysqlConnection;