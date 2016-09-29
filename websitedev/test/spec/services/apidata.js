'use strict';

describe('Service: APIData', function () {

  // load the service's module
  beforeEach(module('websitedevApp'));

  // instantiate service
  var APIData;
  beforeEach(inject(function (_APIData_) {
    APIData = _APIData_;
  }));

  it('should do something', function () {
    expect(!!APIData).toBe(true);
  });

});
