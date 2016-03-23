angular.module('app.services', ['ngResource'])

    .factory('Post', function ($resource) {
        return $resource('http://skillraildemo.azurewebsites.net/Token');
    })


    .factory('SuggestedJobsServ', function ($resource) {
        return $resource('http://skillraildemo.azurewebsites.net/api/Products');
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
