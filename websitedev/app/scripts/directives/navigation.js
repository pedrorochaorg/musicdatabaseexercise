'use strict';

/**
 * @ngdoc directive
 * @name MusicDatabaseApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('MusicDatabaseApp')
  .directive('navigation', ['routeNavigation',function (routeNavigation) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "views/navigation.html",
      controller: function ($scope) {
        $scope.routes = routeNavigation.routes;
        $scope.activeRoute = routeNavigation.activeRoute;
      }
    };
  }]);
