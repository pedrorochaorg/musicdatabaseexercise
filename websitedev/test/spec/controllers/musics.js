'use strict';

describe('Controller: MusicsCtrl', function () {

  // load the controller's module
  beforeEach(module('MusicDatabaseApp'));

  var MusicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MusicsCtrl = $controller('MusicsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MusicsCtrl.awesomeThings.length).toBe(3);
  });
});
