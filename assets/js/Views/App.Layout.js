define(['jquery','backbone', 'underscore', 'marionette', 'transit', 'App', 'Views/App.Views', 'Controller/App.Controller'],
    function ($, Backbone, _, marionette, App) {

	AppLayout = Backbone.Marionette.Layout.extend({
	  template: "#template-app-layout",

	  regions: {
	  	headerRegion: {
	  		selector: "header#mainheader",
	  	},
	  	sidebarRegion: {
	  		selector: ".menu",
	  	},
	  	contentRegion: {
	  		selector: ".mainview",
	  	}
	  }
  });




  return AppLayout;
    
}); 
