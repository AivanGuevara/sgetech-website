'use strict';

describe('Controller: WhoweareCtrl', function () {

  // load the controller's module
  beforeEach(module('sgetechApp'));

  var WhoweareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhoweareCtrl = $controller('WhoweareCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
