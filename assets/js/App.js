define(['jquery','backbone', 'underscore', 'marionette', 'bootstrap', 'Views/App.Layout', 'Controller/App.Controller'],
    function ($, Backbone, _, marionette) {

    // set up the app instance
    var App = new Marionette.Application();

    // configuration, setting up regions, etc ...
    App.addRegions({
        appRegion:"#app"
    });

    App.addInitializer(function(options){
         // do useful stuff here
        appLayout = new AppLayout();
        App.appRegion.show(appLayout);
        appLayout.headerRegion.show(new HeaderView());
        appLayout.sidebarRegion.show(new SidebarView());
        appLayout.contentRegion.show(new PageView());

    }); 

    new AppRouter();

    App.on("initialize:after", function(){
        Backbone.history.start();
    });
    

    // export the app from this module
    return App;
    
});

