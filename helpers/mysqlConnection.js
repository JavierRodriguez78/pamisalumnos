const Mysql = require('mysql');
const ConfigEm = require('../config');
class mysqlConnection
{
    static getConnection(){
        return Mysql.createConnection({
            host:ConfigEm.mysql.host,
            user: ConfigEm.mysql.user,
            password:ConfigEm.mysql.password,
            database: ConfigEm.mysql.database
        })
    }
}

module.exports=mysqlConnection;