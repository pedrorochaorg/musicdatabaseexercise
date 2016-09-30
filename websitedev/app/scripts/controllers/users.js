'use strict';

/**
 * @ngdoc function
 * @name MusicDatabaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MusicDatabaseApp
 */
angular.module('MusicDatabaseApp')
  .controller('UsersCtrl', ['APIData','$scope', '$anchorScroll', function (APIData,$scope,$anchorScroll) {

    /*
      Preloader On/Off bindings
     */
    $scope.preloaders = {
      list: true,
      form: false
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
    $scope.users = [];
    $scope.user = {
      pk: null,
      username: '',
      email: '',
      musics: [

      ]
    };
    $scope.musics = [];

    /*
      Transport bindings ( Transport values between actions that require some sort of user confirmation )
     */
    $scope.userToDelete = null;
    $scope.selectedMusic = {
      album: null,
      track: null,
      artist: null

    };
    $scope.selectedSong = null;



    /*
      Action bindings
     */

    // Form Submit Handler
    $scope.submitForm = function(user,invalid){
  // Check if form is invalid
  if(!invalid) {

    //Display form preloader
    $scope.preloaders.list = false;
    $scope.preloaders.form = true;

    //If the user object contains a property named pk and/or it's value equals to -1, it means taht we are creating a new record instead of updating an existing one.
    if (user.pk == null || user.pk == undefined || user.pk == -1) {

      // Create a new user
      APIData.createUser({username: user.username, email: user.email, musics: user.musics}).then(function (data) {

        $scope.userForm.$setPristine();
        $scope.preloaders.list = true;
        $scope.preloaders.form = false;
        $scope.formMessages.success = 'Record created successfuly!';

        getUsers();
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

      // Edit an existing user

      APIData.updateUser({
        username: user.username,
        email: user.email,
        pk: user.pk,
        musics: user.musics
      }).then(function (data) {
        $scope.userForm.$setPristine();
        $scope.preloaders.list = true;
        $scope.preloaders.form = false;
        $scope.formMessages.success = 'Record updated successfuly!';

        getUsers();
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
  }
};

    // Select User for Update purposes
    $scope.editUser = function(user){
      // Scroll to Top
      $anchorScroll();

      // Activate loading preloaders
      $scope.preloaders.list = false;
      $scope.preloaders.form = true;

      // Get user from DB
      APIData.getUser(user.pk).then(function (data) {
           $scope.user = data;
           $scope.preloaders.form = false;
      }, function (error) {
          console.log(error);
      });
    };

    // Delete user from DB
    $scope.deleteUser = function(user){

      // Activate loading preloaders
      $scope.preloaders.list = true;
      $scope.preloaders.form = false;

      // Delete User Service
      APIData.deleteUser(user.pk).then(function (data) {

        $scope.formMessages.success = 'Record deleted successfuly!';

        // Update User List
        getUsers();

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

    // Sets the user being marked for deletion
    $scope.prepareUserDeletion = function(user){
      $scope.userToDelete = user;
    };

    // Add Music to users Fav list
    $scope.addSong = function(song){
        $scope.user.musics.push(parseInt(song));
    };


    // Delete Music from users Fav list
    $scope.deleteUserSong = function(pk,items){

      var index = $scope.user.musics.indexOf(pk);
      if(index != -1){
        $scope.user.musics.splice(index,1);
      }
      console.log($scope.user);
    };


    // Reset all form fields, if flag parameter is set to true, alerts and warnings will be cleaned too
    $scope.resetForm = function(flag){
      if(flag==undefined)
        flag = false;
      $scope.user.username  = '';
      $scope.user.email = '';
      $scope.user.pk = -1;
      $scope.user.musics = [];
      if(flag) {
        $scope.formMessages.success = false;
        $scope.formMessages.error = false;
      }
      $scope.selectedSong = $scope.musics[0].pk;
    };


    // Get User Data From API
    function getUsers(){
       APIData.getUsers().then(function(data) {
                    // promise fulfilled
                    $scope.users = data;
                    $scope.preloaders.list = false;
                    $scope.preloaders.form = false;

                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });
    }

    // Get Music Data From API
    function getMusics(){
      APIData.getMusics().then(function(data) {
                    // promise fulfilled
                    $scope.musics = data;
                    if(data.length>0)
                        $scope.selectedSong = $scope.musics[0].pk;

                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                          console.log(error);

                });

    }


    /*
      Run on Init
     */
    getUsers();
    getMusics();

  }]);
