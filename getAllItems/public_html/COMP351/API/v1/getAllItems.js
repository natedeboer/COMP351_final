let http = require('http');
const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    multipleStatements: true,
    host: "localhost",
    user: "crazymup_final_project",
    password: "final_project",
    database: "crazymup_final_project"
});


var server = http.createServer(function(req, res) {
    res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://thomasbotelho.com'
    });
    db.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }
        
        let apiSQL = "UPDATE adminPage SET getItem = getItem + 1";
            connection.query(apiSQL, function (err, result) {
                    if (err) throw err;
                });
        
        let sql = "SELECT * FROM item";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end(JSON.stringify(result));
        })
    })

});
server.listen();