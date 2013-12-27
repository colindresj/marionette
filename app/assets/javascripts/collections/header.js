App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Header = Collections.Main.extend({
    model: App.Models.HeaderLink
  });

  var API = {
    getLinks: function(){
      return new Backbone.Collection([
        { name: 'Users' },
        { name: 'Leads'},
        { name: 'Appointments'}
      ]);
    }
  };

  App.reqres.setHandler('header:links', function(){
    return API.getLinks();
  });

});
