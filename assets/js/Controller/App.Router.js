define(['jquery','backbone', 'underscore', 'marionette', 'App', 'Views/App.Layout'],
    function ($, Backbone, _, marionette, App) {

    return Backbone.Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "index"
       }
   });

});