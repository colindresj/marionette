App.module('Models', function(Models, App, Backbone, Marionette, $, _){

  Models.User = Models.Main.extend({});

  var API = {
    setCurrentUser: function(currentUser){
      return new App.Models.User(currentUser);
    }
  };

  App.reqres.setHandler('set:currentUser', function(currentUser){
    return API.setCurrentUser(currentUser);
  });

});
