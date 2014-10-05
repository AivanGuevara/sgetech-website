'use strict';

describe('Controller: LynconlineCtrl', function () {

  // load the controller's module
  beforeEach(module('sgetechApp'));

  var LynconlineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LynconlineCtrl = $controller('LynconlineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
