App.module('FooterModule.Show', function(Show, App, Backbone, Marionette, $, _){

  Show.Controller = {
    showFooter: function(){
      var footerView = this.getFooterView();

      // renders the new view and closes down any previously opened views
      // also fires off a show event
      App.footerRegion.show(footerView);
    },
    getFooterView: function(){
      return new Show.Footer();
    }
  };

});
