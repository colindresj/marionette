App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Header = Collections.Main.extend({
    model: App.Models.HeaderLink
  });

  var API = {
    getLinks: function(){
      return new Backbone.Collection([
        { name: 'Users', url: window.Routes.users_path() },
        { name: 'Leads', url: window.Routes.leads_path() },
        { name: 'Appointments', url: '/appointments' }
      ]);
    }
  };

  App.reqres.setHandler('header:links', function(){
    return API.getLinks();
  });

});
