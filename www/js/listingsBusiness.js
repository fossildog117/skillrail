angular.module('app.viewListingsBusiness', ['ionic'])

  .controller('viewListingsController', function($scope) {

    var currency = '£';

    $scope.listing = [
      {title: 'Need graphics designer', description: 'I need a graphics designer to make a sticker for my laptop', price: currency + '60'},
      {title: 'Programmer needed', description: 'hi i need a programmer to help me install linux onto my computer', price: currency + '34'},
      {title: 'C++ programmer needed', description: 'hello i am looking for a c++ developer', price: currency + '666'},
      {title: 'App developer needed', description: 'Need free labour', price: currency + '12'}];
  });
