const Mysql = require('mysql');

class mysqlConnection
{
    static getConnection(){
        return Mysql.createConnection({
            host:'localhost',
            user: 'root1',
            password:'4486571',
            database:'pruebacon'
        })
    }
}

module.exports=mysqlConnection;