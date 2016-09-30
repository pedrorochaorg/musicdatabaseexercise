'use strict';

/**
 * @ngdoc filter
 * @name MusicDatabaseApp.filter:MusicFilter
 * @function
 * @description
 * # MusicFilter
 * Filter in the MusicDatabaseApp.Filters the music array, returning only the items that the current user already has in is fav list
 */
angular.module('MusicDatabaseApp')
  .filter('MusicFilter', function () {
    return function (input,items) {
      var filtered = [];
      console.log(items);
      if(items.length>0) {
        for (var i = 0; i < input.length; i++) {
          var item = input[i];
          if (items.indexOf(item.pk)!=-1) {
            filtered.push(item);
          }
        }
      }
      return filtered;
    };
  });
