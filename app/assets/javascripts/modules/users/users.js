// This file is the top most authority for everything that happens among users
App.module('UsersModule', function(UsersModule, App, Backbone, Marionette, $, _){

  UsersModule.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'users': 'listUsers'
    }
  });

  var API = {
    listUsers: function(){
      UsersModule.List.Controller.listUsers();
    }
  };

  App.addInitializer(function(){
    return new UsersModule.Router({
      controller: API
    });
  });

});
