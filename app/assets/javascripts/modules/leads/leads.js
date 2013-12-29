// this is the top most authoriy for the leads
App.module('LeadsModule', function(LeadsModule, App, Backbone, Marionette, $, _){

  LeadsModule.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'leads': 'listLeads'
    }
  });

  var API = {
    listLeads: function(){
      LeadsModule.List.Controller.listLeads();
    }
  };

  App.addInitializer(function(){
    return new LeadsModule.Router({
      controller: API
    });
  });

});
