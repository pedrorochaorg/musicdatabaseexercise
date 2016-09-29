'use strict';

/**
 * @ngdoc overview
 * @name MusicDatabaseApp
 * @description
 * # MusicDatabaseApp
 *
 * Main module of the application.
 */
var apiUrl = 'http://127.0.0.1:8000/api'

angular
  .module('MusicDatabaseApp', [
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
        templateUrl: 'views/musics.html',
        controller: 'MusicsCtrl',
        controllerAs: 'musics',
        name: 'Musics'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users',
        name: 'Users'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
