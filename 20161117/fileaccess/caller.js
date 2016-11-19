var filestats = require('./filestats.js');

var fileInfo = {};
step1();


function step1() {
    filestats.getFileInfo(".",  function(result){
        fileInfo = result;
        step2();
    });
}

function step2() {

    console.log(fileInfo);

}
