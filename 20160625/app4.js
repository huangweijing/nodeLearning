var http = require('http');
var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'post'
};
var req = http.request(options, function (res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
    console.log('\n\n');
  });
});
req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
console.log('\n\n');
console.log('\n\n');
});
req.write('data\n');
req.write('data\n');
req.end();
