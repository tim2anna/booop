// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'TabCtrl'
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('tab.service', {
      url: '/service',
      views: {
        'tab-service': {
          templateUrl: 'templates/tab-service.html',
          controller: 'ServiceCtrl'
        }
      }
    })

    .state('tab.service-baike', {
      url: '/service/baike',
      views: {
        'tab-service': {
          templateUrl: 'templates/baike.html',
          controller: 'BaikeCtrl'
        }
      }
    })

    .state('tab.service-baike-detail', {
      url: '/service/baike/:id',
      views: {
        'tab-service': {
          templateUrl: 'templates/baike-detail.html',
          controller: 'BaikeDetailCtrl'
        }
      }
    })

    .state('tab.invest', {
      url: '/invest',
      views: {
        'tab-invest': {
          templateUrl: 'templates/tab-invest.html',
          controller: 'InvestCtrl'
        }
      }
    })
    .state('tab.invest-detail', {
      url: '/invest/:id',
      views: {
        'tab-invest': {
          templateUrl: 'templates/invest-detail.html',
          controller: 'InvestDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

