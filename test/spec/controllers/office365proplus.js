'use strict';

describe('Controller: Office365proplusCtrl', function () {

  // load the controller's module
  beforeEach(module('sgetechApp'));

  var Office365proplusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Office365proplusCtrl = $controller('Office365proplusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
