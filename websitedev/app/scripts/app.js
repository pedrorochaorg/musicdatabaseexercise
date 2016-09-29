'use strict';

/**
 * @ngdoc overview
 * @name websitedevApp
 * @description
 * # websitedevApp
 *
 * Main module of the application.
 */
var apiUrl = 'http://127.0.0.1:8000/api'

angular
  .module('websitedevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/detail/:userId', {
        templateUrl: 'views/userDetails.html',
        controller: 'UserDetailCtrl',
        controllerAs: 'userDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
