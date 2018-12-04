'use strict';

angular.module('octadesk', [])
  .run(['$rootScope', 'OctaChatService', function($rootScope, OctaChatService) {
    $rootScope.octaChatReady = false;
    window.addEventListener("onOctaChatReady", function(e) {
      $rootScope.octaChatReady = false;
      OctaChatService.registerReady();
    }, false);
  }])
  .service('OctaChatService', ['$rootScope', '$q', '$interval', function($rootScope, $q, $interval) {
    var self = this;

    this.registerReady = function() {
      $rootScope.octaChatReady = true;
    };

    this.isReady = function() {
      var defer = $q.defer();
      var interval = $interval(function() {
        if ($rootScope.octaChatReady) {
          $interval.cancel(interval);
          defer.resolve();
        }
      }, 1000);
      return defer.promise;
    };

    this.autoLogin = function(user) {
      self.isReady().then(function() {
        octadesk.chat.login({
            name: user.name,
            email: user.email
        });
      });
    };

    this.toggle = function() {
      octadesk.chat.toggle();
    };
  }]);