angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Switches) {
  
  $scope.switches = Switches.all();
  
  $scope.switchOn = function (switchItem) {
    console.log('switch ' + switchItem.name + ' on');
  };

  $scope.switchOff = function (switchItem) {
    console.log('switch ' + switchItem.name + ' off');
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
