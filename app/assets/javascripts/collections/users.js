App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Users = Collections.Main.extend({
    model: App.Models.User
  });

});
