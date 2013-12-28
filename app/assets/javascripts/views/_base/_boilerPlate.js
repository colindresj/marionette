App.module('Views', function(Views, App, Backbone, Marionette, $, _){

  // extending Marionette's prototype in order to add a currentUser template helper
  // which allows us to constantly have the model's attributes exposed to all views
  _.extend(Marionette.View.prototype, {
    templateHelpers: function(){
      return {
        currentUser: App.request('get:currentUser').toJSON()
      };
    }
  });

});
