define(['jquery','backbone', 'underscore', 'marionette', 'App', 'Views/App.Layout'],
    function ($, Backbone, _, marionette, App) {


	HeaderView = Backbone.Marionette.ItemView.extend({
	  template: "#template-header",


		events: {
        	"click .navbar-toggle": "showMenu",
    	},

        showMenu: function() {
          $('#maincontent, #mainheader').toggleClass('menu-open');
        }, 
	});

	SidebarView = Backbone.Marionette.ItemView.extend({
		template: "#template-sidebar"
		
	});



  	PageView = Backbone.Marionette.ItemView.extend({
	  template: "#template-page-home",

	  events: {
        	"click .menu-open.mainview": "showPageMenu",
      },

      showPageMenu: function() {
         $('#maincontent, #mainheader').removeClass('menu-open');
       },

	});
  	
    return PageView;
}); 
