angular.module('app.controllers', [])

  //-------------------Login-------------

  .controller('loginCtrl', function ($scope) {

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

  })

  .controller('newListingBusinessCtrl', function($scope) {

  })

  .controller('profileBusinessCtrl', function($scope) {

  })

  .controller('listingsBusinessCtrl', function($scope, SuggestedJobsServ) {
    $scope.listings = SuggestedJobsServ.query();
  })

  .controller('signupCtrl', function($scope) {

  })
