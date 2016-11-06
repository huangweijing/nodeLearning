var mysql = require('mysql')
var util = require('util')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'huangweijing',
    password : 'Password01!',
    database : 'weijinglab_test'
});


debugger;
console.log("connecting...");
connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected!");
    connection.query("select count(1) as stuCnt from student", function(error, result){

        if(error){
            console.error("error querying: " + error.stack);
            return;
        }
        var resultStr = JSON.stringify(result)
        var stuCnt = JSON.parse(resultStr)[0].stuCnt;
        console.log("row count is "+ stuCnt );
    
    });

    var query = connection.query("select * from student");
    //console.log(util.inspect(query));
    query.on("error", function(error) {
    
    });

    query.on("result", function(result) {
        
        console.log(result.name);
    
    });

    query.on("end", function() {

        connection.destroy();
    
    });
});
console.log("connected?");
