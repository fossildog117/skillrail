angular.module('app.controllers', [])

  .controller('profileCtrl', function ($scope) {

  })

  .controller('homeCtrl', function ($scope) {

  })

  .controller('searchCtrl', function ($scope) {

  })

  .controller('search2Ctrl', function ($scope) {

  })

  .controller('loginCtrl', function ($scope) {

  })

  .controller('signupCtrl', function ($scope) {

  })

  // **********************************************************
  // **                                                      **
  // **                 Business Sign Up                     **
  // **                                                      **
  // **********************************************************

  .controller('businessProfileCtrl', function ($scope) {

  })

  .controller('businessHomeCtrl', function ($scope) {

  })

  .controller('businessSearchCtrl', function ($scope) {

  })

  .controller('businessSearch2Ctrl', function ($scope) {

  })

  .controller('loginCtrl', function ($scope, Post, $http, $state, $ionicPopup, Token, GetProfile) {

    $scope.postData = {};

    $scope.login = function () {
      var user = {
        grant_type: "password",
        username: $scope.postData.username,
        password: $scope.postData.password
      };

      login(user).then(function (value) {

        var token = value.data["access_token"];

        console.log(value);

        if (value.status == 200) {

          Token.setProperty(token);

          GetProfile.getProfile(Token.getProperty()).then(function (response) {

            if (response.data.isStudent) {
              $state.go("tabsController.home");
            } else {
              $state.go("businessTabsController.home");
            }

          });
        }
      }, function (value) {
        $ionicPopup.alert({
          title: '',
          template: value.data["error_description"],
          okText: 'OK'
        });
      });
    };

    function login(user) {
      return $http({
        method: 'POST',
        url: 'https://data.skillrail.com/Token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        transformRequest: function (data) {
          return angular.isObject(data) && String(data) !== '[object File]' ? serialiseAsParams(data) : data;
        },
        data: user
      });
    }

    function serialiseAsParams(obj) {
      var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

      for (name in obj) {
        if (!obj.hasOwnProperty(name)) {
          continue;
        }
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += serialiseAsParams(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            if (!value.hasOwnProperty(subName)) {
              continue;
            }
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += serialiseAsParams(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    }
  })

  .controller('signupCtrl', function ($scope) {

  });


