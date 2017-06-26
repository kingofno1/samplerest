 var insertSummonerInfo = function ( obj )
{
    var ins = "INSERT INTO summonerInfo (";
    var val = "VALUES (";
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
        {
            ins = ins + key + ',';
            val = val + '\'' + obj[key] + '\',';
            console.log(key + "->" + obj[key]);
        }
    }
    ins = ins.replace(/.$/, ") ");
    val = val.replace(/.$/, ")");
    console.log(ins + val + ';');
    return ins + val + ';';
}

exports.ifNotExistsThenInsert = function (obj)
{
    var ifnotex = "IF NOT EXISTS (";
    var sel = "SELECT " + obj.id + " FROM summonerInfo)";
    var begin = "BEGIN " + insertSummonerInfo(obj);

    return ifnotex + sel + begin + " END";

}