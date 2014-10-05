'use strict';

describe('Controller: Office365Ctrl', function () {

  // load the controller's module
  beforeEach(module('sgetechApp'));

  var Office365Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Office365Ctrl = $controller('Office365Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
