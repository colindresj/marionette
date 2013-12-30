// This file is the top most authority for everything that happens among appointments
App.module('AppointmentsModule', function(AppointmentsModule, App, Backbone, Marionette, $, _){

  AppointmentsModule.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'appointments': 'listAppointments'
    }
  });

  var API = {
    listAppointments: function(){
      AppointmentsModule.List.Controller.listAppointments();
    }
  };

  App.addInitializer(function(){
    return new AppointmentsModule.Router({
      controller: API
    });
  });

});
