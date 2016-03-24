angular.module('app.services', ['ngResource'])

  .factory('Post', function ($resource) {
    return $resource('https://data.skillrail.com/Token');
  })

  .factory('SuggestedJobsServ', function ($resource) {
    return $resource('https://data.skillrail.com/Products');
  })

  .service('GetProfile', function ($http) {
    return {
      getProfile: function(token) {
        return $http({
          method: 'GET',
          url: 'https://data.skillrail.com/api/MyProfile',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
      }
    }
  })

  .service('Token', function () {

    var Token = 'Token';

    return {
      getProperty: function () {
        return Token;
      },
      setProperty: function (value) {
        Token = value;
      }
    };
  });
