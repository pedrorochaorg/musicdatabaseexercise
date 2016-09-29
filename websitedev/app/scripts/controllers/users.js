'use strict';

/**
 * @ngdoc function
 * @name websitedevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websitedevApp
 */
angular.module('websitedevApp')
  .controller('UsersCtrl', ['APIData','$scope', function (APIData,$scope) {
    $scope.users = [];
    $scope.user = {
      pk: null,
      username: '',
      email: '',
      musics: [

      ]
    };
    $scope.userToDelete = null;

    $scope.musics = [];
    $scope.selectedMusic = {
      album: null,
      track: null,
      artist: null

    };

    $scope.selectedSong = null;
    $scope.submitForm = function(user){
      $scope.user = user;
      if(user.pk==null || user.pk == undefined || user.pk==-1) {
        console.log('Create');
        APIData.createUser({username: user.username, email: user.email, musics: user.musics}).then(function (data) {
          getUsers();
          $scope.resetForm();
        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          console.log(error);

        });
      }
      else{
        APIData.updateUser({username: user.username, email: user.email, pk: user.pk , musics: user.musics}).then(function (data) {
          getUsers();
          $scope.resetForm();
        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          console.log(error);

        });
      }
    };

    $scope.editUser = function(user){
      APIData.getUser(user.pk).then(function (data) {
           $scope.user = data;
      }, function (error) {
          console.log(error);
      });
    };

    $scope.deleteUser = function(user){
      console.log('delete user',user);
      APIData.deleteUser(user.pk).then(function (data) {
        console.log(data);
        getUsers();
        $scope.resetForm();

      }, function (error) {
          console.log(error);
      });
    };


    $scope.prepareUserDeletion = function(user){
      $scope.userToDelete = user;
    };

    $scope.addSong = function(song){
      $scope.user.musics.push(parseInt(song));

    };

    $scope.deleteUserSong = function(pk,items){
      console.log('Delete User Song',pk,items);
      var index = $scope.user.musics.indexOf(pk);
      if(index != -1){
        $scope.user.musics.splice(index,1);
      }
      console.log($scope.user);
    };

    $scope.resetForm = function(){
      $scope.user.username  = '';
      $scope.user.email = '';
      $scope.user.pk = -1;
      $scope.user.musics = [];

      $scope.selectedSong = $scope.musics[0].pk;
    };

    function getUsers(){
       APIData.getUsers().then(function(data) {
                    // promise fulfilled
                    $scope.users = data;

                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });
    }

    function getMusics(){
      APIData.getMusics().then(function(data) {
                    // promise fulfilled
                    $scope.musics = data;
                    $scope.selectedSong = $scope.musics[0].pk;

                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });

    }



    getUsers();
    getMusics();

  }]);
