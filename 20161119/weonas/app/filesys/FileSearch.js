var fs = require("fs");
var path = require("path")

//srcPathを検索する
//全角スペース、空白スペースで隔てられるキーワードは
//分割して検索を行う
exports.searchFile = function(srcPath, searchPattern, callback) {

    //console.log(srcPath);
    var result = [];

    //フォルダの場合、子供パスを検索し、結果をサーチする
    if(fs.statSync(srcPath).isDirectory()) {

        srcPath = srcPath.endsWith("/") ? srcPath : srcPath + "/";

        var loopedItems = [];
        fs.readdir(srcPath, function(err, data){

            if(data.length == 0) {
                callback(result);
            }

            for(var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                
                exports.searchFile(srcPath + data[i], searchPattern, function(d){
                    result = result.concat(d);
                    loopedItems.push(data[i]);

                    //when encounter the final item
                    if(loopedItems.length == data.length) {
                        //console.log(srcPath + "[datacnt]" + data.length);
                        callback(result);
                    }
                });
            }

        });

    } else {
        var matchResult = matchFile(srcPath, searchPattern);
        if(matchResult != 0) {
            result.push(srcPath);
        }
        callback(result);
    }

};

//srcPathを検索する
//全角スペース、空白スペースで隔てられるキーワードは
//分割して検索を行う
exports.searchFileSync = function(srcPath, searchPattern) {

    //console.log(srcPath);
    var result = [];

    //フォルダの場合、子供パスを検索し、結果をサーチする
    if(fs.statSync(srcPath).isDirectory()) {

        srcPath = srcPath.endsWith("/") ? srcPath : srcPath + "/";

        var childPaths = fs.readdirSync(srcPath);
        childPaths.forEach(function(childPath) {

            result = result.concat(
                exports.searchFileSync(srcPath + childPath, searchPattern));
        
        });

    } else {
        var matchResult = matchFile(srcPath, searchPattern);
        if(matchResult != 0) {
            result.push(srcPath);
        }

    }
    return result;

};

//検索パターンでファイル名をサーチする
//全角ブランク、半角ブランクで隔てられるキーワード
//は分割して検索を行う
//created by HuangWeijing
//2016.11.19
var matchFile = function(filename, searchPattern) {

    searchPattern = searchPattern.replace("　", " ");

    var searchResult = 0;
    var patternArr = searchPattern.split(" ");

    patternArr.forEach(function(pattern) {

        if(filename.indexOf(pattern) > -1) {
            searchResult++;
        }
    
    });

    return searchResult;
};
exports.matchFile = matchFile;

//console.log(matchFile("huangweijing.com", "gwe om ua"));
