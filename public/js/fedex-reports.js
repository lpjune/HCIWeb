


$(document).ready(function(){

  // generate all cards dom and put under all tab
  var html = "";
  for(i = 0; i < allArray.length; i++) {
    report = allArray[i];
    html += genCard(report.title, report.detail, report.date, report.category);
  }
  $("#all-cards").html(html);

  // generate manager cards dom
  var html = "";
  for(i = 0; i < managerArray.length; i++) {
    report = managerArray[i];
    html += genCard(report.title, report.detail, report.date, report.category);
  }
  $("#manager-cards").html(html);

  // generate senior manager cards dom
  var html = "";
  for(i = 0; i < seniorManagerArray.length; i++) {
    report = seniorManagerArray[i];
    html += genCard(report.title, report.detail, report.date, report.category);
  }
  $("#senior-manager-cards").html(html);

  // select all tab on page load
  $('#all-link').click();

});

(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

})(jQuery); // End of use strict
