window.App = (function(Backbone, Marionette){
  var application = new Marionette.Application();

  application.rootRoute = window.Routes.users_path();

  application.on('initialize:before', function(options){

    // hadning off the currentUser object to the user model and
    // request a newly instantiated model for the current user
    App.currentUser = App.request('set:currentUser', options.currentUser);
  });

  application.reqres.setHandler('get:currentUser', function(){
    return App.currentUser;
  });

  application.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  application.addInitializer(function(){
    application.module('HeaderModule').start();
    application.module('FooterModule').start();
  });

  application.on('initialize:after', function(){
    if (Backbone.history) {
      Backbone.history.start();
      if (this.getCurrentRoute() === '') this.navigate(this.rootRoute, {trigger: true});
    }
  });

  return application;
})(Backbone, Marionette);


// Start this up baby!
$(function(){
  App.start({
    currentUser: gon.current_user
  });
});
