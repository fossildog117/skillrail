angular.module('app.routes', [])

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    //-------------Login----------

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('createAccount', {
        url: '/createAccount',
        templateUrl: 'templates/createAccount.html',
        controller: 'createAccountCtrl'
      })

      .state('createStudentProfile1', {
        url: '/createStudentProfile1',
        templateUrl: 'templates/createStudentProfile1.html',
        controller: 'createStudentProfile1Ctrl'
      })

      .state('createStudentProfile2', {
        url: '/createStudentProfile2',
        templateUrl: 'templates/createStudentProfile2.html',
        controller: 'createStudentProfile2Ctrl'
      })

      .state('createStudentProfile3', {
        url: '/createStudentProfile3',
        templateUrl: 'templates/createStudentProfile3.html',
        controller: 'createStudentProfile3Ctrl'
      })

      //--------------MENU----------------


      .state('menu', {
        url: '/side-menu21',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      //---------------Menu.userInfo------------

      .state('menu.userInfo', {
        url: '/page7',
        views: {
          'side-menu21': {
            templateUrl: 'templates/userInfo.html',
            controller: 'userInfo'
          }
        }
      })

      .state('userInfoEditList', {
        url: '/userInfoEditList',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/userInfoEditList.html',
            controller: 'userInfoEditListCtrl'
          }
        }
      })

      .state('userInfoEditPage', {
        url: '/userInfoEditPage',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/userInfoEditPage.html',
            controller: 'userInfoEditPageCtrl'
          }
        }
      })


      //----------------menu.Home---------------

      .state('menu.home', {
        url: '/home',
        views: {
          'side-menu21': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('jobDetails', {
        url: "/jobDetails",
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/jobDetails.html',
            controller: 'jobDetailsCtrl'
          }
        }
      })

      .state('newProposal', {
        url: '/newProposal',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/newProposal.html',
            controller: 'newProposalCtrl'
          }
        }
      })

      //-------------------menu.submissions-------------


      .state('menu.submissions', {
        url: '/page9',
        views: {
          'side-menu21': {
            templateUrl: 'templates/submissions.html',
            controller: 'submissionsCtrl'
          }
        }
      })

      .state('submissionView', {
        url: '/submissionView',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/submissionView.html',
            controller: 'submissionViewCtrl'
          }
        }
      })


      //-------------------menu.browseJobs-------------

      .state('menu.browseJobs', {
        url: '/page11',
        views: {
          'side-menu21': {
            templateUrl: 'templates/browseJobs.html',
            controller: 'browseJobsCtrl'
          }
        }
      })

      .state('searchResult', {
        url: '/searchResult',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/searchResult.html',
            controller: 'searchResultCtrl'
          }
        }
      })

      //-------------------menu.messages-------------

      .state('menu.messages', {
        url: '/page10',
        views: {
          'side-menu21': {
            templateUrl: 'templates/messages.html',
            controller: 'messagesCtrl'
          }
        }
      })

      //-------------------menu.activeJobs-------------

      .state('menu.activeJobs', {
        url: '/page12',
        views: {
          'side-menu21': {
            templateUrl: 'templates/activeJobs.html',
            controller: 'activeJobsCtrl'
          }
        }
      })

      .state('jobStatus', {
        url: '/jobStatus',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/jobStatus.html',
            controller: 'jobStatusCtrl'
          }
        }
      })

      // ------------------------------------------
      // ------------- Business -------------------
      // ------------------------------------------

      .state('menuBusiness.home', {
        url: '/menuBusiness',
        views: {
          'side-menu22': {
            templateUrl: 'templates/homeBusiness.html',
            controller: 'homeBusinessCtrl'
          }
        }
      })

      .state('menuBusiness', {
        url: '/side-menu22',
        templateUrl: 'templates/menuBusiness.html',
        abstract: true
      })

      .state('menuBusiness.newListing', {
        url: '/newListingBusiness',
        views: {
          'side-menu22': {
            templateUrl: 'templates/newListingBusiness.html',
            controller: 'newListingBusinessCtrl'
          }
        }
      })

      .state('menuBusiness.profile', {
        url: '/profileBusiness',
        views: {
          'side-menu22': {
            templateUrl: 'templates/profileBusiness.html',
            controller: 'profileBusinessCtrl'
          }
        }
      })

      .state('menuBusiness.listings', {
        url: '/listingsBusiness',
        views: {
          'side-menu22': {
            templateUrl: 'templates/listingsBusiness.html',
            controller: 'listingsBusinessCtrl'
          }
        }
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
