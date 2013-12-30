App.module('AppointmentsModule.List', function(List, App, Backbone, Marionette, $, _){

  List.AppointmentsView = App.Views.MainItemView.extend({
    template: 'appointments/list/templates/list'
  });

});
