var mysql = require('mysql');
var env = require('./env.js');
console.log(env.db_host);
//local mysql db connection
var connection = mysql.createConnection({
    host     :  us-cdbr-iron-east-02.cleardb.net,
    user     :  b57b2ab00fb679,
    password :  75f10a8d,
    database :  heroku_5108a8ced7246ad
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;