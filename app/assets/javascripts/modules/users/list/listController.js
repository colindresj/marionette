App.module('UsersModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listUsers: function(){

      // using a promise because of asynch
      var xhrPromise = App.request('users:allUsers');
      xhrPromise.done($.proxy(function(users){
        this.usersLayout = this.getUsersLayout();

        this.usersLayout.on('show', function(){

          // passing in the same users collection to both regions
          this.showSideBar(users);
          this.showUsers(users);
        }, this);

        App.mainRegion.show(this.usersLayout);
      }, this));

    },
    showSideBar: function(users){
      var sideBarView = this.getSideBarView(users);
      this.usersLayout.sideBarRegion.show(sideBarView);
    },
    showUsers: function(users){
      var usersView = this.getUsersView(users);
      this.usersLayout.usersRegion.show(usersView);
    },
    getUsersLayout: function(){
      return new List.UsersLayoutView();
    },
    getSideBarView: function(users){
      return new List.SideBarView({ collection: users });
    },
    getUsersView: function(users){
      return new List.UsersView({ collection: users });
    }
  };

});
