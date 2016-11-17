angular.module("app").controller("MainController", 
    ["$scope", "$http", function($scope, $http) {
        $http.get("data/countries.json").success(function(data){
            $scope.countryListCache = data;
            $scope.countryList = data;
        });
        $scope.find = function(filename) {
            //リモートホストからデータを取得する
            //$http.get("data/countries.json").success(function(data){
                //$scope.countryList = data;
                $scope.countryList = $scope.countryListCache;
                //検索キーで国家データからフィルタする
                $scope.countryList = $scope.countryList.filter(function(item){
                    if(item.name.toUpperCase().indexOf(filename.toUpperCase()) >= 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            //});
        };
    }]
);
