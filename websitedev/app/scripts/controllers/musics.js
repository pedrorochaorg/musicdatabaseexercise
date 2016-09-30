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

    /*
      Preloader On/Off bindings
     */
    $scope.preloaders = {
      list: true,
      form: false,
      populate: false
    };

    /*
      Form Messages/Alerts bindings
     */
    $scope.formMessages = {
      error: false,
      success: false
    };


    /*
      Data Display bindings
     */
    $scope.musics = [];
    $scope.music = {
      pk: -1,
      album: '',
      track: '',
      artist: ''
    };


    /*
      Transport bindings ( Transport values between actions that require some sort of user confirmation )
     */
    $scope.musicToDelete = null;


    /*
     Action bindings
    */

    // Form Submit Handler
    $scope.submitForm = function(music,invalid){
      // Check if form is invalid
      if(!invalid) {

        //Display form preloader
        $scope.preloaders.list = false;
        $scope.preloaders.form = true;

        //If the music object contains a property named pk and/or it's value equals to -1, it means that we are creating a new record instead of updating an existing one.
        if (music.pk == null || music.pk == undefined || music.pk == -1) {

          // Create a new user
          APIData.createMusic({
            album: music.album,
            track: music.track,
            artist: music.artist,
            track_id: 0
          }).then(function (data) {
            $scope.musicForm.$setPristine();
            $scope.preloaders.list = true;
            $scope.preloaders.form = false;
            $scope.formMessages.success = 'Record created successfuly!';
            getMusics();
            $scope.resetForm();
          }, function (error) {
            // promise rejected, could log the error with: console.log('error', error);
            $scope.preloaders.list = false;
            $scope.preloaders.form = false;
            var errors = '';
            for(var item in error ){
              errors+= ''+error[item]+' ';
            }
            $scope.formMessages.error = errors;
            console.log(error);

          });
        }
        else {
          APIData.updateMusic({
            album: music.album,
            track: music.track,
            artist: music.artist,
            pk: music.pk
          }).then(function (data) {
            $scope.userForm.$setPristine();
            $scope.preloaders.list = true;
            $scope.preloaders.form = false;
            $scope.formMessages.success = 'Record updated successfuly!';
            getMusics();
            $scope.resetForm();
          }, function (error) {
            $scope.preloaders.list = false;
            $scope.preloaders.form = false;
            // promise rejected, could log the error with: console.log('error', error);
            var errors = '';
            for(var item in error ){
              errors+= ''+error[item]+' ';
            }
            $scope.formMessages.error = errors;


          });
        }
      }
    };


    // Select Music for Update purposes
    $scope.editMusic = function(music){
      // Scroll to Top
      $anchorScroll();

      // Activate loading preloaders
      $scope.preloaders.list = false;
      $scope.preloaders.form = true;

      // Get music from API
      APIData.getMusic(music.pk).then(function (data) {
          $scope.music = data;
        }, function (error) {
            console.log(error);
        });
      };

    // Delete Music from API
    $scope.deleteMusic = function(music){

      // Activate loading preloaders
      $scope.preloaders.list = true;
      $scope.preloaders.form = false;

      // Delete Music Service
      APIData.deleteMusic(music.pk).then(function (data) {
        $scope.formMessages.success = 'Record deleted successfuly!';

        // Update Music List
        getMusics();

        // Reset Form Fields
        $scope.resetForm();

      }, function (error) {
          var errors = '';
          for(var item in error ){
            errors+= ''+error[item]+' ';
          }
          $scope.formMessages.error = errors;

      });
    };


    // Sets the Music being marked for deletion
    $scope.prepareMusicDeletion = function(user){
      $scope.musicToDelete = user;
    };


    // Calls the API Populate Method, that populates the DB with music Data
    $scope.populate = function(){
      $scope.preloaders.list = true;
      $scope.preloaders.form = false;
      $scope.preloaders.populate = true;

      $scope.musics = [];
      APIData.populate().then(function (data) {
        getMusics();
        $scope.preloaders.populate = false;

      }, function (error) {
          console.log(error);
      });
    };

    // Reset all form fields, if flag parameter is set to true, alerts and warnings will be cleaned too
    $scope.resetForm = function(flag){
      if(flag==undefined)
        flag = false;
      $scope.music.artist  = '';
      $scope.music.album = '';
      $scope.music.pk = -1;
      $scope.music.track = '';
      if(flag) {
        $scope.formMessages.success = false;
        $scope.formMessages.error = false;
      }

    };

    // Get Music Data From API
    function getMusics(){
      APIData.getMusics().then(function(data) {
                    // promise fulfilled
                    $scope.musics = data;
                    $scope.preloaders.list = false;
                    $scope.preloaders.form = false;
                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });

    }



    getMusics();

  }]);
