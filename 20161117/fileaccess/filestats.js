var fs = require("fs");
var step = require("step");

module.exports.getFileInfo = function(path, callbackFn){
    fs.stat(path, function(err, stats) {

        callbackFn({
            size : stats["size"],
            mode : stats["mode"]
        });
        //console.log(result);

    });
};

