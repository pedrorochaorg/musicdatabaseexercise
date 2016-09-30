'use strict';

/**
 * @ngdoc service
 * @name MusicDatabaseApp.APIData
 * @description
 * # APIData
 * Service in the MusicDatabaseApp. This service is responsible for all the Communications between this webapp and our Django API. This service returns a promisse for each method
 */
angular.module('MusicDatabaseApp')
  .service('APIData', ['$http','$q',function ($http,$q) {

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
      getMusic: function(id){
              return $http.get(apiUrl+'/musics/'+id+'/')
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
      createMusic: function(user){
          return $http.post(apiUrl+'/musics/',user).then(function(response) {
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
      updateMusic: function(user){
          return $http.put(apiUrl+'/musics/'+user.pk+'/',user).then(function(response) {
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
      deleteMusic: function(user){
          return $http.delete(apiUrl+'/musics/'+user+'/').then(function(response) {

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
      },
      populate: function(){
        return $http.get(apiUrl+'/populate/').then(function(response) {
                         if (typeof response.data === 'object') {
                              return response.data['status'];
                        }  else {
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
