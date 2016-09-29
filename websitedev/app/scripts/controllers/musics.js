'use strict';

/**
 * @ngdoc function
 * @name MusicDatabaseApp.controller:MusicsCtrl
 * @description
 * # MusicsCtrl
 * Controller of the MusicDatabaseApp
 */
angular.module('MusicDatabaseApp')
  .controller('MusicsCtrl', ['APIData','$scope', '$anchorScroll', function (APIData,$scope,$anchorScroll) {
    $scope.musics = [];
    $scope.music = {
      pk: null,
      album: '',
      track: '',
      artist: ''
    };
    $scope.musicToDelete = null;




    $scope.submitForm = function(user){
      $scope.music = user;
      if(user.pk==null || user.pk == undefined || user.pk==-1) {

        APIData.createMusic({album: user.album, track: user.track, artist: user.artist, track_id:0}).then(function (data) {
          getMusics();
          $scope.resetForm();
        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          console.log(error);

        });
      }
      else{
        APIData.updateMusic({album: user.album, track: user.track, artist: user.artist, pk: user.pk}).then(function (data) {
          getMusics();
          $scope.resetForm();
        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          console.log(error);

        });
      }
    };

    $scope.editMusic = function(music){
      $anchorScroll();

      APIData.getMusic(music.pk).then(function (data) {
        $scope.music = data;
      }, function (error) {
          console.log(error);
      });
    };

    $scope.deleteMusic = function(music){

      APIData.deleteMusic(music.pk).then(function (data) {

        getMusics();
        $scope.resetForm();

      }, function (error) {
          console.log(error);
      });
    };


    $scope.prepareMusicDeletion = function(user){
      $scope.musicToDelete = user;
    };

    $scope.populate = function(){
      $scope.musics = [];
      APIData.populate().then(function (data) {
        getMusics();
      }, function (error) {

          console.log(error);
      });


    };


    $scope.resetForm = function(){
      $scope.music.artist  = '';
      $scope.music.album = '';
      $scope.music.pk = -1;
      $scope.music.track = '';


    };


    function getMusics(){
      APIData.getMusics().then(function(data) {
                    // promise fulfilled
                    $scope.musics = data;

                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });

    }



    getMusics();

  }]);
