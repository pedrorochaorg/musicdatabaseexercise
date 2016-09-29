'use strict';

describe('Filter: MusicSelectionFilter', function () {

  // load the filter's module
  beforeEach(module('websitedevApp'));

  // initialize a new instance of the filter before each test
  var MusicSelectionFilter;
  beforeEach(inject(function ($filter) {
    MusicSelectionFilter = $filter('MusicSelectionFilter');
  }));

  it('should return the input prefixed with "MusicSelectionFilter filter:"', function () {
    var text = 'angularjs';
    expect(MusicSelectionFilter(text)).toBe('MusicSelectionFilter filter: ' + text);
  });

});
