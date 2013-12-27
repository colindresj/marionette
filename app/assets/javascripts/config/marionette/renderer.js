// overwriting the default renderer function of Marionette in order
// to use more relative paths in the view files
window.JST = window.JST || {};
Backbone.Marionette.Renderer.render = function(template, data){
  var path = JST['modules/' + template];
  if (!path) {
    throw 'Template ' + template + ' not found!';
  }
  return path(data);
};
