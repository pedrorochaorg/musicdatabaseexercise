'use strict';

describe('Filter: ArtistFilter', function () {

  // load the filter's module
  beforeEach(module('websitedevApp'));

  // initialize a new instance of the filter before each test
  var ArtistFilter;
  beforeEach(inject(function ($filter) {
    ArtistFilter = $filter('ArtistFilter');
  }));

  it('should return the input prefixed with "ArtistFilter filter:"', function () {
    var text = 'angularjs';
    expect(ArtistFilter(text)).toBe('ArtistFilter filter: ' + text);
  });

});
