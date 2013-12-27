App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listHeader: function(){
      var links = App.request('header:links');
      var headerView = this.getHeaderView(links);

      App.headerRegion.show(headerView);
    },
    getHeaderView: function(links){
      return new List.HeadersView({ collection: links });
    }
  };

});
