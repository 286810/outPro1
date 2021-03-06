angular.module('starter.controllers', [])

    .controller('MainCtrl',function($scope,$rootScope,$ionicLoading,$ionicModal,Items){
        /*$rootScope.loadingIndication = $ionicLoading.show({
            template: '<i class="icon ion-loading-a iLoading"></i>',
            animation: 'fade-in',
            showBackdrop: true
        });*/

        $ionicModal.fromTemplateUrl('logreg.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();

        });
        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

    })
    .controller('DashCtrl', function($scope,$rootScope,$http,$ionicLoading,Items) {
        if(!localStorage.getItem('items')){
            Items.all().then(function(data){
                $scope.items = data;
                $ionicLoading.hide();//$scope.items && ($rootScope.loaded = true);
                //localStorage.setItem('items',JSON.stringify(data));
            },(function(err){
                console.log(err);
            }));
        } else {
            $scope.items = JSON.parse(localStorage.getItem('items'));console.log($scope.items)
        }

    })
    .controller('DashDetailCtrl',function(
        $scope, $stateParams,$timeout,Items
        ){
        $scope.item = Items.get($stateParams.dashId);


    })

    .controller('FriendsCtrl', function($scope, Friends) {
      $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
      $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function($scope) {
    });
