'use strict';

describe('Service: populate', function () {

  // load the service's module
  beforeEach(module('websitedevApp'));

  // instantiate service
  var populate;
  beforeEach(inject(function (_populate_) {
    populate = _populate_;
  }));

  it('should do something', function () {
    expect(!!populate).toBe(true);
  });

});
