'use strict';

describe('Filter: MusicFilter', function () {

  // load the filter's module
  beforeEach(module('websitedevApp'));

  // initialize a new instance of the filter before each test
  var MusicFilter;
  beforeEach(inject(function ($filter) {
    MusicFilter = $filter('MusicFilter');
  }));

  it('should return the input prefixed with "MusicFilter filter:"', function () {
    var text = 'angularjs';
    expect(MusicFilter(text)).toBe('MusicFilter filter: ' + text);
  });

});
