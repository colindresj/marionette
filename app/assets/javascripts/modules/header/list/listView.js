App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.HeaderView = App.Views.MainItemView.extend({
    tagName: 'li',
    template: 'header/list/templates/_links'
  });

  List.HeadersView = App.Views.MainCompositeView.extend({
    template: 'header/list/templates/list',
    itemView: List.HeaderView,
    itemViewContainer: 'ul.navbar-right',
    appendHtml: function(collectionView, itemView){
      var $el = collectionView.$el.find(collectionView.itemViewContainer);
      $el.prepend(itemView.el);
    },
    initialize: function(){
      this.listenTo(App.currentUser, 'change', this.render);
    }
  });
});
