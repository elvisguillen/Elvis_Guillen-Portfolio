(function(e){e.noConflict(),e(document).ready(function(e){e(function(){e(".rslides").responsiveSlides({auto:!0,speed:1e3,duration:5e3}),e("#link-home").click(function(){e("#page-work").addClass("page-moveToBottom",function(){e("#page-work").removeClass("page-current"),e("#page-work").removeClass("page-moveToBottom")}),e("#page-home").addClass("page-current"),e("#page-home").addClass("page-moveFromTop")}),e("#link-work").click(function(){e("#page-home").addClass("page-moveToTop",function(){e("#page-home").removeClass("page-current"),e("#page-home").removeClass("page-moveToTop")}),e("#page-work").addClass("page-current"),e("#page-work").addClass("page-moveFromBottom")}),EG_Portfolio.start(),Backbone.history.start()})})})(jQuery);