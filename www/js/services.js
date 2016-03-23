angular.module('app.services', ['ngResource'])

    .factory('Post', function ($resource) {
        return $resource(baseUrl +'/Token');
    })


    .factory('SuggestedJobsServ', function ($resource) {
        return $resource(baseUrl +'/api/Products');
    })

    .factory('postingNewListingServ', function ($http) {
        return {
          posting : function(user) {
            return $http.post(baseUrl + '/api/Products/5', user);
          }
        }
    })

    .factory('registeringServ', function($http) {
        return {
          register : function(newUser) {
            return $http.post(baseUrl + '/api/Account/Register', newUser);
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

    var baseUrl = 'http://skillraildemo.azurewebsites.net/';
