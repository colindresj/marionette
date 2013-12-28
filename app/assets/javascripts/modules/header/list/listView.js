App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.HeaderView = App.Views.MainItemView.extend({
    tagName: 'li',
    template: 'header/list/templates/_each'
  });

  List.HeadersView = App.Views.MainCompositeView.extend({
    template: 'header/list/templates/list',
    itemView: List.HeaderView,
    itemViewContainer: 'ul.navbar-right'
  });
});
