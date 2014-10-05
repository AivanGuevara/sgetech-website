'use strict';

describe('Controller: SharepointonlineCtrl', function () {

  // load the controller's module
  beforeEach(module('sgetechApp'));

  var SharepointonlineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SharepointonlineCtrl = $controller('SharepointonlineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
