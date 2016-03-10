angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.name+LastNameOfUser', {
      url: '/page7',
      views: {
        'side-menu21': {
          templateUrl: 'templates/name+LastNameOfUser.html',
          controller: 'name+LastNameOfUserCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.home', {
      url: '/page8',
      views: {
        'side-menu21': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.myProposals', {
      url: '/page9',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myProposals.html',
          controller: 'myProposalsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.browseJobs', {
      url: '/page11',
      views: {
        'side-menu21': {
          templateUrl: 'templates/browseJobs.html',
          controller: 'browseJobsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.messages', {
      url: '/page10',
      views: {
        'side-menu21': {
          templateUrl: 'templates/messages.html',
          controller: 'messagesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.activeJobs', {
      url: '/page12',
      views: {
        'side-menu21': {
          templateUrl: 'templates/activeJobs.html',
          controller: 'activeJobsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('createStudentProfile(1)', {
      url: '/page13',
      templateUrl: 'templates/createStudentProfile(1).html',
      controller: 'createStudentProfile(1)Ctrl'
    })
        
      
    
      
        
    .state('createStudentProfile(2)', {
      url: '/page14',
      templateUrl: 'templates/createStudentProfile(2).html',
      controller: 'createStudentProfile(2)Ctrl'
    })
        
      
    
      
        
    .state('createStudentProfile(3)', {
      url: '/page15',
      templateUrl: 'templates/createStudentProfile(3).html',
      controller: 'createStudentProfile(3)Ctrl'
    })
        
      
    
      
        
    .state('jobs', {
      url: '/page16',
      templateUrl: 'templates/jobs.html',
      controller: 'jobsCtrl'
    })
        
      
    
      
        
    .state('jobDetails', {
      url: '/page17',
      templateUrl: 'templates/jobDetails.html',
      controller: 'jobDetailsCtrl'
    })
        
      
    
      
        
    .state('createAccount', {
      url: '/page18',
      templateUrl: 'templates/createAccount.html',
      controller: 'createAccountCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});