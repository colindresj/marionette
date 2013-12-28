App.module('FooterModule.Show', function(Show, App, Backbone, Marionette, $, _){

  Show.Controller = {
    showFooter: function(){
      var currentUser = App.currentUser;
      var footerView = this.getFooterView(currentUser);

      // renders the new view and closes down any previously opened views
      // also fires off a show event
      App.footerRegion.show(footerView);
    },
    getFooterView: function(currentUser){
      return new Show.FooterView({
        model: currentUser
      });
    }
  };

});
