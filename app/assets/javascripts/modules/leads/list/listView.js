App.module('LeadsModule.List', function(List, App, Backbone, Marionette, $, _){

  List.LeadsView = App.Views.MainItemView.extend({
    template: 'leads/list/templates/list'
  });

});
