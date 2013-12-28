App.module('FooterModule.Show', function(Show, App, Backbone, Marionette, $, _){

  Show.FooterView = Backbone.Marionette.ItemView.extend({
    template: 'footer/show/templates/show',
    modelEvents: {
      'change': 'render'
    }
  });

});
