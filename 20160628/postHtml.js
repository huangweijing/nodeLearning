var http = require("http");
var url = require("url");
var util = require("util");
var fs = require("fs");


var rs = fs.createReadStream("index.html");
var data = "";
rs.on("data", function(line){
    data = data + line;
});

rs.on("end", function(){
//    console.log(data);
});



http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
}).listen(3000);
