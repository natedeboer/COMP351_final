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

const server = http.createServer(function(request, response) {
    var body = '';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      console.log('Body: ' + body);
      response.writeHead(200, {
          'Access-control-Allow-Methods': 'DELETE',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://thomasbotelho.com'
      });
      response.end(body);
      
      let jsonParse = JSON.parse(body);
      
        db.getConnection(function (err, connection) {
            if (err) {
                throw err;
            }
            
            let SQL = "UPDATE adminPage SET deleteInventory = deleteInventory + 1";
            connection.query(SQL, function (err, result) {
                    if (err) throw err;
                    response.end(result);
                });
            
            connection.query("DELETE FROM collection WHERE collection.itemId = ? AND collection.storeId = ?", [jsonParse[0].itemId, jsonParse[0].storeId], function (err, result) {
                if (err) throw err;
                response.end(result);
                });
            connection.release();
        });
    });
});
server.listen();