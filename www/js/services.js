angular.module('app.services', ['ngResource'])

    .factory('Post', function ($resource) {
        return $resource('http://skillraildemo.azurewebsites.net/Token');
    })


    .factory('SuggestedJobsServ', function ($resource) {
        return $resource('http://skillraildemo.azurewebsites.net/api/Products');
    })

    .factory('postingNewListingServ', function ($http) {

      return {
        posting : function(user) {
          return $http.post(baseUrl + '/api/Products/5', user);
        }
      }

    // return {
    //   posting : function(user) {
    //   return $http({
    //       method: 'POST',
    //       url: 'http://skillraildemo.azurewebsites.net/api/Products/5',
    //       headers: {
    //           'Content-Type': user,
    //       },
    //     });
    //   }
    // }
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

    var baseUrl = 'http://skillraildemo.azurewebsites.net/';
