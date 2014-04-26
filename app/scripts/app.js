'use strict';

angular.module('worldProno2014App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/worldcup', {
        templateUrl: 'partials/worldcup',
        controller: 'worldcupCtrl'
      })
      .when('/worldcup/:id', {
        templateUrl: 'partials/worldcup',
        controller: 'worldcupCtrl'
      })
      .when('/pronostic', {
        templateUrl: 'partials/pronostic',
        controller: 'pronosticCtrl'
      })
      .when('/statistic', {
        templateUrl: 'partials/statistic',
        controller: 'statisticCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      });
      
     
    $locationProvider.html5Mode(true);
      
     // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  });
  // .run(function ($rootScope, $location, Auth) {

  //   // Redirect to login if route requires auth and you're not logged in
  //   $rootScope.$on('$routeChangeStart', function (event, next) {
      
  //     if (next.authenticate && !Auth.isLoggedIn()) {
  //       $location.path('/login');
  //     }
  //   });
  // });