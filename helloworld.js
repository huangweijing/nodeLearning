/*
 * hello, world
 */

var http = require("http");
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("hello, world!\n");
	console.log("hello, world!\n");
}).listen(1337, "0.0.0.0");

