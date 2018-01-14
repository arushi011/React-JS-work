


/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'arushi.b',
        password: 'aru11@akg',
        server: 'localhost', 
        database: 'imydb' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from usermaster', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            
            console.log(recordset);
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});*/


/*const sql = require('mssql')
 
async () => {
    try {
        const pool = await sql.connect('mssql://hcltech\arushi.b:aru11@akg@localhost/imydb')
        const result = await sql.query`select * from usermaster`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}*/
/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 1443,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/