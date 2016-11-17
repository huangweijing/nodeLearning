angular.module("test").controller("TestController", ["$scope",
        function($scope){
            $scope.students = [
            {
                name: "weijing",
                age : 29
            },
            {
                name: "heyirong",
                age : 63
            },
            {
                name: "huanglinhu",
                age : 66
            },
            {
                name: "gutianzi",
                age : 29
            }
            ];
        }
]);
