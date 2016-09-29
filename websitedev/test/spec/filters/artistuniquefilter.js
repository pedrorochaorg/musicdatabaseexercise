'use strict';

describe('Filter: ArtistUniqueFilter', function () {

  // load the filter's module
  beforeEach(module('websitedevApp'));

  // initialize a new instance of the filter before each test
  var ArtistUniqueFilter;
  beforeEach(inject(function ($filter) {
    ArtistUniqueFilter = $filter('ArtistUniqueFilter');
  }));

  it('should return the input prefixed with "ArtistUniqueFilter filter:"', function () {
    var text = 'angularjs';
    expect(ArtistUniqueFilter(text)).toBe('ArtistUniqueFilter filter: ' + text);
  });

});
