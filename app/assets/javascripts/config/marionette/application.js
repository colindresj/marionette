// adding some custom navigation methods to the Marionette.Application prototype
_.extend(Backbone.Marionette.Application.prototype, {
  navigate: function(route, options){
    var options = options || {};

    // appending # to root routes for consistency
    if (route.charAt(0) === '/') route = '#' + route;

    return Backbone.history.navigate(route, options);
  },
  getCurrentRoute: function(){
    return Backbone.history.fragment;
  }
});
