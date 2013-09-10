require.config({

  paths: {
      'jquery'        : '../js/lib/jquery',
      'underscore'    : '../js/lib/underscore',
      'backbone'      : '../js/lib/backbone',
      'marionette'    : '../js/lib/backbone.marionette',
      'bootstrap'     : '../js/lib/bootstrap.min',
      'transit'       : '../js/lib/jquery.transit.min'  
  },
  shim: {
      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },
      'underscore': {
          exports: '_'
      },
      'marionette': {
          deps: ['jquery', 'backbone', 'underscore'],
          exports: 'marionette'
      },
      'bootstrap' : {
          deps: ['jquery'],
          exports: 'bootstrap'
      },
      'transit' : {
          deps: ['jquery'],
          exports: 'transit'
      }
    }

});

require(['App'], function(App){
    App.start();
});
