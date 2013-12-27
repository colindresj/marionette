App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listHeader: function(){
      var links = this.getLinksCollection();
      var headerView = this.getHeaderView(links);

      App.headerRegion.show(headerView);
    },
    getHeaderView: function(links){
      return new List.HeadersView({ collection: links });
    },
    getLinksCollection: function(){
      return new Backbone.Collection([
        { name: 'Users' },
        { name: 'Leads'},
        { name: 'Appointments'}
      ]);
    }
  };

});
