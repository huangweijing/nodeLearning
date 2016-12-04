var finder = require('./FileSearch');
var date1 = new Date();
console.log("searching...");
//var result = finder.searchFile("/mnt/weobot.com", "藤岡みなみ", after);
//finder.searchFile("/mnt/weobot.com", "みなみ", after);
var result = finder.searchFileSync("/mnt/weobot.com", "みなみ");
console.log("get result in " + (new Date() - date1)/1000 + " seconds!");
console.log(result);

function after(result) {
    console.log("get result in " + (new Date() - date1)/1000 + " seconds!");
    console.log(result);
}
