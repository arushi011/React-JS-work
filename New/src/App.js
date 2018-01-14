import profiles from './profiles-data.js'
var sql = require('mssql');

//var net = require('net');
//
//var server = net.createServer(function(socket) {
//	socket.write('Echo server\r\n');
//	socket.pipe(socket);
//});
//
//server.listen(3000, '192.168.1.102');
//console.log('listening to port 1337');

function loadUsers() {
    //4.
    var dbConn =  new sql.ConnectionPool("server=127.0.0.1;User Id=HCLTECH\\arushi.b;Password=aru11@akg;database=iMyDB;Integrated Security=true;Min Pool Size=2;Max Pool Size=1500;Connection Lifetime=90;Pooling=True;");
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select * from usermaster").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
            return recordSet;
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

var result = loadUsers();
profiles.addRange(result.recordset);

export default profiles;

/*var config = {
    server: 'localhost',
    database: 'iMyDB',
    user: 'HCLTECH\\arushi.b',
    password: 'aru11@akg',
};
*/
