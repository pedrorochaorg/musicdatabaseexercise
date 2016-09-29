'use strict';

/**
 * @ngdoc service
 * @name websitedevApp.APIData
 * @description
 * # APIData
 * Service in the websitedevApp.
 */
angular.module('websitedevApp')
  .service('APIData', ['$http','$q',function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {

      getMusics: function(){
        return $http.get(apiUrl+'/musics/')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
      },
      getUsers: function(){
            return $http.get(apiUrl+'/users/')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
      },
      getUser: function(id){
              return $http.get(apiUrl+'/users/'+id+'/')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });

      },
      createUser: function(user){
          return $http.post(apiUrl+'/users/',user).then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
      },
      updateUser: function(user){
          return $http.put(apiUrl+'/users/'+user.pk+'/',user).then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
      },
      deleteUser: function(user){
          return $http.delete(apiUrl+'/users/'+user+'/').then(function(response) {
            console.log(response);
                        if (response.status === 204) {
                            return true;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
      }



    }


  }]);
