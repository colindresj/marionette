App.module('UsersModule.List', function(List, App, Backbone, Marionette, $, _){

  List.UsersLayoutView = App.Views.MainLayout.extend({
    template: 'users/list/templates/list',
    regions: {
      sideBarRegion: '#side-bar-region',
      usersRegion: '#users-region'
    }
  });

  List.SideBarView = App.Views.MainItemView.extend({
    template: 'users/list/templates/_sidebar',
    collectionEvents: {
      'sync': 'render'
    }
  });

  List.UserView = App.Views.MainItemView.extend({
    tagName: 'tr',
    template: 'users/list/templates/_user'
  });

  List.UsersView = App.Views.MainCompositeView.extend({
    template: 'users/list/templates/_users',
    itemView: List.UserView,
    itemViewContainer: 'tbody'
  });


});
