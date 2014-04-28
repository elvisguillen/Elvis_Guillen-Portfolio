define(['jquery', 'backbone', 'underscore', 'marionette','App','Views/App.Layout', 'Views/App.Views'],
    function ($, Backbone, _, marionette, App, AppLayout) {

    // A Custom Function that conditonally determines what page is active and assigns animations to each page based off the parameters.
    // This gives it the fluid transition feeling as if it were a giant 10000px website zoomed in. 
    // currentPage = New Active Page, first-thirdPage = Potential Old Active Pages, 
    // first-thirdcurrentAni = Animations on the New Active Page after viewing the Old Active Page,
    // first-thirdAni = Animations on the Old Active Pages when loading the New Active Page

    function addAnimations(currentPage, firstPage, secondPage, thirdPage, fourthPage, firstcurrentAni, secondcurrentAni, thirdcurrentAni, fourthcurrentAni, firstAni, secondAni, thirdAni, fourthAni) {
          
          console.log('hellyes');

          if ($(firstPage).hasClass('page-current')) {

            $(currentPage).addClass('page-current');
            $(currentPage).addClass(firstcurrentAni);

            $(currentPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
              function(e) {
    
              // code to execute after animation ends
              $(currentPage).removeClass(firstcurrentAni);
            });

            $(firstPage).addClass(firstAni);
            $(firstPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    
              // code to execute after animation ends
              $(firstPage).removeClass('page-current');
              $(firstPage).removeClass(firstAni);
            });

          }

          if ($(secondPage).hasClass('page-current')) {

            $(currentPage).addClass('page-current');
            $(currentPage).addClass(secondcurrentAni);

            $(currentPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
              function(e) {
    
              // code to execute after animation ends
              $(currentPage).removeClass(secondcurrentAni);
            });
            
            $(secondPage).addClass(secondAni);
            $(secondPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    
              // code to execute after animation ends
              $(secondPage).removeClass('page-current');
              $(secondPage).removeClass(secondAni);
            });
          }

          if ($(thirdPage).hasClass('page-current')) {
            
            $(currentPage).addClass('page-current');
            $(currentPage).addClass(thirdcurrentAni);

            $(currentPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
              function(e) {
    
              // code to execute after animation ends
              $(currentPage).removeClass(thirdcurrentAni);
            });

            $(thirdPage).addClass(thirdAni);
            $(thirdPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    
              // code to execute after animation ends
              $(thirdPage).removeClass('page-current');
              $(thirdPage).removeClass(thirdAni);
            });
          }

          if ($(fourthPage).hasClass('page-current')) {
            
            $(currentPage).addClass('page-current');
            $(currentPage).addClass(fourthcurrentAni);

            $(currentPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
              function(e) {
    
              // code to execute after animation ends
              $(currentPage).removeClass(fourthcurrentAni);
            });

            $(fourthPage).addClass(fourthAni);
            $(fourthPage).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    
              // code to execute after animation ends
              $(fourthPage).removeClass('page-current');
              $(fourthPage).removeClass(fourthAni);
            });
          }
        };

    var appRouteController = {

        showHome: function() {
          addAnimations('#page-home', '#page-work', '#page-about', '#page-hireme', '.subpage', 'page-moveFromTop', 'page-moveFromTop', 'page-moveFromTop', 'page-moveFromTop', 'page-moveToBottom', 'page-moveToBottom', 'page-moveToBottom', 'page-moveToBottom')
          $('.nav-collapse a').removeClass();
          $('#maincontent, #mainheader').removeClass();
          $('#link-home').addClass('active');
        },

        showWork: function() {
          addAnimations('#page-work', '#page-home', '#page-about', '#page-hireme', '.subpage', 'page-moveFromBottom', 'page-moveFromTop', 'page-moveFromTop', 'page-moveFromLeft', 'page-moveToTop', 'page-moveToBottom', 'page-moveToBottom', 'page-moveToRight')
          $('.nav-collapse a').removeClass();
          $('#maincontent, #mainheader').removeClass();
          $('#link-work').addClass('active');
        },

        showWorkYT: function() {
          addAnimations('#page-work-yellaterra', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('yellaterraactive');
        },

        showWorkMT: function() {
          addAnimations('#page-work-midtown', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('midtownactive');
        },

        showWorkDE: function() {
          addAnimations('#page-work-defeye', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('defeyeactive');
        },

        showWorkTG: function() {
          addAnimations('#page-work-twelve21', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('twelve21active');        
        },

        showWorkSH: function() {
          addAnimations('#page-work-shredderexperts', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('shredderactive');        
        },

        showWorkFA: function() {
          addAnimations('#page-work-fautores', '#page-work', '#page-home', '#page-about', '#page-hireme', 'page-moveFromRight', 'page-moveFromRight', 'page-moveFromRight', 'page-moveToLeft', 'page-moveToLeft', 'page-moveToLeft')
          $('#link-work').addClass('fautoresactive');
        },

        showAbout: function() {
          addAnimations('#page-about', '#page-home', '#page-work', '#page-hireme', '.subpage', 'page-moveFromBottom', 'page-moveFromBottom', 'page-moveFromTop', 'page-moveFromBottom', 'page-moveToTop', 'page-moveToTop', 'page-moveToBottom', 'page-moveToTop')
          $('.nav-collapse a').removeClass();
          $('#maincontent, #mainheader').removeClass();
          $('#link-about').addClass('active');
        },

        showHireme: function() {
          addAnimations('#page-hireme', '#page-home', '#page-work', '#page-about', '.subpage', 'page-moveFromBottom', 'page-moveFromBottom', 'page-moveFromBottom', 'page-moveFromBottom', 'page-moveToTop', 'page-moveToTop', 'page-moveToTop', 'page-moveToTop')
          $('.nav-collapse a').removeClass();
          $('#maincontent, #mainheader').removeClass();
          $('#link-hireme').addClass('active');
        },
    };
    
    AppRouter = Backbone.Marionette.AppRouter.extend({

      appRoutes: {
           "home": "showHome",
           "work" : "showWork",
           "work/yellaterra" : "showWorkYT",
           "work/midtown" : "showWorkMT",
           "work/defeye" : "showWorkDE",
           "work/thesanfordproject" : "showWorkTG",
           "work/shredderexperts" : "showWorkSH",
           "work/fautores" : "showWorkFA",
           "about" : "showAbout",
           "hireme" : "showHireme"
       },

       controller: appRouteController

    });

    return AppRouter;
});


