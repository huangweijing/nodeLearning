var async = require("./async");
var final = require("./final");

//async(": )",function(){
//    async(": (", final);
//});

function step1() {
    async(": )", step2);
}

function step2() {
    async(": (", final);
}

step1();
