angular.module('starter.controllers', [])

.controller('RemoteCtrl', function($scope, Switches, SocketsSvc) {
  
  $scope.switches = Switches.all();
  
  $scope.switchOn = function (switchItem) {
    console.log('switch ' + switchItem.name + ' on');
    SocketsSvc.turnOn(switchItem.id);
  };

  $scope.switchOff = function (switchItem) {
    console.log('switch ' + switchItem.name + ' off');
    SocketsSvc.turnOff(switchItem.id);
  };
})

.controller('TimerCtrl', function($scope) {
  // todo
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
