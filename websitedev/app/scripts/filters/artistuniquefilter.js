'use strict';

/**
 * @ngdoc filter
 * @name MusicDatabaseApp.filter:ArtistUniqueFilter
 * @function
 * @description
 * # ArtistUniqueFilter
 * Filter in the websitedevApp.
 */
angular.module('MusicDatabaseApp')
  .filter('ArtistUniqueFilter', function () {
    return function (input) {
      var filtered = [];
      var returnItems = [];
      for (var i = 0; i < input.length; i++) {
        var item = input[i];
        if (!filtered.search(item.artist)) {
          filtered.push(item.artist);
          returnItems.push(item);
        }
      }
      return returnItems;
    };
  });
