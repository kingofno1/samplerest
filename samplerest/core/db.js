var sqldb = require("mssql");
var config = require("../dbconfig");

exports.executeSQL = function (sql, callbk)
{
    var conn = new sqldb.ConnectionPool(config.dbconfig);
    conn.connect().then(function ()
    {
        var req = new sqldb.Request(conn);
        req.query(sql)
        .then(function (recordsets)
        {
            callbk(recordsets);
        })
        .catch(function (err)
        {
            console.log(err);
            callbk(null, err);
        });
    })
    .catch(function (err)
    {
        console.log(err);
        callbk(null, err);
    });
};