window.App = (function(Backbone, Marionette){
  var application = new Marionette.Application();
  application.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  application.addInitializer(function(){
    application.module('FooterModule').start();
  });

  application.on('initialize:after', function(){
    if (Backbone.history) Backbone.history.start();
  });

  return application;
})(Backbone, Marionette);


// Start this up baby!
$(function(){
  App.start();
});
