angular.module('example').config(['$routeProvider', 
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'example/example.client.view.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
]);
alert(angular.module('example'));
