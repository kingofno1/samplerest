var db = require('../core/db')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlStatement = require('../db/constructSQLstatement');



var server = app.listen(5000, function ()
{
    console.log('server is listening ...');
}); 

app.use(bodyParser.json());

app.get('/', function (req, resp)
{
    db.executeSQL("SELECT * FROM SummonerInfo", function (data, err)
    {
        if (err) console.log(err);
        else
        {
            console.log(data.recordset);
            resp.send(data);
        }
    });
});

app.post('/', function (req, resp)
{
    if (!req.body) console.error("the req is empty");
    else
    {   
        console.log("Post req recieved...");
        console.log(req.body);
        
    }
    db.executeSQL(sqlStatement.ifNotExistsThenInsert(req.body), function (data, err)
    {
        resp.send("insert attmept");
    });

});

