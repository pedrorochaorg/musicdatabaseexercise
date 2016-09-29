'use strict';

/**
 * @ngdoc filter
 * @name MusicDatabaseApp.filter:MusicSelectionFilter
 * @function
 * @description
 * # MusicSelectionFilter
 * Filter in the MusicDatabaseApp.
 */
angular.module('MusicDatabaseApp')
  .filter('MusicSelectionFilter', function () {
    return function (input,items) {
      var filtered = [];
      console.log(items);
      if(items.length>0) {
        for (var i = 0; i < input.length; i++) {
          var item = input[i];
          if (items.indexOf(item.pk)==-1) {
            filtered.push(item);
          }
        }
      }
      else {
        filtered = input;
      }
      return filtered;
    };
  });
