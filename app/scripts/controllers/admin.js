'use strict';

angular.module('worldProno2014App')
.controller('AdminCtrl', ['$scope', '$http', 'Auth', '$resource', function($scope, $http, Auth, $resource) {

	Ladda.bind( '.ladda-button', { timeout: 2000 } );

	$scope.loading = true;
	$scope.userRoles = Auth.userRoles;

	$http.get('/users').success(function (data) {
			$scope.users = data;
			$scope.loading = false;
	});

	$scope.togglePaid = function(user) {
		bootbox.confirm('Etes-vous sur de changer le paiement de ' + user.username + '?', function(result) {
			if(result) {
				$http.put('/REST/userPaid/' + user.username, {paid:!user.paid}).success(function() {
				});
			}
		});
	};

	$scope.deleteUser = function(user) {
		bootbox.confirm('Etes-vous sur de supprimer cet utilisateur ' + user.username + '?', function(result) {
			if(result) {
					$http.delete('/REST/user/' + user.username).success(function() {
					});
			}
		});
	};

}]);