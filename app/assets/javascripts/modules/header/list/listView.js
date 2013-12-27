App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.HeaderView = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: 'header/list/templates/_each'
  });

  List.HeadersView = Backbone.Marionette.CompositeView.extend({
    template: 'header/list/templates/list',
    itemView: List.HeaderView,
    itemViewContainer: 'ul.navbar-right'
  });
});
