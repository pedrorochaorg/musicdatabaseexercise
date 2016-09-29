'use strict';

/**
 * @ngdoc service
 * @name MusicDatabaseApp.routeNavigation
 * @description
 * # routeNavigation
 * Service in the MusicDatabaseApp.
 */
angular.module('MusicDatabaseApp')
  .service('routeNavigation', ['$route','$location',function ($route,$location) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var routes = [];
    angular.forEach($route.routes, function (route, path) {
      if (route.name) {
        routes.push({
          path: path,
          name: route.name
        });
      }
    });
    return {
      routes: routes,
      activeRoute: function (route) {
        return route.path === $location.path();
      }
    };

  }]);
