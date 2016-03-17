angular.module('app.services', ['ngResource'])

.factory('SuggestedJobsServ', function($resource) {
  return $resource('http://skillraildemo.azurewebsites.net/api/Products');
})
