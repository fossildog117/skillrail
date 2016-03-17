angular.module('app.services', ['ngResource'])

  .factory('Post', function ($resource) {
    return $resource('http://skillraildemo.azurewebsites.net/Token');
  })



  .factory('SuggestedJobsServ', function($resource) {
  return $resource('http://skillraildemo.azurewebsites.net/api/Products');
})
