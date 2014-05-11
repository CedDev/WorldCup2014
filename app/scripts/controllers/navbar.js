'use strict';

angular.module('worldProno2014App')
.controller('NavbarCtrl', ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
    $scope.user = Auth.user;
    $scope.userRoles = Auth.userRoles;
    $scope.accessLevels = Auth.accessLevels;

    $scope.logout = function() {
        Auth.logout(function() {
            $location.path('/login');
        }, function() {
            $rootScope.error = 'Failed to logout';
        });
    };

    $scope.isLoggedIn = function() {
        Auth.isLoggedIn(function() {

        }, function() {
            $rootScope.error = 'Failed to logout';
        });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

}]);
