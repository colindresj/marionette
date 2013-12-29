App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Users = Collections.Main.extend({
    model: App.Models.User,
    url: window.Routes.users_path()
  });

  var API = {
    getAllUsers: function(){
      var users = new Collections.Users();
      var promise = $.Deferred();
      users.fetch({

        // sending back a promise that will resolve on success
        success: function(){
          (function(users, promise){
            promise.resolve(users);
          })(users, promise);
        }
      });
      return promise;
    }
  };

  App.reqres.setHandler('users:allUsers', function(){
    return API.getAllUsers();
  });

});
