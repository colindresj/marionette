App.module('FooterModule.Show', function(Show, App, Backbone, Marionette, $, _){

  Show.Footer = Backbone.Marionette.ItemView.extend({
    template: 'footer/show/templates/show'
  });

});
