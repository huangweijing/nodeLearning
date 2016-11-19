var filestats = require('./filestats.js');

filestats.getFileInfo(".",  function(result){
    console.log(result);
});
