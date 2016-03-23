angular.module('app.controllers', [])

    //-------------------Login-------------

    .controller('loginCtrl', function ($scope, Post, $http, $state, $ionicPopup, Token) {

        //Our form data for creating a new post with ng-model
        $scope.postData = {};

        $scope.newPost = function () {
            var user = {
                grant_type: "password",
                username: $scope.postData.username,
                password: $scope.postData.password
            };

            login(user).then(function (value) {

                var token = value.data["access_token"];
                var e = document.getElementById("selectedCategory");
                var strUser = e.options[e.selectedIndex].text;

                if (value.status == 200) {

                    Token.setProperty(token);
                    console.log(token);

                    if (strUser == "Business") {
                        $state.go('menuBusiness.home');
                    } else {
                        $state.go('menu.home');
                    }
                }
            }, function (value) {
                console.log(value.status);
                if (value.status == 400) {
                    $ionicPopup.alert({
                        title: '',
                        template: 'Incorrect email or password',
                        okText: 'OK'
                    });
                } else {
                    $ionicPopup.alert({
                        title: '',
                        template: 'Unknown error',
                        okText: 'OK'
                    });
                }
            });
        };

        function login(user) {
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

    .controller('createAccountCtrl', function ($scope, $state) {

        $scope.click = function () {

            var category = document.getElementById("category");
            var selection = category.options[category.selectedIndex].text;

            if (selection == "Student") {
                $state.go('createStudentProfile1');
            } else {
                $state.go('signupBusiness');
            }

        }

    })

    .controller('createStudentProfile1Ctrl', function ($scope) {

    })

    .controller('createStudentProfile2Ctrl', function ($scope) {

    })

    .controller('createStudentProfile3Ctrl', function ($scope) {

    })

    //-------------------MENU-------------

    //-------------------menu.home-------------

    .controller('homeCtrl', function ($scope, $rootScope, SuggestedJobsServ) {

        var token;

        $scope.suggestedjobs = SuggestedJobsServ.query();
        $scope.pass = function (passedId) {
            $rootScope.whichId = passedId;
        };
        $scope.filterById = function () {
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
        $scope.showConfirm = function () {
            var confirmed = true;
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirmation',
                template: 'Are you sure you want to submit this?'
            });
            confirmPopup.then(function (res) {
                if (res) {
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

    .controller('newListingBusinessCtrl', function ($scope, $ionicPopup, Token, postingNewListingServ) {

        //function Ctrl2($scope, sharedProperties) {
        //    $scope.prop2 = "Second";
        //    $scope.both = sharedProperties.getProperty() + $scope.prop2;
        //}
        $scope.newlisting = {
          title : "",
          description: "",
          price: ""
        }
        $scope.newListing = function () {

            // console.log(Token.getProperty());

            var confirmPopup = $ionicPopup.confirm({
                title: '',
                template: 'Are you want to add this listing',
                okText: 'Add listing'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('True');
                    postingNewListingServ.posting(
                      {
                        "title": $scope.newlisting.title,
                        "description": $scope.newlisting.description,
                        "price": $scope.newlisting.price,
                        "supplier": {
                          "id": 99,
                          "name": "YoyoGogo"
                        }
                      }
                    )
                } else {
                    console.log('False');
                }
            });
        }
    })

    .controller('profileBusinessCtrl', function ($scope, $ionicPopup) {

        $scope.businessProfile = [

            {
                name: 'Westfield',
                Address: '19-29 Woburn Place, London, WC1H 0AQ',
                Email: 'hello@yolo.co.uk',
                Telephone: '07787298876',
                Description: 'If you forget to take a dose of your antibiotics, take that dose as soon as you remember ' +
                'and then continue to take your course of antibiotics as normal. However, if it is almost time for the ' +
                'next dose, skip the missed dose and continue your regular dosing schedule. Do not take a double dose to' +
                ' make up for a missed one. There is an increased risk of side effects if you have to take two doses ' +
                'closer together than normal.'
            }
        ];

        $scope.save = function () {

            var confirmPopup = $ionicPopup.confirm({
                title: '',
                template: 'Are you sure you want to save changes',
                okText: 'Save'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('True');
                    // POST to server
                } else {
                    console.log('False');
                }
            });
        }
    })

    .controller('editProfileBusinessCtrl', function ($scope, $ionicPopup) {

    })

    .controller('listingsBusinessCtrl', function ($scope, SuggestedJobsServ) {
      //the service might have to change
        $scope.listings = SuggestedJobsServ.query();
        $scope.supplierInfo = {
          name : "YoyoGogo",
        }
    })

    .controller('signupCtrl', function ($scope) {

    })


    .controller('studentProfileBusinessController', function ($scope) {

    })


    .controller('signupBusinessCtrl', function ($scope) {

    });
