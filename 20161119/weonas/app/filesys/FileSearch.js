var fs = require("fs");
var path = require("path")

//srcPathを検索する
//全角スペース、空白スペースで隔てられるキーワードは
//分割して検索を行う
exports.searchFile = function(srcPath, searchPattern) {

    //console.log(srcPath);

    var result = [];

    //フォルダの場合、子供パスを検索し、結果をサーチする
    if(fs.statSync(srcPath).isDirectory()) {

        var childPaths = fs.readdirSync(srcPath);
        childPaths.forEach(function(childPath) {

            result = result.concat(
                exports.searchFile(srcPath + "/" + childPath, searchPattern));
        
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
