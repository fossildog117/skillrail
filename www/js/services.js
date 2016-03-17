angular.module('app.services', ['ngResource'])

  .factory('Post', function ($resource) {
    return $resource('http://skillraildemo.azurewebsites.net/Token');
  })

  .factory('BlankFactory', [function () {

  }])

  .service('BlankService', [function () {

  }]);

