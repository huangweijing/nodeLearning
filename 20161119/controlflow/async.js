module.exports = function(data, callback){

    console.log("async[data=" + data + "]");
    setTimeout(callback, 1000);

};
