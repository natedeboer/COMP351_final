let http = require('http');
let url = require('url');
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
    let q = url.parse(req.url, true);
    res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://thomasbotelho.com'
    });
    db.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }
        let apiSQL = "UPDATE adminPage SET getInventory = getInventory + 1";
            connection.query(apiSQL, function (err, result) {
                    if (err) throw err;
                });
        
        let sql = "SELECT * FROM collection";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end(JSON.stringify(result));
        })
    })

});
server.listen();