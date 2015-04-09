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

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
