// adding some custom navigation methods to the Marionette.Application prototype
_.extend(Backbone.Marionette.Application.prototype, {
  navigate: function(route, options){
    var options = options || {};
    return Backbone.history.navigate(route, options);
  },
  getCurrentRoute: function(){
    return Backbone.history.fragment;
  }
});
