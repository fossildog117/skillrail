angular.module('app.controllers', [])


  //-------------------Login-------------

  .controller('loginCtrl', function ($scope, Post, $http) {



     //Our form data for creating a new post with ng-model
    $scope.postData = {
      grant_type: "password",
      username: "",
      password: ""
    };


    var user = {};

     $scope.newPost = function () {
            var user = {
                grant_type: "password",
                username: $scope.postData.username,
                password: $scope.postData.password
            };

            var x = login(user);

            console.log(x);

            if (getAuthenticatedUser != null) {
                // there is a token
            }

        };

    function login(user) {
      //return Restangular.all('account/login').post(user);

      return $http({
        method: 'POST',
        url: 'http://skillraildemo.azurewebsites.net/Token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        transformRequest: function (data) {

          return angular.isObject(data) && String(data) !== '[object File]' ? serialiseAsParams(data) : data;
        },
        data: user
      });

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

    }

  })

  .controller('createAccountCtrl', function ($scope) {

  })

  .controller('createStudentProfile1Ctrl', function ($scope) {

  })

  .controller('createStudentProfile2Ctrl', function ($scope) {

  })

  .controller('createStudentProfile3Ctrl', function ($scope) {

  })

  //-------------------MENU-------------

  //-------------------menu.home-------------

  .controller('homeCtrl', function($scope, $rootScope, SuggestedJobsServ) {

  	$scope.suggestedjobs = SuggestedJobsServ.query();
  	$scope.pass = function(passedId) {
  			$rootScope.whichId = passedId;
  	};
  	$scope.filterById = function() {
  		return $rootScope.whichId;
  	}
  })

  .controller('jobDetailsCtrl', function ($scope) {
  })

  .controller('newProposalCtrl', function ($scope, $ionicPopup) {

    //this checks that the input fields are correct and activates
    // function which sends info to backend and opening of confirmation
    //message

    // A confirm which makes sure
    	$scope.showConfirm = function() {
    		var confirmed = true;
    		var confirmPopup = $ionicPopup.confirm({
    			title: 'Confirmation',
    			template: 'Are you sure you want to submit this?'
    		});
    		confirmPopup.then(function(res) {
    			if(res) {
    				confirmed = true;
    			} else {
    				confirmed = false;
    			}
    			console.log(confirmed);
    		});
    	}
  })

  //-------------------menu.browseJobs-------------

  .controller('browseJobsCtrl', function ($scope) {

  })

  .controller('searchResultCtrl', function ($scope) {

  })

  //-------------------menu.activeJobs-------------

  .controller('activeJobsCtrl', function ($scope) {

    $scope.jobs = [{
      name: 'Logo designer'
      },
      {
        name: 'app develloper'
      },
      {
        name: 'flyer maker'
      }
    ];

  })

  .controller('jobStatusCtrl', function ($scope) {
  })


  //-------------------menu.submissions-------------


  .controller('submissionsCtrl', function ($scope) {

  })

  .controller('submissionViewCtrl', function ($scope) {

  })

  //-------------------menu.messages-------------

  .controller('messagesCtrl', function ($scope) {

  })


  //-------------------menu.userInfo-------------

  .controller('userInfo', function ($scope) {

    $scope.enorme = 'hello';
    $scope.userInfo = {

      name: "Romain Dumon",
      email: "ardumon@gmail.com",
      phone: "enorme",

    }
  })

  .controller('userInfoEditListCtrl', function ($scope) {
  })
  .controller('userInfoEditPageCtrl', function ($scope) {
  })

  //
  // Business
  //

  .controller('homeBusinessCtrl', function ($scope) {

    $scope.students = [

      {name: 'Nathan', description: 'I am a student studying computer science at UCL, I am looking for a job'},
      {name: 'Romain', description: 'I am a student studying computer science, I am looking for a job'},
      {name: 'Peter', description: 'I am a student studying asteroid student, I am looking for a part time job'},
      {name: 'Bill', description: 'I am a student studying biology science, I am looking for a job'}];

  })

  .controller('newListingBusinessCtrl', function ($scope) {

  })

  .controller('profileBusinessCtrl', function ($scope) {

  })

  .controller('listingsBusinessCtrl', function($scope, SuggestedJobsServ) {
    $scope.listings = SuggestedJobsServ.query();

  })

  .controller('signupCtrl', function ($scope) {

  })


  .controller('studentProfileBusinessController', function ($scope) {

  })

  .controller('viewListingsBusinessController', function ($scope) {

    var currency = '£';

    $scope.listing = [
      {
        title: 'Need graphics designer',
        description: 'I need a graphics designer to make a sticker for my laptop',
        price: currency + '60'
      },
      {
        title: 'Programmer needed',
        description: 'hi i need a programmer to help me install linux onto my computer',
        price: currency + '34'
      },
      {title: 'C++ programmer needed', description: 'hello i am looking for a c++ developer', price: currency + '666'},
      {title: 'App developer needed', description: 'Need free labour', price: currency + '12'}];

  })
