var fs = require('fs');
var rs = fs.createReadStream('app5_dat', {buffSize: 1});
var data = '';
var cnt = 0;
rs.on("data", function (trunk) {
  data += trunk;
  cnt++;
});
rs.on("end", function() {
  console.log(data);
  console.log(`count = ${cnt}`);
});
console.log("program end");
