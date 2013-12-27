// This file is the top most authority for everything that happens in the footer

App.module('FooterModule', function(FooterModule, App, Backbone, Marionette, $, _){

  // don't start the module until explicitly called
  FooterModule.startWithParent = false;

  var API = {
    showFooter: function(){
      FooterModule.Show.Controller.showFooter();
    }
  };


  // Initializing the footer module

  //*** Method 1
  // Buried too deply in the code
  // App.addInitializer(function(){
  //   API.showFooter();
  // });


  //*** Method 2
  // requires an initializer call in the overall app: application.execute('footer:show');
  // Not expressive enough.
  // App.commands.setHandler('footer:show', function(){
  //   API.showFooter();
  // });


  //*** Method 3
  FooterModule.on('start', function(){
    API.showFooter();
  });

});
