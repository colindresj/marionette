App.module('AppointmentsModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listAppointments: function(){
      var appointmentsView = this.getLeads();

      App.mainRegion.show(appointmentsView);
    },
    getLeads: function(){
      return new List.AppointmentsView();
    }
  };

});
