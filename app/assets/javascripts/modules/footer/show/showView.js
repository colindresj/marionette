App.module('FooterModule.Show', function(Show, App, Backbone, Marionette, $, _){

  Show.FooterView = App.Views.MainItemView.extend({
    template: 'footer/show/templates/show',
    modelEvents: {
      'change': 'render'
    }
  });

});
